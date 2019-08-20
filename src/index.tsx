import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { analysis } from './analysis';

boot().catch(analysis.logError);
async function boot() {
   ReactDOM.render(
      <Router basename='/Team:SEU-Nanjing-China'>
         <App />
      </Router>,
      document.getElementById('root')
   );
   analysis.logVisit();
}
