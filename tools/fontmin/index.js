const Fontmin = require('fontmin');

const srcPath = './DMFT1555175571544.ttf';
const destPath = './font';
const text = 'ALGAE TERMINATOR';

const fontmin = new Fontmin()
   .src(srcPath)
   .use(Fontmin.glyph({
      text,
   }))
   .use(Fontmin.ttf2eot())     // eot 转换插件
   .use(Fontmin.ttf2woff())    // woff 转换插件     
   .use(Fontmin.ttf2svg())     // svg 转换插件
   .use(Fontmin.css({
      base64: true		// 开启 base64 嵌入，默认关闭
   }))         // css 生成插件
   .dest(destPath);            // 输出配置

// 执行
fontmin.run(function (err, files, stream) {

   if (err) {                  // 异常捕捉
      console.error(err);
   }

   console.log('done');        // 成功
});