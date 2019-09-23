import React from 'react';
import DocPageSetting from './DocPageSetting';

import './css/DocPageAside.scss';
import { Shimmer } from 'office-ui-fabric-react/lib/Shimmer';
import { range } from '../../util';
import { context } from '../../context';

interface IDocPageAsideProps {
   darkMode: boolean;
   translatable: boolean;
   enableTranslate: boolean;
   lang: string;
   headings?: Array<{
      text: string;
      ref: any;
   }>;
}

export default class DocPageAside extends React.Component<IDocPageAsideProps> {
   private $Indicator: HTMLDivElement | null;
   private $IndicatorSlider: HTMLDivElement | null;
   private onScroll = (() => {
      let canRun = true;
      const fn = () => {
         if (!canRun) return;
         canRun = false;
         setTimeout(() => {
            canRun = true;
            fn();
         }, 50);
         const { headings } = this.props;
         if (!headings) return;
         const { nth, progress } = this.getPosition();
         this.$Indicator!.style.top = (nth * 4.33 + 0.5) + 'em';
         this.$IndicatorSlider!.style.top = progress * 0.5 + 'em';
      };
      return fn;
   })();

   public getPosition() {
      const headings = this.props.headings!;
      const halfViewportHeight = document.documentElement.clientHeight / 2;
      let nth = 0;
      let progress = 0;
      while (nth < headings.length) {
         if (nth + 1 === headings.length) break;
         if (headings[nth + 1].ref.getBoundingClientRect().top >= halfViewportHeight) break;
         nth++;
      }
      if (nth + 1 !== headings.length) {
         const absProgress =
            halfViewportHeight - headings[nth].ref.getBoundingClientRect().top;
         const absLength =
            headings[nth + 1].ref.getBoundingClientRect().top
            - headings[nth].ref.getBoundingClientRect().top;
         progress = 2 * absProgress / absLength - 1;
      }
      return {
         nth,
         progress,
      };
   }

   public componentDidMount() {
      context.on('scroll', this.onScroll);
      this.onScroll();
   }
   public componentDidUpdate() {
      this.onScroll();
   }
   public componentWillUnmount() {
      context.removeListener('scroll', this.onScroll);
   }

   private resolveText(text: string) {
      if (/^[0-9]+\. /.test(text)) {
         return {
            label: text.split('.')[0],
            text: text.replace(/^[0-9]+\. /, ''),
         };
      }
      if (/^[A-Z]+\. /.test(text)) {
         return {
            label: text.split('.')[0],
            text: text.replace(/^[IVX]+\. /, ''),
         };
      }
      return {
         label: text.charAt(0),
         text: text.substring(1),
      };
   }
   public onClickNav(i: number) {
      const { headings } = this.props;
      if (!headings) return;
      if (i >= headings.length) return;
      headings[i].ref.scrollIntoView({
         behavior: 'smooth',
         block: 'center',
      });
   }

   public render() {
      const shimmerColors = {
         background: this.props.darkMode ? '#201F1E' : '#EDEBE9',
         shimmer: this.props.darkMode ? '#201F1E' : '#EDEBE9',
         shimmerWave: this.props.darkMode ? '#605e5c' : '#FAF9F8',
      };

      return (<>
         <div id='doc-aside-setting'>
            <DocPageSetting
               darkMode={this.props.darkMode}
               translatable={this.props.translatable}
               enableTranslate={this.props.enableTranslate}
               lang={this.props.lang}
            />
         </div>
         <div id='doc-nav'>
            {!this.props.headings &&
               range(1, 8).map(i =>
                  <Shimmer key={i}
                     shimmerColors={shimmerColors}
                  />)
            }
            {this.props.headings && <>
               <div className='doc-nav-indicator' ref={el => this.$Indicator = el}>
                  <div ref={el => this.$IndicatorSlider = el}></div>
               </div>
               {this.props.headings.map((h, i) => {
                  const res = this.resolveText(h.text);
                  return (<div className='doc-nav-item'
                     onMouseDown={() => this.onClickNav(i)}
                     onTouchStart={() => this.onClickNav(i)} key={i}>
                     <div>{res.label}</div>
                     <div>{res.text}</div>
                  </div>);
               })}
            </>}
         </div>
      </>);
   }
}
