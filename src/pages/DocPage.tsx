import React from 'react';
import DocPageRating from './comps/DocPageRating';
import DocPageInfobar from './comps/DocPageInfobar';

import './css/DocPage.css';
import './css/DocPage-light.css';
import './css/DocPage-dark.css';

import { pageCtrl, pageBehavior } from '../page';
import { IEditor } from '../types';
import DocPageAside from './comps/DocPageAside';

interface IDocPageProps {
   hasAside: boolean;
   hasInfobar: boolean;
   hasRating?: boolean;
   pageLocation: Array<{ text: string; path: string; }>;
   editors: IEditor[];
   lastModified: string;
   content: any;
}

interface IDocPageState {
   darkMode: boolean;
   showSettingCallout: boolean;
}

export default class DocPage extends React.Component<IDocPageProps, IDocPageState> {
   private $Doc1?: HTMLDivElement | null;
   private $Doc3?: HTMLElement | null;
   private $Doc3Bg?: HTMLDivElement | null;
   private $SettingBtn?: HTMLDivElement | null;

   public state = {
      darkMode: pageCtrl.settings.darkMode,
      showSettingCallout: false,
   };
   private isDoc3BgFixed = false;
   private isHeaderFixed = false;

   private onHeaderFixed = (fixed: boolean) => {
      this.isHeaderFixed = fixed;
      if (fixed) this.$Doc1!.classList.add('doc-1-headerfixed');
      else this.$Doc1!.classList.remove('doc-1-headerfixed');
   }
   private onDarkMode = (isDarkMode: boolean) => this.setState({
      darkMode: isDarkMode,
   })
   private switchCallout = () => this.setState({
      showSettingCallout: !this.state.showSettingCallout,
   })

   private onScroll = () => {
      if (!this.isHeaderFixed) return;
      if (this.$Doc3!.getBoundingClientRect().top <= 98) {
         if (!this.isDoc3BgFixed) {
            this.$Doc3Bg!.classList.add('doc-3-bg-fixed');
            this.isDoc3BgFixed = true;
         }
      } else if (this.isDoc3BgFixed) {
         this.$Doc3Bg!.classList.remove('doc-3-bg-fixed');
         this.isDoc3BgFixed = false;
      }
   }
   private focusAnimation = () => {
      this.$Doc1!.style.gridGap = '0';
      this.$Doc1!.style.opacity = '1';
   }

   public componentDidMount() {
      pageCtrl.pageBehavior.once('scroll', this.focusAnimation);
      setTimeout(this.focusAnimation, 6000);
      pageBehavior.on('headerFixed', this.onHeaderFixed);
      pageBehavior.on('scroll', this.onScroll);
      pageBehavior.on('darkMode', this.onDarkMode);
   }
   public componentWillUnmount() {
      pageBehavior.removeListener('headerFixed', this.onHeaderFixed);
      pageBehavior.removeListener('darkMode', this.onDarkMode);
      pageBehavior.removeListener('scroll', this.onScroll);
   }
   public render() {
      return (
         <div
            id='doc-1'
            className={
               'doc-1' +
               (this.state.darkMode
                  ? ' darkTheme-doc' :
                  ' lightTheme-doc') +
               (this.props.hasAside
                  ? ' doc-1-has-aside'
                  : ' doc-1-no-aside')
            }
            ref={el => this.$Doc1 = el}
         >
            <div id='doc-1-bg'></div>
            {
               this.props.hasAside &&
               <DocPageAside
                  darkMode={this.state.darkMode}
                  calloutTarget={this.$SettingBtn!}
                  showSettingCallout={this.state.showSettingCallout}
               />
            }
            <div id='doc-2'>
               <div id='doc-2-bg'></div>
               {
                  this.props.hasInfobar &&
                  <div id='doc-infobar-container'>
                     <div id='doc-infobar'>
                        <DocPageInfobar
                           navs={this.props.pageLocation}
                           editors={this.props.editors}
                           timestamp={this.props.lastModified}
                           switchSettingCallout={this.switchCallout}
                           ref={el => this.$SettingBtn = el && el.$SettingBtn}
                        />
                     </div>
                  </div>
               }
               <article id='doc-3' ref={el => this.$Doc3 = el}>
                  <div id='doc-3-bg' ref={el => this.$Doc3Bg = el}></div>
                  <div id='doc-body'>
                     {this.props.content}
                     {this.props.hasRating &&
                        <DocPageRating
                           pagePath='/Description'
                        />
                     }
                     <div style={{ height: '2em' }}></div>
                  </div>
               </article>
            </div>
         </div>
      );
   }
}
