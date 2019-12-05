import React from 'react';
import './css/DocPageCover.scss';
import $ from 'jquery';
import { context } from '@/context';

export default class DocPageCover extends React.Component<{
   imgUrl: string;
   tbimgUrl: string;
   title: string;
}> {
   public render() {
      return (
         <div id='cover' data-focus='1' ref={el => this.$cover = el}>
            <figure
               id='cover-bg'
               ref={el => this.$coverBg = el}
            >
               <img
                  ref={el => this.$tbImg = el}
                  src={this.props.tbimgUrl}
                  alt=''
               />
               <img
                  ref={el => this.$img = el}
                  src={this.props.imgUrl}
                  alt=''
               />
               <div></div>
            </figure>
            <div id='cover-txt-container' ref={el => this.$coverTxtContainer = el}>
               <div id='cover-txt'>
                  <div></div>
                  <span>{this.props.title}</span>
               </div>
            </div>
         </div>
      );
   }
   private $cover?: HTMLDivElement | null;
   private $coverTxtContainer?: HTMLDivElement | null;
   private $coverBg?: HTMLElement | null;
   private $img?: HTMLImageElement | null;
   private $tbImg?: HTMLImageElement | null;

   private resizeCoverImg = () => {
      if (!this.isImgLoaded && !this.isTbImgLoaded) return;
      const container = $(this.$coverBg!);
      const containerWidth = container.width()!;
      const containerHeight = container.height()!;

      if (this.isImgLoaded) _(this.$img!);
      if (this.isTbImgLoaded) _(this.$tbImg!);

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
   private isImgLoaded = false;
   private isTbImgLoaded = false;
   private onImgLoad = () => {
      this.isImgLoaded = true;
      this.resizeCoverImg();
      setTimeout(() => {
         this.$img!.style.opacity = '1';
         this.$img!.style.transform = 'translateZ(0px)';
         this.$img!.style.filter = 'blur(0)';
      }, 500);
   }
   private onTbImgLoad = () => {
      this.isTbImgLoaded = true;
      this.resizeCoverImg();
      this.$tbImg!.style.opacity = '1';
   }

   private bgParallaxScrolling = () => {
      const { top, bottom } = this.$cover!.getBoundingClientRect();
      if (bottom <= 18) return;
      const newTop = 18 - top;
      this.$coverBg!.style.top = newTop / 2 + 'px';
      this.$coverTxtContainer!.style.top = newTop / 3 + 'px';
   }
   public componentDidMount() {
      window.addEventListener('resize', this.resizeCoverImg);
      context.on('scroll', this.bgParallaxScrolling);

      this.$img!.addEventListener('load', this.onImgLoad);
      if (this.$img!.complete) this.onImgLoad();

      this.$tbImg!.addEventListener('load', this.onTbImgLoad);
      if (this.$tbImg!.complete) this.onTbImgLoad();
   }

   public componentWillUnmount() {
      window.removeEventListener('resize', this.resizeCoverImg);
      context.removeListener('scroll', this.bgParallaxScrolling);
   }

   public shouldComponentUpdate(nextProps: Readonly<{
      imgUrl: string;
      tbimgUrl: string;
      title: string;
   }>) {
      if (this.props.imgUrl !== nextProps.imgUrl) {
         this.isImgLoaded = false;
         this.$img!.style.transitionDuration = '0s, 0s';
         setTimeout(() => {
            this.$img!.style.opacity = '0.01';
            this.$img!.style.transform = 'translateZ(120px)';
            this.$img!.style.filter = 'blur(18px)';
         }, 50);
         setTimeout(() => {
            this.$img!.style.transitionDuration = '2s, 0.8s';
         }, 100);
      }
      if (this.props.tbimgUrl !== nextProps.tbimgUrl) {
         this.isTbImgLoaded = false;
         this.$tbImg!.style.opacity = '0';
      }

      return this.props.imgUrl !== nextProps.imgUrl ||
         this.props.tbimgUrl !== nextProps.tbimgUrl ||
         this.props.title !== nextProps.title;
   }
}
