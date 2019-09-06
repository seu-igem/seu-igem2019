import React from 'react';
import DocPageRating from './comps/DocPageRating';
import DocPageInfobar from './comps/DocPageInfobar';
import { Callout } from 'office-ui-fabric-react/lib/Callout';

import './css/DocPage.scss';
import './css/DocPage-light.css';
import './css/DocPage-dark.css';

import { pageCtrl, pageBehavior } from '../page';
import { IEditor } from '../types';
import DocPageAside from './comps/DocPageAside';
import DocPageSetting from './comps/DocPageSetting';

interface IDocPageProps {
   hasAside: boolean;
   hasInfobar: boolean;
   hasRating?: boolean;
   translatable?: boolean;
   pageLocation: Array<{ text: string; path: string; }>;
   editors: IEditor[];
   lastModified: string;
   content: any;
}

interface IDocPageState {
   darkMode: boolean;
   showSettingCallout: boolean;
   enableTranslate: boolean;
   lang: string;
}

export default class DocPage extends React.Component<IDocPageProps, IDocPageState> {
   private $Doc1: HTMLDivElement;
   private $Doc2Inner: HTMLDivElement;
   private $Doc3: HTMLElement;
   private $Doc1Bg: HTMLDivElement;
   private $Doc2Bg: HTMLDivElement;
   private $Doc3Bg: HTMLDivElement;
   private $DocAside: HTMLElement;
   private $DocAsideContainer: HTMLDivElement;
   private $DocInfobar: HTMLDivElement;
   private $SettingBtn?: HTMLDivElement | null;

   public state = {
      darkMode: pageCtrl.settings.darkMode,
      showSettingCallout: false,
      enableTranslate: false,
      lang: (navigator.language
         || (navigator as any).userLanguage
         || 'zh-cn').toLowerCase(),
   };
   private isDoc3BgFixed = false;
   private isHeaderFixed = false;

   // 滚动吸顶若使用 React 原生 state + render，卡顿感明显
   // 必须避免 React diff 造成属性覆盖
   private onHeaderFixed = (fixed: boolean) => {
      this.isHeaderFixed = fixed;
      const { $Doc1, $Doc1Bg, $Doc2Bg, $DocInfobar, $DocAsideContainer } = this;
      if (fixed) {
         $Doc1.style.zIndex = '10';
         $Doc1Bg.classList.add('fixed-at-doc-top');
         $Doc2Bg.classList.add('fixed-at-doc-top');
         $DocInfobar.classList.add('fixed-at-doc-top');
         $DocAsideContainer.classList.add('fixed-at-doc-top');
      } else {
         $Doc1.style.zIndex = '60';
         $Doc1Bg.classList.remove('fixed-at-doc-top');
         $Doc2Bg.classList.remove('fixed-at-doc-top');
         $DocInfobar.classList.remove('fixed-at-doc-top');
         $DocAsideContainer.classList.remove('fixed-at-doc-top');
      }
   }

   private onDarkMode = (darkMode: boolean) => this.setState({
      darkMode,
   })
   private onLang = ({ enableTranslate, lang }: {
      enableTranslate: boolean,
      lang: string,
   }) => this.setState({
      enableTranslate,
      lang,
   })
   private switchCallout = () => this.setState({
      showSettingCallout: !this.state.showSettingCallout,
   })

   private onScroll = () => {
      if (!this.isHeaderFixed) return;
      if (this.$Doc3.getBoundingClientRect().top <= 98) {
         if (!this.isDoc3BgFixed) {
            this.$Doc3Bg.classList.add('fixed-at-doc-top');
            this.isDoc3BgFixed = true;
         }
      } else if (this.isDoc3BgFixed) {
         this.$Doc3Bg.classList.remove('fixed-at-doc-top');
         this.isDoc3BgFixed = false;
      }
   }
   private focusAnimation = () => {
      this.$Doc1.style.opacity = '1';
      this.$Doc2Inner.style.left = '0';
      this.$DocAside.style.opacity = '1';
      this.$DocAside.style.top = '5em';
   }

   public componentDidMount() {
      pageBehavior.once('scroll', this.focusAnimation);
      setTimeout(this.focusAnimation, 6000);

      pageBehavior.on('headerFixed', this.onHeaderFixed);
      pageBehavior.on('scroll', this.onScroll);
      pageBehavior.on('darkMode', this.onDarkMode);
      pageBehavior.on('lang', this.onLang);
   }
   public componentWillUnmount() {
      pageBehavior.removeListener('headerFixed', this.onHeaderFixed);
      pageBehavior.removeListener('darkMode', this.onDarkMode);
      pageBehavior.removeListener('lang', this.onLang);
      pageBehavior.removeListener('scroll', this.onScroll);
   }
   public render() {
      return (
         <div id='doc-1'
            className={
               'doc-1' +
               (this.state.darkMode
                  ? ' darkTheme-doc'
                  : ' lightTheme-doc') +
               (this.props.hasAside
                  ? ' doc-1-has-aside'
                  : ' doc-1-no-aside')
            }
            ref={el => this.$Doc1 = el!}
         >
            <div id='doc-1-bg' className='doc-bg' ref={el => this.$Doc1Bg = el!}></div>

            {
               this.props.hasAside &&
               <div id='doc-aside-container' ref={el => this.$DocAsideContainer = el!}>
                  <aside id='doc-aside' ref={el => this.$DocAside = el!}>
                     <div id='doc-aside-leftspace'></div>
                     <div id='doc-aside-inner'>
                        <div id='doc-aside-setting-container'>
                           <DocPageAside
                              darkMode={this.state.darkMode}
                              enableTranslate={this.state.enableTranslate}
                              lang={this.state.lang}
                           />
                        </div>
                     </div>
                     <div id='doc-aside-rightspace'></div>
                  </aside>
               </div>
            }

            <div id='doc-2' className='doc-2'>
               <div id='doc-2-inner' ref={el => this.$Doc2Inner = el!}>
                  <div id='doc-2-bg' className='doc-bg' ref={el => this.$Doc2Bg = el!}></div>
                  {
                     this.props.hasInfobar &&
                     <div id='doc-infobar-container'>
                        <div id='doc-infobar' ref={el => this.$DocInfobar = el!}>
                           <DocPageInfobar
                              navs={this.props.pageLocation}
                              editors={this.props.editors}
                              timestamp={this.props.lastModified}
                              switchSettingCallout={this.switchCallout}
                              ref={el => this.$SettingBtn = el && el.$SettingBtn}
                           />
                           <Callout
                              gapSpace={0}
                              target={this.$SettingBtn}
                              onDismiss={() => { this.setState({ showSettingCallout: false }); }}
                              setInitialFocus={true}
                              hidden={!this.state.showSettingCallout}
                           >
                              <div className='doc-setting-callout-inner'>
                                 <DocPageSetting
                                    darkMode={this.state.darkMode}
                                    enableTranslate={this.state.enableTranslate}
                                    lang={this.state.lang}
                                 />
                              </div>
                           </Callout>

                        </div>
                     </div>
                  }
                  <article id='doc-3' className='doc-3' ref={el => this.$Doc3 = el!}>
                     <div id='doc-3-bg' className='doc-bg' ref={el => this.$Doc3Bg = el!}></div>
                     <div id='doc-body'>
                        {this.props.content}
                        {this.props.hasRating &&
                           <DocPageRating
                              pagePath='/Description'
                           />
                        }
                        <div style={{ height: '4em' }}></div>
                     </div>
                  </article>
               </div>
            </div>
         </div>
      );
   }
}
