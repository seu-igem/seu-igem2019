import React from 'react';

import { locaCtrl } from './loca-ctrl';
import { queryPage, Page } from './page';
import { context } from './context';
import { initTheme } from './theme';

import './css/reset.css';
import './css/fonts.scss';
import './css/root.scss';

import Header from './comps/Header';
import Loading from './comps/Loading';
import Footer from './comps/Footer';

import { InitialPage } from './pages/Initial';


interface IAppState {
   BeforeHeader: React.ComponentType<any> | false;
   BeforeHeaderProps: any;
   Body: React.ComponentType<any> | false;
   BodyProps: any;
   showLoading: boolean;
   showFooter: boolean;
}

export default class App extends React.Component<{}, IAppState> {
   public $BeforeHeader: any;
   public $Header: Header;
   public $Body: any;
   public $Footer: Footer;
   public $FixedBelowHeader: HTMLDivElement;

   public state: IAppState = {
      BeforeHeader: false,
      BeforeHeaderProps: {},
      Body: false,
      BodyProps: {},
      showLoading: true,
      showFooter: false,
   };
   public currPage: Page = InitialPage;
   public nextPage: Page | null = null;

   public componentDidMount() {

      if (navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {
         window.addEventListener && window.addEventListener('mousewheel', e => {
            e.preventDefault();
            const wd = (e as any).wheelDelta;
            const csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
         });
      }
      initTheme();

      context.on('headerFixed', isFixed => {
         if (isFixed) {
            this.$FixedBelowHeader.classList.add('on-header-fixed');
         } else {
            this.$FixedBelowHeader.classList.remove('on-header-fixed');
         }
      });

      this.currPage.init({ App: this });

      this.watchPageBehavior();

      locaCtrl.on('pathDidUpdate', this.navToPath);
   }

   public watchPageBehavior() {
      window.addEventListener('scroll', () => {
         context.emit('scroll');
      });
   }

   public navToPath = (path: string) => {
      const newPage = queryPage(path);
      if (newPage === this.nextPage) return;
      else if (this.nextPage === null && this.currPage === newPage) return;
      else {
         this.nextPage = newPage;
         this.nextPage.init({ App: this });
         this.currPage.exit();
      }
   }

   public render() {
      const { BeforeHeader, BeforeHeaderProps, Body, BodyProps } = this.state;

      return (
         <div id='App'>
            <div id='App-before-header'>
               {BeforeHeader
                  ? <BeforeHeader ref={(el: any) => this.$BeforeHeader = el} {...BeforeHeaderProps} />
                  : this.state.showLoading && <div id='bh-loading-placeholder'></div>
               }
            </div>

            <Header ref={el => this.$Header = el!} />

            <div id='App-body'>
               <Loading showLoading={this.state.showLoading} />
               <div id='fixed-below-header' ref={el => this.$FixedBelowHeader = el!}></div>
               {Body &&
                  <Body
                     ref={(el: any) => this.$Body = el}
                     $Header={this.$Header}
                     $FixedBelowHeader={this.$FixedBelowHeader}
                     {...BodyProps}
                  />}
            </div>
            <Footer ref={el => this.$Footer = el!} showFooter={this.state.showFooter} />
         </div>
      );
   }
}
