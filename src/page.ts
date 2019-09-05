import { EventEmitter, once } from './util';
import { locaCtrl } from './loca-ctrl';

class PageController {
   public static readonly inst = new PageController();

   public pageBehavior = new EventEmitter<{
      scroll: [],
      resize: [],
      headerFixed: [boolean],
      darkMode: [boolean],
      lang: [{
         enableTranslate: boolean,
         lang: string,
      }]
   }>();

   public settings = {
      darkMode: false,
   };
   public bootloader: any;
   public currPage: Page | null = null;

   constructor() {
      if (PageController.inst) return PageController.inst;

      locaCtrl.on('pathDidUpdate', this.navToPath);
   }

   public watchPageBehavior = once(() => {
      const { pageBehavior: pb } = this;
      document.getElementById('root')!.addEventListener('scroll', () => {
         pb.emit('scroll');
      });
      window.addEventListener('resize', () => {
         pb.emit('resize');
      });
   });

   public navToPath = (path: string) => {
      const newPage = queryPage(path);
      if (this.currPage === newPage) return;

      this.currPage = newPage;
      newPage.load();
      this.bootloader.emit('targetPageChanged');
   }
}

export const pageCtrl = PageController.inst;
export const { pageBehavior } = pageCtrl;

export function queryPage(path: string): Page {
   const page404 = null as any as Page;
   const routes: { [_: string]: Page | null | undefined } = {
      '/': null,
      '/Description': null,
   };
   return routes[path] || page404;
}

enum PageLoadingStage {
   notLoading,
   loading,
   codeLoaded,
}

export abstract class Page extends EventEmitter<{
   loadingStageChanged: [PageLoadingStage]
}> {
   protected loadingStage = PageLoadingStage.notLoading;
   public readonly pageCtrl = pageCtrl;
   public abstract load(): void;
}
