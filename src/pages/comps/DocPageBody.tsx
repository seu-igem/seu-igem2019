import React from 'react';
import ReactDOM from 'react-dom';

import DocPageRating from './DocPageRating';
import DocPageInfobar from './DocPageInfobar';
import DocPageAside from './DocPageAside';
import DocPageSetting from './DocPageSetting';

import { Callout } from 'office-ui-fabric-react/lib/components/Callout';
import { Shimmer, ShimmerElementType } from 'office-ui-fabric-react/lib/Shimmer';

import './css/DocPageBody.scss';

import { IEditor } from '../../types';
import { context } from '../../context';
import { DocPageAnimationState } from '../DocPage';
import { getDefaultLang, translation } from '../../translation';
import { delay, range } from '../../util';
import { locaCtrl } from '../../loca-ctrl';
import Header from '../../comps/Header';

interface IDocPageProps {
   $Header: Header;
   $FixedBelowHeader: HTMLDivElement;
}

interface IDocPageContent {
   hasAside: boolean;
   hasInfobar: boolean;
   hasRating: boolean;
   translatable: boolean;

   pageLocation?: Array<{ text: string; path: string; }>;
   editors?: IEditor[];
   lastModified?: string;

   content: any;
}

interface IDocPageState extends IDocPageContent {
   darkMode: boolean;
   showSettingCallout: boolean;
   enableTranslate: boolean;
   lang: string;

   headings?: Array<{
      text: string;
      ref: any;
   }>;
}

export default class DocPageBody extends React.Component<IDocPageProps, IDocPageState> {
   private $DocPageBody: HTMLDivElement;
   private $Doc1Bg: HTMLDivElement;
   private $Doc3Bg: HTMLDivElement;
   private $SettingBtn?: HTMLDivElement | null;
   private $DocLoadedAni: HTMLDivElement;
   private $DocLoadedAniitem: HTMLDivElement;
   private $DocArticle: HTMLElement;

   public animationState = DocPageAnimationState.Initial;

   public state: IDocPageState = {
      hasAside: false,
      hasInfobar: false,
      hasRating: false,
      translatable: true,

      pageLocation: void 0,
      editors: void 0,
      lastModified: void 0,
      headings: void 0,

      content: '',

      darkMode: context.darkMode,
      showSettingCallout: false,
      enableTranslate: context.translation.enableTranslate,
      lang: context.translation.lang,
   };

   public setContent<K extends keyof IDocPageContent>(
      cont: (Pick<IDocPageContent, K> | IDocPageContent)
   ) {
      this.setState(cont, () => {
         this.resolveHeadings();
         this.handleHash(locaCtrl.hash);
         locaCtrl.on('hashDidUpdate', this.handleHash);
      });
   }

   private handleHash(hash: string) {
      if (hash.length <= 1 || hash.charAt(0) !== '#') return;
      const target = document.getElementById('anchor-' + hash.substring(1));
      if (!target) return;
      target.scrollIntoView({
         behavior: 'smooth',
         block: 'center',
      });
   }

   // Note: Do not diff
   public async enter() {
      if (this.animationState !== DocPageAnimationState.Initial) return;

      this.animationState = DocPageAnimationState.Entering;

      this.setState({
         hasAside: false,
         hasInfobar: false,
         hasRating: false,
      });

      this.$DocLoadedAniitem.style.transform = 'scale(1)';
      this.$DocLoadedAniitem.style.opacity = '1';
      await delay(800);

      this.$Doc1Bg.style.opacity = '1';
      this.$DocPageBody.style.opacity = '1';

      this.$DocLoadedAni.style.opacity = '0';
      this.setState({
         hasAside: true,
         hasInfobar: true,
         hasRating: false,
      });
      await delay(600);
      this.$DocLoadedAni.style.display = 'none';
      await delay(600);

      this.animationState = DocPageAnimationState.Entered;
   }

   public exit() {
      locaCtrl.removeListener('hashDidUpdate', this.handleHash);
   }

   public refresh() {
      context.translation = {
         enableTranslate: false,
         lang: getDefaultLang(),
      };
      context.emit('translation', context.translation);
      this.onTranslation(context.translation);
      this.setState({
         hasAside: true,
         hasInfobar: true,
         hasRating: false,
         translatable: true,
         content: '',
         pageLocation: void 0,
         editors: void 0,
         lastModified: void 0,
         headings: void 0,
      });
   }

   public resolveHeadings = () => {
      let headings: undefined | Array<{
         text: string;
         ref: any;
      }> = [];

      const h2s = document.querySelectorAll('.doc-page-h2>span');
      for (let i = 0; i < h2s.length; ++i) {
         const h2 = h2s[i];
         headings.push({
            text: (h2 as HTMLSpanElement).innerText,
            ref: h2,
         });
      }

      if (headings.length === 0) headings = void 0;

      this.setState({
         headings,
      });
   }
   private isHeaderFixed = false;
   private onHeaderFixed = (isFixed: boolean) => {
      this.isHeaderFixed = isFixed;
      if (!this.state.hasInfobar) {
         if (this.doc3bgAt === 'doc-article') {
            this.doc3bgAt = 'doc-3-bg';
            this.$DocArticle.classList.remove('show-doc-3-bg');
            this.$Doc3Bg.classList.add('show-doc-3-bg');
         }
      }
   }

   private doc3bgAt: 'doc-article' | 'doc-3-bg' = 'doc-article';
   private onScroll = () => {
      if (!this.isHeaderFixed) return;

      if (this.$DocArticle.getBoundingClientRect().top
         < this.props.$Header.$Header!.getBoundingClientRect().bottom) {
         if (this.doc3bgAt === 'doc-article') {
            this.doc3bgAt = 'doc-3-bg';
            this.$DocArticle.classList.remove('show-doc-3-bg');
            this.$Doc3Bg.classList.add('show-doc-3-bg');
         }
      } else if (this.doc3bgAt === 'doc-3-bg') {
         this.doc3bgAt = 'doc-article';
         this.$Doc3Bg.classList.remove('show-doc-3-bg');
         this.$DocArticle.classList.add('show-doc-3-bg');
      }
   }

   private onDarkMode = (darkMode: boolean) => this.setState({ darkMode });
   private onTranslation = ({ enableTranslate, lang }: {
      enableTranslate: boolean,
      lang: string,
   }) => {
      this.setState({
         enableTranslate,
         lang,
      }, () => {
         this.resolveHeadings();
      });
   }
   private switchCallout = () => this.setState({
      showSettingCallout: !this.state.showSettingCallout,
   })

   public componentDidMount() {
      this.refresh();

      translation.on('backToIdle', this.resolveHeadings);
      context.on('headerFixed', this.onHeaderFixed);
      context.on('scroll', this.onScroll);
      context.on('darkMode', this.onDarkMode);
      context.on('translation', this.onTranslation);
   }
   public componentWillUnmount() {
      translation.removeListener('backToIdle', this.resolveHeadings);
      context.removeListener('headerFixed', this.onHeaderFixed);
      context.removeListener('darkMode', this.onDarkMode);
      context.removeListener('translation', this.onTranslation);
      context.removeListener('scroll', this.onScroll);
   }
   public render() {
      const { $FixedBelowHeader } = this.props;
      const themeClassName = this.state.darkMode ? 'darktheme-doc' : 'lighttheme-doc';
      const hasAsideClassName = this.state.hasAside ? 'doc-has-aside' : 'doc-no-aside';
      const hasInfoBarClassName = this.state.hasInfobar ? 'doc-has-infobar' : 'doc-no-infobar';
      const shimmerColors = {
         background: this.state.darkMode ? '#3B3A39' : '#FFFFFF',
         shimmer: this.state.darkMode ? '#3B3A39' : '#FFFFFF',
      };

      const elementsInPortal = (<>
         <div id='doc-loaded-ani' ref={el => this.$DocLoadedAni = el!} className={themeClassName}>
            <div>
               <div id='doc-loaded-aniitem' ref={el => this.$DocLoadedAniitem = el!}></div>
            </div>
         </div>
         <div id='doc-1-bg' className={themeClassName} ref={el => this.$Doc1Bg = el!}>

            <aside id='doc-aside-container'>
               <div id='doc-aside-leftspace'></div>
               <div id='doc-aside'>
                  <DocPageAside
                     darkMode={this.state.darkMode}
                     translatable={this.state.translatable}
                     enableTranslate={this.state.enableTranslate}
                     lang={this.state.lang}
                     headings={this.state.headings}
                  />
               </div>
               <div id='doc-aside-rightspace'></div>
            </aside>

            <div id='doc-2-bg' className={hasAsideClassName}>
               <div id='doc-infobar'>
                  <DocPageInfobar
                     navs={
                        this.state.pageLocation
                        || [{ text: 'Home', path: '/' }, { text: '...', path: '/' }]}
                     editors={this.state.editors}
                     timestamp={this.state.lastModified}
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
                           translatable={this.state.translatable}
                           enableTranslate={this.state.enableTranslate}
                           lang={this.state.lang}
                        />
                     </div>
                  </Callout>
               </div>

               <div id='doc-3-bg' ref={el => this.$Doc3Bg = el!}></div>
            </div>
         </div>
      </>);


      return (
         <div id='doc-page-body' ref={el => this.$DocPageBody = el!}
            className={themeClassName + ' ' + hasAsideClassName + ' ' + hasInfoBarClassName}>
            {ReactDOM.createPortal(elementsInPortal, $FixedBelowHeader)}
            <article id='doc-article' ref={el => this.$DocArticle = el!} className='show-doc-3-bg'>
               {this.state.content === '' ?
                  <>
                     <Shimmer width='80%'
                        shimmerElements={[
                           { type: ShimmerElementType.line, height: 24 },
                        ]}
                        shimmerColors={shimmerColors}
                     />
                     {
                        range(1, 8).map(i =>
                           <Shimmer key={i} width='95%'
                              shimmerColors={shimmerColors}
                           />)
                     }
                  </> : this.state.content
               }
               {this.state.hasRating && this.state.pageLocation &&
                  <DocPageRating pagePath={
                     this.state.pageLocation[this.state.pageLocation.length - 1].path
                  } />
               }
               <div style={{ height: this.state.hasInfobar ? 'calc(107px + 1.071em)' : '0' }}></div>
            </article>

         </div>
      );
   }
}
