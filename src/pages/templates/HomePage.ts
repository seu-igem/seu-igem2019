import { Page } from '@/page';
import { LoadingState } from '@/types';
import App from '@/App';
import { HomePageBH } from './HomePageComps/HomePageBH';
import { HomePageBody } from './HomePageComps/HomePageBody';
import { loadImg } from '@/util';
import { assets } from '@/assets-path.json';

enum HomePageAnimationState {
   Initial,
   Entering,
   Entered,
   Exiting,
}

export class HomePage implements Page {
   public App?: App;
   private resrcList: Array<Promise<any>> = [];
   private resrcState = LoadingState.NotLoading;
   private animationState = HomePageAnimationState.Initial;

   public init(options: { App: App }) {
      this.App = options.App;
      /*
       * Start loading resources.
       */
      this.resrcList.push(loadImg(assets.pages.Home.homeBg$jpg));
      this.resrcList.push(loadImg(assets.pages.Home.bg$jpg));
      this.resrcList.push(loadImg(assets.logos.teamLogo$svg));
      this.resrcList.push(loadImg(assets.pages.Home.bg2$jpg));
      this.resrcList.push(loadImg(assets.pages.Home.bg3$jpg));
      this.resrcList.push(loadImg(assets.pages.Home.fish$jpg));
      Promise.all(this.resrcList).then(() => {
         this.resrcState = LoadingState.Loaded;
         this.tryEnter();
      });
      this.enter();
   }

   public enter() {
      if (this.App!.currPage !== this) return;
      if (this.animationState !== HomePageAnimationState.Initial) return;
      this.animationState = HomePageAnimationState.Entering;

      this.App!.setState({
         BeforeHeader: HomePageBH,
         BeforeHeaderProps: {},
         Body: HomePageBody,
         BodyProps: {},
         showLoading: false,
         showFooter: false,
      }, () => {
         this.tryEnter();
      });
   }

   public tryEnter() {
      if (this.App!.currPage !== this) return;
      if (this.animationState !== HomePageAnimationState.Entering) return;
      if (this.resrcState !== LoadingState.Loaded) return;
      this.animationState = HomePageAnimationState.Entered;
      this.App!.$body.enter().then(() => {
         if (this.App!.currPage !== this) return;
         this.App!.setState({
            showFooter: true,
         });
      });
   }

   public exit() {
      if (this.App!.currPage !== this) return;
      if (this.App!.nextPage === null) return;
      this.animationState = HomePageAnimationState.Initial;
      this.App!.$body.exit().then(() => {
         this.App!.setState({
            BeforeHeader: false,
            BeforeHeaderProps: {},
            Body: false,
            BodyProps: {},
            showLoading: true,
            showFooter: false,
         }, () => {
            this.App!.currPage = this.App!.nextPage!;
            this.App!.nextPage = null;
            this.App!.currPage.enter();
         });
      });
   }
}
