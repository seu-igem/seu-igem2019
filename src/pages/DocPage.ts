import { Page } from '../page';
import { lazy } from '../util';
import { LoadingState } from '../types';
import App from '../App';

export enum DocPageAnimationState {
   Initial,
   Entering,
   Entered,
   Exiting,
}

export class DocPage implements Page {
   protected static readonly getComps = lazy(() => Promise.all([
      import(/* webpackPreload: true */ './comps/Cover'),
      import(/* webpackPreload: true */ './comps/DocPageBody'),
   ]));
   public App?: App;

   protected comps: any;
   protected resrc: any;
   protected compsState: LoadingState = LoadingState.NotLoading;
   protected resrcState: LoadingState = LoadingState.NotLoading;
   protected animationState: DocPageAnimationState = DocPageAnimationState.Initial;

   public constructor(
      protected beforeHeaderProps: {
         imgUrl: string;
         tbimgUrl: string;
         title: string;
      },
      protected getResrc: () => Promise<any>
   ) { }

   public init(options: { App: App }) {
      this.App = options.App;

      // Preload Cover Image
      const img = new Image();
      img.src = this.beforeHeaderProps.imgUrl;
      const tbimg = new Image();
      tbimg.src = this.beforeHeaderProps.tbimgUrl;

      if (this.compsState < LoadingState.Loading) {
         this.compsState = LoadingState.Loading;
      }
      if (this.resrcState < LoadingState.Loading) {
         this.resrcState = LoadingState.Loading;
      }
      const promiseLoadComps = DocPage.getComps();
      const promiseLoadResrc = this.getResrc();
      promiseLoadComps.then(comps => {
         this.compsState = LoadingState.Loaded;
         this.comps = comps;
         this.enter();
      });
      promiseLoadResrc.then(resrc => {
         this.resrcState = LoadingState.Loaded;
         this.resrc = resrc;
         this.renderResrc();
      });
   }

   public renderResrc() {
      if (this.App!.currPage !== this) return;
      if (this.App!.nextPage !== null) return;
      if (this.animationState !== DocPageAnimationState.Entered) return;
      if (this.resrcState !== LoadingState.Loaded) return;
      // 渲染上资源
      this.App!.setState({
         showFooter: true,
      });
      this.App!.$Body.setContent(this.resrc.body);
   }

   public enter() {
      if (this.App!.currPage !== this) return;
      if (this.animationState !== DocPageAnimationState.Initial) return;
      if (this.compsState !== LoadingState.Loaded) return;
      this.animationState = DocPageAnimationState.Entering;

      this.App!.setState({
         BeforeHeader: this.comps[0].default,
         BeforeHeaderProps: this.beforeHeaderProps,
         Body: this.comps[1].default,
         BodyProps: {},
         showLoading: false,
         showFooter: false,
      }, async () => {
         this.App!.$Body.refresh();
         await this.App!.$Body.enter();

         this.animationState = DocPageAnimationState.Entered;
         if (this.App!.nextPage !== null) {
            this.exit();
         } else {
            this.renderResrc();
         }
      });
   }

   public exit() {
      if (this.App!.currPage !== this) return;
      if (this.App!.nextPage === null) return;

      if (this.animationState === DocPageAnimationState.Entered) {
         this.animationState = DocPageAnimationState.Exiting;

         if (this.App!.nextPage instanceof DocPage) {
            const nextPage = this.App!.nextPage;
            this.App!.setState({
               showLoading: false,
               showFooter: false,
            }, () => {
               this.App!.$Body.refresh();
               this.animationState = DocPageAnimationState.Initial;
               this.App!.currPage = nextPage;
               this.App!.nextPage = null;
               nextPage.animationState = DocPageAnimationState.Entered;
            });
         } else {
            this.App!.$Body.exit().then(() => {
               this.App!.setState({
                  BeforeHeader: false,
                  BeforeHeaderProps: {},
                  Body: false,
                  BodyProps: {},
                  showLoading: true,
                  showFooter: false,
               });
               this.animationState = DocPageAnimationState.Initial;
               this.App!.currPage = this.App!.nextPage!;
               this.App!.nextPage = null;
               this.App!.currPage.enter();
            });
         }
      } else if (this.animationState === DocPageAnimationState.Initial) {
         if (this.App!.nextPage instanceof DocPage) {
            const nextPage = this.App!.nextPage;
            this.App!.currPage = nextPage;
            this.App!.nextPage = null;
            nextPage.animationState = DocPageAnimationState.Initial;
            nextPage.enter();
         } else {
            this.App!.currPage = this.App!.nextPage!;
            this.App!.nextPage = null;
            this.App!.currPage.enter();
         }
      }
   }
}
