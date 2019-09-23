import App from './App';
import * as pages from './pages';

export function queryPage(path: string): Page {
   const page404 = pages.Page404;
   const routes: { [_: string]: Page | null | undefined } = {
      '/': null,
      '/Description': pages.Description,
   };
   return routes[path] || page404;
}

export interface Page {
   App?: App;
   init(options: { App: App }): void;
   enter(): void;
   exit(): void;
}

