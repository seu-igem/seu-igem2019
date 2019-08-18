# Wiki tools

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