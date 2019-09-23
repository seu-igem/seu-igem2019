import React from 'react';
import './css/Cover.css';
import $ from 'jquery';
import { context } from '../../context';

export default class Cover extends React.Component<{
   imgUrl: string;
   tbimgUrl: string;
   title: string;
}> {
   public render() {
      return (
         <div id='cover' data-focus='1' ref={el => this.$Cover = el}>
            <figure
               id='cover-bg'
               ref={el => this.$CoverBg = el}
            >
               <img
                  ref={el => this.$TbImg = el}
                  src={this.props.tbimgUrl}
                  alt=''
               />
               <img
                  ref={el => this.$Img = el}
                  src={this.props.imgUrl}
                  alt=''
               />
               <div></div>
            </figure>
            <div id='cover-txt-container' ref={el => this.$CoverTxtContainer = el}>
               <div id='cover-txt'>
                  <div></div>
                  <span>{this.props.title}</span>
               </div>
            </div>
         </div>
      );
   }
   private $Cover?: HTMLDivElement | null;
   private $CoverTxtContainer?: HTMLDivElement | null;
   private $CoverBg?: HTMLElement | null;
   private $Img?: HTMLImageElement | null;
   private $TbImg?: HTMLImageElement | null;

   private resizeCoverImg = () => {
      if (!this.isImgLoaded && !this.isTbImgLoaded) return;
      const container = $(this.$CoverBg!);
      const containerWidth = container.width()!;
      const containerHeight = container.height()!;

      if (this.isImgLoaded) _(this.$Img!);
      if (this.isTbImgLoaded) _(this.$TbImg!);

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
      this.$Img!.style.opacity = '1';
      this.$Img!.style.transform = 'translateZ(0px)';
      this.$Img!.style.filter = 'blur(0)';
   }
   private onTbImgLoad = () => {
      this.isTbImgLoaded = true;
      this.resizeCoverImg();
      this.$TbImg!.style.opacity = '1';
   }

   private bgParallaxScrolling = () => {
      const { top, bottom } = this.$Cover!.getBoundingClientRect();
      if (bottom <= 18) return;
      const newTop = 18 - top;
      this.$CoverBg!.style.top = newTop / 2 + 'px';
      this.$CoverTxtContainer!.style.top = newTop / 3 + 'px';
   }
   public componentDidMount() {
      window.addEventListener('resize', this.resizeCoverImg);
      context.on('scroll', this.bgParallaxScrolling);

      this.$Img!.addEventListener('load', this.onImgLoad);
      if (this.$Img!.complete) this.onImgLoad();

      this.$TbImg!.addEventListener('load', this.onTbImgLoad);
      if (this.$TbImg!.complete) this.onTbImgLoad();
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
         this.$Img!.style.opacity = '0';
         this.$Img!.style.transform = 'translateZ(40px)';
         this.$Img!.style.filter = 'blur(18px)';
      }
      if (this.props.tbimgUrl !== nextProps.tbimgUrl) {
         this.isTbImgLoaded = false;
         this.$TbImg!.style.opacity = '0';
      }

      return this.props.imgUrl !== nextProps.imgUrl || this.props.tbimgUrl !== nextProps.tbimgUrl;
   }
}
