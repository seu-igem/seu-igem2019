import glob from 'glob';
import fs from 'fs-extra';
import pupp from 'puppeteer';
import { getFileHash, concurrencyRestrictify, delay, waitUntilUrlChanged } from './util';
import login from './login';
import config from '../wiki-config.json';
import { merge } from 'lodash';

if (!fs.existsSync('../assets')) {
   fs.mkdir('../assets');
}

interface Track {
   [hash: string]: /* iGEM URL */ string;
}

const track: Track = fs.existsSync('../assets/.track.json')
   ? fs.readJSONSync('../assets/.track.json')
   : {};

interface AssetsPath {
   [_: string]: AssetsPath | /* iGEM URL */ string;
}
const assetsPath: AssetsPath = fs.existsSync('../src/assets-path.json')
   ? fs.readJSONSync('../src/assets-path.json')
   : {};

(async () => {
   const browser = await pupp.launch({ headless: false });
   await login(browser);
   console.log('已登入...');

   const uploadFile = concurrencyRestrictify(_uploadFile, 2);
   async function _uploadFile(filepath: string, hash: string) {
      if (track[hash]) {
         // console.log(filepath + ' 将不被上传');
         return track[hash];
      }

      const page = await browser.newPage();
      page.setViewport({ width: 1920, height: 800 });
      await page.goto(config.uploadFileUrl, { waitUntil: 'domcontentloaded' });

      const inputFile = await page.$('#wpUploadFile') as pupp.ElementHandle;
      await inputFile.uploadFile(filepath);

      const remoteFilename = getRemoteFilename(filepath, hash);
      await page.type('#wpDestFile', remoteFilename);

      await Promise.all([
         page.click('input[name=wpUpload]'),
         page.waitForNavigation({
            waitUntil: 'load',
            timeout: 300000,
         }),
      ]);

      if (page.url() === config.uploadFileUrl) {
         console.log(filepath + ': 上传失败（重复/重名...）');
         console.log(filepath + ': 原定文件名: ' + remoteFilename);
         await page.close();
         throw new Error();
      } else {
         let fileURL = await page.$eval('.internal', a => a.getAttribute('href')) as string;
         if (!fileURL.startsWith('http')) {
            if (fileURL.startsWith('/')) {
               fileURL = config.igemUrl + fileURL;
            } else {
               console.log(filepath + ': 获得了相对路径或其他类型地址，无法处理↓');
               console.log(fileURL);
               await page.close();
               throw new Error();
            }
         }
         console.log(filepath + '  ->  ' + fileURL);
         await page.close();
         return fileURL as string;
      }
   }

   await Promise.all(
      glob.sync('../assets/**/*')
         .filter(filepath =>
            !fs.statSync(filepath).isDirectory()
            && checkNameValidity(filepath)
            && checkExtension(filepath)
            && checkSize(filepath)
         )
         .map(filepath => ({
            filepath,
            hash: getFileHash(filepath),
         }))
         .map(async file => {
            let fileURL = '';
            try {
               fileURL = await uploadFile(file.filepath, file.hash);
               updateTrack({
                  [file.hash]: fileURL,
               });
            } catch (e) {
               console.log(file.filepath + ': 上传失败 ' + getRemoteFilename(file.filepath, file.hash));
            } finally {
               const dirs = file.filepath.split('/');
               dirs.shift();
               const newAssetsPath: AssetsPath = {};

               let obj: any = newAssetsPath;
               dirs.forEach((dir, i) => {
                  dir = dir
                     .replace(/\-([0-9a-zA-Z_])/g, (all, $1: string) => $1.toUpperCase())
                     .replace(/\s/g, '')
                     .replace(/\./g, '$');
                  obj[dir] = i === (dirs.length - 1)
                     ? fileURL
                     : {};
                  obj = obj[dir];
               });
               updateAssetsPath(newAssetsPath);
            }
         })
   );

   await browser.close();
})();

function updateTrack(newTrack: Track) {
   merge(track, newTrack);
   fs.writeJSONSync('../assets/.track.json', track, {
      spaces: 3,
   });
}
function updateAssetsPath(newAssetsPath: AssetsPath) {
   merge(assetsPath, newAssetsPath);
   fs.writeJSONSync('../src/assets-path.json', assetsPath, {
      spaces: 3,
   });
}

function getRemoteFilename(filepath: string, hash: string) {
   return 'T--' + config.teamName + '--' + hash + '.' +
      filepath.split('.').pop();
}
function checkNameValidity(filepath: string) {
   const dirs = filepath.split('/');
   dirs.shift();
   dirs.forEach(dir => {
      if (!/^[a-zA-Z0-9_\- \.\$]+$/.test(dir)) {
         console.log(dir);
         console.log(filepath + ': 路径非法');
         return false;
      }
   });
   return true;
}

function checkExtension(filepath: string) {
   const filename = filepath.split('/').pop() as string;
   const ext = filename.split('.').pop() as string;
   const allowed =
      ('png, gif, jpg, jpeg, pdf, ppt, txt, zip, mp3, ' +
         'mp4, webm, mov, swf, xls, xlsx, docx, pptx, csv, m, ogg, ' +
         'gb, tif, tiff, fcs, otf, eot, ttf, woff, svg').split(', ');

   if (filename.split('.').length === 0
      || !~allowed.indexOf(ext)) {
      console.log(filepath + ': 非法扩展名');
      return false;
   }
   return true;
}

function checkSize(filepath: string) {
   const sizeInBytes = fs.statSync(filepath).size;
   const sizeInMB = sizeInBytes / (1024 * 1024);
   if (sizeInMB > 99) {
      console.log(filepath + ': 超过 100 MB');
      return false;
   }
   return true;
}
