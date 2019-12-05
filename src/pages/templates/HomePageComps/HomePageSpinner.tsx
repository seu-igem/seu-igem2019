import React from 'react';
import anime from 'animejs';

interface IHomePageSpinnerState {

}

export class HomePageSpinner extends React.PureComponent<{}, IHomePageSpinnerState> {
   private $cir: SVGCircleElement;
   private aniRotate: anime.AnimeInstance;
   public startRotating() {
      const obj = {
         deg: 0,
      };
      const { $cir } = this;
      this.aniRotate = anime({
         targets: obj,
         deg: 360,
         loop: true,
         easing: 'cubicBezier(.53, .21, .29, .67)',
         duration: 1300,
         update() {
            $cir.setAttribute('transform', 'rotate(' + obj.deg + ' 50 50)');
         },
      });
   }
   public stopRotating() {
      this.aniRotate.pause();
   }

   public startLengthening() {
      const obj = {
         offset: 230,
      };
      const { $cir } = this;
      anime({
         targets: obj,
         offset: 0,
         easing: 'linear',
         duration: 800,
         update() {
            $cir.setAttribute('stroke-dashoffset', obj.offset as any);
         },
      });

   }
   public componentDidMount() {
      this.startRotating();
   }
   public render() {
      return (
         <svg className='logoarea-spinner'
            xmlns='http://www.w3.org/2000/svg' version='1.1'
            viewBox='0 0 100 100'
         >
            <circle ref={e => this.$cir = e!}
               cx='50' cy='50' r='49' stroke='rgba(240,250,255,.7)' strokeLinecap='round'
               strokeDasharray='307.8761'
               strokeDashoffset='230' fill='none' strokeWidth='2'
            >
            </circle>
         </svg>

      );
   }
}
