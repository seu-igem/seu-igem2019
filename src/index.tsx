import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';
import $ from 'jquery';

import App from './App';
import { analysis } from './analysis';
import { pageCtrl } from './page';
import { locaCtrl } from './loca-ctrl';

boot().catch(analysis.logError);
async function boot() {
   // 从 CDN 初始化 Fabric 图标
   initializeIcons();

   analysis.logVisit();

   if ($('#content')) $('#content').css('display', 'none');

   const elRoot = document.createElement('div');
   elRoot.setAttribute('id', 'root');
   $('body').append(elRoot);

   ReactDOM.render(
      <App />,
      elRoot
   );

   pageCtrl.watchPageBehavior();
   locaCtrl.emit('hrefDidUpdate');
}
