import fs from 'fs-extra';
import config from '../wiki-config.json';
import md5 from 'md5';

if (!fs.existsSync('../build') ||
  !fs.existsSync('../build/index.html')) {
  throw new Error('File or directory not exists.');
}

if (fs.existsSync('../dist')) fs.removeSync('../dist');
fs.copySync('../build', '../dist');

let htmlContent = fs.readFileSync('../dist/index.html', 'utf8');

// 1. 把 inline script 转成一个独立 js 文件 (static/js/inline-%hash%.js])
htmlContent = htmlContent.replace(
  /<script>(.+?)<\/script>/g,
  (match, $1: string) => {
    const filename = 'inline-' + md5($1).substring(0, 8) + '.js';

    // 2. 替换 inline script 中的字符:
    $1 = $1
      .replace(/\.css\?action=raw/g, '-css?action=raw')
      .replace(/\.js\?action=raw/g, '-js?action=raw');

    fs.writeFileSync('../dist/static/js/' + filename, $1, 'utf8');

    return `<script src="${config.teamUrlPrefix
      }/static/js/${filename}?action=raw&ctype=text/javascript"></script>`;
  }
);

// 3. 处理 index.html 中 `<script>` 和 `<link>` 的路径，`*.js/css` -> `*-js/css`
htmlContent = htmlContent
  .replace(/\.css\?action=raw/g, '-css?action=raw')
  .replace(/\.js\?action=raw/g, '-js?action=raw');

fs.writeFileSync('../dist/index.html', htmlContent, 'utf8');
console.log('done');
