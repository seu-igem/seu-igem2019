// tslint:disable
import pupp from 'puppeteer';
import fs from 'fs-extra';
import glob from 'glob';
import login from './login';
import config from '../wiki-config.json';
import { delay } from './util';

const selector = '../dist/**/*.{js,css}';
interface File2BeUploaded {
  path: string;
  content: string;
}

(async () => {
  const browser = await pupp.launch({ headless: false });
  await login(browser);

  const files = searchTargetFiles();
  let succeedNum = 0;

  for (const file of files) {
    await singleUpload(file);
  }

  async function singleUpload(file: File2BeUploaded) {
    const edit_page = await browser.newPage();
    console.log(file.path + ': 前往...');
    await edit_page.goto(`${config.igemUrl}/wiki/index.php?title=Team:${config.teamName}/${file.path}&action=edit`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    console.log(file.path + ': 抵达...');
    await edit_page.$eval(
      '.mw-ui-input',
      (el: any, content: string) => { el.value = content },
      file.content
    );

    await edit_page.click('#wpSave');
    console.log(file.path + ': 提交...');

    for (let i = 0; i < 600; ++i) {
      await delay(0.1);
      if (edit_page.url() === `${config.teamUrl}/${file.path}`) {
        break;
      }
      if (i === 599) throw new Error('Login timeout');
    }
    console.log(file.path + ': 提交成功 (' + (++succeedNum) + '/' + files.length + ')');
    await edit_page.close();
  }

  await browser.close();
})().catch(r => console.error(r));

function searchTargetFiles() {
  const targetFiles: File2BeUploaded[] = [];

  glob.sync(selector)
    .forEach(path => {
      targetFiles.push({
        path: path.substring(8),
        content: fs.readFileSync(path, 'utf8')
      });
    });

  return targetFiles;
}