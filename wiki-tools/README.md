# Wiki tools

**将 CWD 改为本目录**，用 `ts-node <脚本名>` 执行脚本。

## fix.ts: iGEM Wiki 各种~~辣鸡~~毛病兼容化处理 (build -> dist)

1. 把 inline 的 script 转成一个独立 js 文件 (static/js/inline-%hash%.js])
2. 替换 inline script 中的字符，使得 React 懒加载路径正确:
  - `.css?action=raw` -> `-css?action=raw`
  - `.js?action=raw` -> `-js?action=raw`
3. 处理 index.html 中 `<script>` 和 `<link>` 的路径，`*.js/css` -> `*-js/css`

## upload.ts: 上传 dist/*.{css,js}

`dist/dir/dir/*.ext` -> `igem.org/Team:XXX/dir/dir/*-ext`

注意！`*.ext` -> `*-ext`

## assets.ts: 上传 assets 目录下的所有文件

* `assets/dir/dir/file.ext` -> `igem.org/.../T--TeamName--File&FilePathHash.ext`
* 上述 `File&FilePathHash` 计算法：
  1. md5( 'dir/dir/file.ext' + md5(File) )
  2. 截取前 8 位
* 计算出的 Hash 若在 `assets/.track.json` 已存在则不上传，否则上传，并更新或生成 `src/assets-path.json`，更新或生成 `assets/.track.json`

### 限制

* Size <= 100MB
* images: png, gif, jpg, jpeg, svg, tif, tiff
* videos: mp3, mp4, webm, mov, swf, ogg
* documents: pdf, ppt, xls, xlsx, docx, pptx, csv
* fonts: ttf, woff, otf, eot
* other: txt, zip, m, gb, fcs

----------------------------------------------------------------

## Notes

* 若安装 Puppeteer 出错，配置翻墙，其 build 过程使用的是 npm 的 proxy 设置
  * 转换 socks 代理到 http 代理的小工具（适用 windows/linux）：
    1. `npm install -g http-proxy-to-socks`
    2. `hpts -s 127.0.0.1:<socks_port> -p <http_port>`
  * npm 代理：
    * `npm config set http http://127.0.0.1:<http_port>`
    * `npm config set https-proxy http://127.0.0.1:<http_port>`
  * npm 取消代理：
    * `npm config delete http`
    * `npm config delete https-proxy`