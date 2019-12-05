import React from 'react';
import './css/_DocPageCover.scss';
import { context } from '@/context';
import { normalizeClassNames } from '@/util';

interface IDocPageCoverProps {
   imgUrl: string;
   tbimgUrl: string;
   title: string;
}
interface IDocPageCoverState {
   stage: 0 | 1 | 2;
}

export default class DocPageCover extends React.Component<IDocPageCoverProps, IDocPageCoverState> {
   private isImgLoaded = false;
   private isTbImgLoaded = false;
   private $cover: HTMLDivElement;
   private $coverTxtContainer: HTMLDivElement;
   private $coverBg: HTMLElement;
   private $img: HTMLImageElement;
   private $tbImg: HTMLImageElement;

   public state: IDocPageCoverState = {
      stage: 0,
   };

   public render() {
      const { stage } = this.state;
      const cns = normalizeClassNames({
         cover: 'cover',
         coverBg: 'cover-bg',
         tbImg: ['cover-tb-img', (stage > 0) && 'show'],
         img: ['cover-img', (stage > 1) && 'show'],
         mask: 'mask',
         coverTxtContainer: 'cover-txt-container',
         coverTxt: 'cover-txt',
      });
      return (
         <div className={cns.cover} ref={e => this.$cover = e!}>
            <figure
               className={cns.coverBg}
               ref={e => this.$coverBg = e!}
            >
               <img
                  className={cns.tbImg}
                  ref={e => this.$tbImg = e!}
                  src={this.props.tbimgUrl}
                  alt='The cover of this page.'
               />
               <img
                  className={cns.img}
                  ref={e => this.$img = e!}
                  src={this.props.imgUrl}
                  alt='The cover of this page.'
               />
               <div className={cns.mask}></div>
            </figure>
            <div className={cns.coverTxtContainer}
               ref={e => this.$coverTxtContainer = e!}
            >
               <div className={cns.coverTxt}>
                  <div className='mask'></div>
                  <span className='txt'>{this.props.title}</span>
               </div>
            </div>
         </div>
      );
   }

   private resizeCoverImg = () => {
      if (!this.isImgLoaded && !this.isTbImgLoaded) return;
      const containerWidth = this.$coverBg.clientWidth;
      const containerHeight = this.$coverBg.clientHeight;

      if (this.isImgLoaded) _(this.$img);
      if (this.isTbImgLoaded) _(this.$tbImg);

      function _(img: HTMLImageElement) {
         const imgWidth = img.naturalWidth;
         const imgHeight = img.naturalHeight;
         if ((imgWidth / imgHeight) > (containerWidth / containerHeight)) {
            const scaledWidth = imgWidth / imgHeight * containerHeight;
            img.style.height = '100%';
            img.style.width = scaledWidth + 'px';
            img.style.top = '0';
            img.style.left = (containerWidth - scaledWidth) / 2 + 'px';
         } else {
            const scaledHeight = imgHeight / imgWidth * containerWidth;
            img.style.width = '100%';
            img.style.height = scaledHeight + 'px';
            img.style.top = (containerHeight - scaledHeight) / 2 + 'px';
            img.style.left = '0';
         }
      }
   }

   private onImgLoad = () => {
      this.isImgLoaded = true;
      this.resizeCoverImg();
      this.setState({
         stage: this.isTbImgLoaded ? 2 : 0,
      });
   }
   private onTbImgLoad = () => {
      this.isTbImgLoaded = true;
      this.resizeCoverImg();
      this.setState({
         stage: this.isImgLoaded ? 2 : 1,
      });
   }

   private parallaxScrolling = () => {
      const { top, bottom } = this.$cover!.getBoundingClientRect();
      if (bottom <= 18) return;
      const newTop = 18 - top;
      this.$coverBg!.style.transform = 'translateY(' + newTop / 2 + 'px)';
      this.$coverTxtContainer!.style.transform = 'translateY(' + newTop / 3 + 'px)';
   }

   public componentDidMount() {
      window.addEventListener('resize', this.resizeCoverImg);
      context.on('scroll', this.parallaxScrolling);

      this.$img.addEventListener('load', this.onImgLoad);
      if (this.$img.complete) this.onImgLoad();

      this.$tbImg.addEventListener('load', this.onTbImgLoad);
      if (this.$tbImg.complete) this.onTbImgLoad();
   }

   public componentWillUnmount() {
      window.removeEventListener('resize', this.resizeCoverImg);
      context.removeListener('scroll', this.parallaxScrolling);
   }

   public UNSAFE_componentWillUpdate(nextProps: Readonly<IDocPageCoverProps>) {
      if (nextProps.imgUrl !== this.props.imgUrl) {
         this.isImgLoaded = false;
      }
      if (nextProps.tbimgUrl !== this.props.tbimgUrl) {
         this.isTbImgLoaded = false;
      }
      const newStage = this.isTbImgLoaded
         ? (this.isImgLoaded ? 2 : 1)
         : 0;
      if (this.state.stage !== newStage) {
         this.setState({
            stage: newStage,
         });
      }
   }
}
