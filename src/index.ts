import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';

import { analysis } from './analysis';
import { assets } from './assets-path.json';
import { noop } from './util';
import App from './App';

boot().catch(analysis.logError);
async function boot() {
   initializeIcons();
   fontsPreload();
   hideIgemElements();
   patchScrollBehavior();

   const $root = document.createElement('div');
   $root.setAttribute('id', 'root');
   document.body.appendChild($root);

   ReactDOM.render(
      React.createElement(App, null),
      $root
   );
}

function hideIgemElements() {
   const el = document.getElementById('content');
   if (el) el.style.display = 'none';
}

/**
 * Fonts will start downloading only if needed.
 * Use ajax to preload artificially.
 */
function fontsPreload() {
   const list = [
      assets.fonts.FuturaPTLight$otf,
      assets.fonts.FuturaPTBook$otf,
      assets.fonts.Raleway$woff,
   ];
   try {
      list.forEach(url => {
         const xhr = new XMLHttpRequest();
         xhr.open('GET', url, true);
         xhr.responseType = 'arraybuffer';
         xhr.onreadystatechange = noop;
         xhr.send();
      });
   } catch (e) { }
}

function patchScrollBehavior() {
   if (!('scrollBehavior' in document.documentElement.style)) {
      import('scroll-behavior-polyfill');
   }
}
