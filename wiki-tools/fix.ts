import fs from 'fs-extra';

if (!fs.existsSync('../build') ||
   !fs.existsSync('../build/index.html')) {
   throw new Error('File or directory not exists.');
}

if (fs.existsSync('../dist')) fs.removeSync('../dist');
fs.copySync('../build', '../dist');

let htmlContent = fs.readFileSync('../dist/index.html', 'utf8');

htmlContent = htmlContent
   .replace('<!doctype html>', '')
   .replace(/<script>(.+?)<\/script>/g,
      (match, $1: string) => {
         $1 = $1
            .replace(/\.css\?action=raw/g, '-css?action=raw')
            .replace(/\.js\?action=raw/g, '-js?action=raw');

         return `
         <script>
            !function(){
               var script = '${$1.replace(/'/g, '\'').replace(/\\/g, '\\\\')}';
               var symbolAnd = '&'.replace('amp;', '');
               script = script.replace(/&/g, symbolAnd);
               eval(script);
            }()
         </script>`;
      })
   .replace(/<script /g, '<script defer ')
   .replace(/\.css\?action=raw/g, '-css?action=raw')
   .replace(/\.js\?action=raw/g, '-js?action=raw');

fs.writeFileSync('../dist/index.html', htmlContent, 'utf8');
console.log('done');
