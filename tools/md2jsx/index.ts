import { parse } from '@textlint/markdown-to-ast';
import fs from 'fs-extra';
import glob from 'glob';
import md5 from 'md5';

const track = fs.readJSONSync('./mds/.track.json');

glob.sync('./mds/**/*.md')
   .map(path => ({
      path,
      content: fs.readFileSync(path, 'utf8'),
      hash: md5(fs.readFileSync(path, 'utf8')),
   }))
   // .filter(({ path, hash }) => !(track[path] && track[path] === hash))
   .forEach(processing);

function processing({ path, content, hash }) {
   const newPath = path.replace('.md', '.result');
   content = walkNode(parse(content));
   fs.writeFileSync(newPath, content, 'utf8');
   track[path] = hash;
   fs.writeJSONSync('./mds/.track.json', track, { spaces: 3 });
}

function getTRkey() {
   return md5(Math.random() + '').substring(0, 10);
}

function walkNode(node, indent = 0): string {
   let start = '';
   let content = '';
   let end = '';

   switch (node.type) {
      case 'Document':
         content = walkNodeList(node.children, indent);
         break;
      case 'Paragraph': {
         const tag = 'TRp';
         content = `<${tag} TRkey='${getTRkey()}'>${
            walkNodeList(node.children, 0).replace(/'/g, '\\\'')
            }</${tag}>\n`;
         break;
      }
      case 'Header': {
         const tag = 'TRH' + node.depth;
         content = `<${tag} TRkey='${getTRkey()}'>${
            walkNodeList(node.children, 0).replace(/'/g, '\\\'')
            }</${tag}>\n`;
         break;
      }
      case 'Emphasis': {
         const tag = 'i';
         start = '<' + tag + '>';
         end = '</' + tag + '>';
         content = walkNodeList(node.children, 0);
         break;
      }
      case 'Strong': {
         const tag = 'b';
         start = '<' + tag + '>';
         end = '</' + tag + '>';
         content = walkNodeList(node.children, 0);
         break;
      }
      case 'Str':
         content = getSpace(indent) + node.value;
         break;
      case 'HorizontalRule':
         content = getSpace(indent) + '<hr />' + '\n';
         break;
   }

   if (start !== '') start = getSpace(indent) + start;
   if (end !== '') end = getSpace(indent) + end;
   return start + content + end;
}

function walkNodeList(nodeList, indent) {
   return nodeList.map(node => walkNode(node, indent)).join('');
}

function getSpace(indent: number) {
   let space = '';
   for (let i = 0; i < indent; i++) {
      space += ' ';
   }
   return space;
}
