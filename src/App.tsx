import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import Loading from './comps/Loading';

export default class App extends React.Component<{}, {}> {
   public render() {
      return (
         <div id='App'>
            <Suspense fallback={<Loading />}>
               <Switch>
                  <Route exact
                     path='/'
                     component={lazy(() => import('./pages/Home'))}
                  />
                  <Route exact
                     path='/Description'
                     component={lazy(() => import('./pages/Description'))}
                  />
               </Switch>

            </Suspense>
         </div>
      );
   }
}
