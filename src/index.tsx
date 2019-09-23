import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';

import { analysis } from './analysis';
import App from './App';

boot().catch(analysis.logError);
async function boot() {
   // 初始化 Fabric 图标
   initializeIcons();

   analysis.logVisit();

   hideIgemElements();

   const $Root = document.createElement('div');
   $Root.setAttribute('id', 'root');
   document.body.appendChild($Root);

   ReactDOM.render(
      <App />,
      $Root
   );
}

function hideIgemElements() {
   const el = document.getElementById('content');
   if (el) el.style.display = 'none';
}
