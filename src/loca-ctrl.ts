import { EventEmitter } from './util';
import { queryPage, Page } from './page';

const { location, history } = window;

class LocationController extends EventEmitter<{
   hrefDidUpdate: [],
   pathDidUpdate: [string],
   hashDidUpdate: [string],
}> {
   private static readonly prefix = '/Team:SEU-Nanjing-China';
   public static readonly inst = new LocationController();

   private href = '';
   private path = '';
   private hash = '';
   constructor() {
      super();
      if (LocationController.inst) return LocationController.inst;

      if (!location.pathname.startsWith(LocationController.prefix + '/')) {
         history.replaceState(
            null,
            '',
            LocationController.prefix + '/' + location.search + location.hash);
      }

      this.on('hrefDidUpdate', () => {
         let path = location.pathname.replace(LocationController.prefix, '');
         if (!path.startsWith('/')) path = '/' + path;

         if (path !== this.path) {
            this.path = path;
            this.emit('pathDidUpdate', this.path);
         }
         if (location.hash !== this.hash) {
            this.hash = location.hash;
            this.emit('hashDidUpdate', this.hash);
         }
      });

      window.addEventListener('popstate', () => {
         if (location.href === this.href) return;
         this.href = location.href;
         this.emit('hrefDidUpdate');
      });
   }

   public navTo(path: string | undefined, hash: string = '') {
      path = path || locaCtrl.path;
      history.pushState(
         null,
         '',
         LocationController.prefix + path + location.search + hash);
      if (location.href === this.href) return;
      this.href = location.href;
      this.emit('hrefDidUpdate');
   }
}

export const locaCtrl = LocationController.inst;
