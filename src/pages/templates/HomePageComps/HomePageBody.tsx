import React from 'react';

import { normalizeClassNames, delay } from '@/util';
import { augmentCanvas } from './augment-canvas';
import { assets } from '@/assets-path.json';

import { Image as MsImage, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { HomePageSpinner } from './HomePageSpinner';

import './css/home.scss';
import './css/home-1.scss';
import './css/home-2.scss';
import './css/home-3.scss';

interface IHomePageState {
   homeHeight: number | null;
   shouldHomePageLeave: boolean;
   isHome1MaskNotDisplay: boolean;
   showLogo: boolean;
   isLogoareaBlue: boolean;
   isLogoareaTransparent: boolean;
   showLogoWave: boolean;
   shouldApproach: boolean;
   showHome1Bg: boolean;
   isHome1BgImgTooWide: boolean;
   showHome1Slogan: boolean;
   showHome23: boolean;
   home2Width: number | null;
   shouldShowSection2: boolean;
   isHome2BgSmooth: boolean;
   isSection4Text1Hide: boolean;
   hasFishSlideIn: boolean;
}

export class HomePageBody extends React.Component<{}, IHomePageState> {
   private $homeFixed: HTMLDivElement;
   private $home1Mask: HTMLCanvasElement;
   private $home1MaskCtx: CanvasRenderingContext2D;
   private $home1Logoarea: HTMLDivElement;
   private $logoareaSpinner: HomePageSpinner;
   private $home1BgImg: HTMLImageElement;
   private $home2: HTMLDivElement;
   private $home3: HTMLDivElement;
   private $home2Content: HTMLElement;
   private $logoareaContainer: HTMLDivElement;

   public state: IHomePageState = {
      homeHeight: null,
      shouldHomePageLeave: false,
      isHome1MaskNotDisplay: false,
      showLogo: false,
      isLogoareaBlue: false,
      isLogoareaTransparent: false,
      showLogoWave: false,
      shouldApproach: false,
      showHome1Bg: false,
      isHome1BgImgTooWide: false,
      showHome1Slogan: false,
      showHome23: false,
      isHome2BgSmooth: false,
      home2Width: null,
      shouldShowSection2: false,
      isSection4Text1Hide: false,
      hasFishSlideIn: false,
   };

   private resize = () => {
      const width = this.$homeFixed.clientWidth;
      const height = this.$homeFixed.clientHeight;
      const logoRadius = height * .3;
      this.repaintHome1Mask(width, height, logoRadius);
      this.relocateHome1LogoArea(width, height, logoRadius);

      if (this.$home1BgImg.complete) {
         const { naturalWidth, naturalHeight } = this.$home1BgImg;
         if ((naturalWidth / naturalHeight) < (width / height)) {
            this.setState({
               isHome1BgImgTooWide: false,
            });
         } else {
            this.setState({
               isHome1BgImgTooWide: true,
            });
         }
      }

      if (this.state.showHome23) {
         const home2Width = 4.2 * width;
         const homeHeight = 2 * height + home2Width - width + this.$home3.clientHeight;
         this.setState({
            home2Width,
            homeHeight,
         });
      }
      this.scroll();
   }
   private repaintHome1Mask(width: number, height: number, logoRadius: number) {
      if (this.state.isHome1MaskNotDisplay) return;
      const { $home1Mask, $home1MaskCtx } = this;
      $home1Mask.setAttribute('width', width + '');
      $home1Mask.setAttribute('height', height + '');
      const gradient = $home1MaskCtx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#000');
      gradient.addColorStop(0.8, '#000');
      gradient.addColorStop(1, '#2f004c');
      $home1MaskCtx.fillStyle = gradient;
      $home1MaskCtx.fillRect(0, 0, width, height);
      augmentCanvas.clearArc.call(
         $home1MaskCtx,
         width / 2, height / 2,
         logoRadius - 2, 0, Math.PI * 2, false
      );
   }
   private relocateHome1LogoArea(width: number, height: number, logoRadius: number) {
      const { $home1Logoarea } = this;
      $home1Logoarea.style.width = 2 * logoRadius + 'px';
      $home1Logoarea.style.height = 2 * logoRadius + 'px';
      $home1Logoarea.style.left = (width * 0.5 - logoRadius) + 'px';
      $home1Logoarea.style.top = (height * 0.5 - logoRadius) + 'px';
   }

   public componentDidMount() {
      window.addEventListener('resize', this.resize);
      window.addEventListener('scroll', this.scroll);

      this.$home1MaskCtx = this.$home1Mask.getContext('2d')!;
      this.resize();
      if (!this.$home1BgImg.complete) {
         this.$home1BgImg.addEventListener('load', this.resize);
      }
   }
   public componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
      window.removeEventListener('scroll', this.scroll);
   }

   public scroll = () => {
      const {
         $homeFixed,
         $home2,
         $logoareaContainer,
         $home2Content,
      } = this;

      const pageWidth = $homeFixed.clientWidth || 1;
      const pageHeight = $homeFixed.clientHeight || 1;
      const offset = document.documentElement.scrollTop || document.body.scrollTop;

      let x = offset / pageHeight;

      if (x >= 1 && x < 1.5) {
         $home2.style.top = '0';
         this.$home1BgImg.style.filter = 'blur(25px)';
         this.$home2.style.backgroundColor = 'rgba(0, 183, 195, 1)';
      } else if (x < .01) {
         $home2.style.top = '100%';
         this.$home1BgImg.style.filter = 'blur(0)';
         this.$home2.style.backgroundColor = 'rgba(0, 183, 195, .6)';
      } else if (x < 1) {
         $home2.style.top = (1 - x) * 100 + '%';
         this.$home1BgImg.style.filter = 'blur(' + 25 * (Math.pow(x - 1, 3) + 1) + 'px)';
         let home2Opacity = 2 * x - .8;
         home2Opacity = home2Opacity < 0 ? 0 : home2Opacity > 1 ? 1 : home2Opacity;
         home2Opacity = home2Opacity * .4 + .6;
         this.$home2.style.backgroundColor = 'rgba(0, 183, 195, ' + home2Opacity + ')';
      }

      if (x >= .5) this.setState({ isLogoareaTransparent: true });
      else this.setState({ isLogoareaTransparent: false });

      if (x >= 1.1) this.setState({ isHome2BgSmooth: true });
      else this.setState({ isHome2BgSmooth: false });

      x -= 1;
      const x2 = (offset - pageHeight) / pageWidth;

      if (x <= 0) {
         $logoareaContainer.style.transform = 'translateX(0)';
         $home2Content.style.left = '0';
      } else if (x2 <= 3.2) {
         $logoareaContainer.style.transform = 'translateX(-' + x * pageHeight + 'px)';
         $home2Content.style.left = '-' + x * pageHeight + 'px';
      } else {
         $home2Content.style.left = '-' + (3.2 * pageWidth) + 'px';
      }

      if (x2 <= 0) return;
      if (x2 > .05 && !this.state.shouldShowSection2) {
         this.setState({
            shouldShowSection2: true,
         });
      }
      if (x2 <= 0.6) {
         $home2.style.backgroundColor = 'rgb(0, 183, 195)';
      } else if (x2 <= 1.3) { // 0.6
         $home2.style.backgroundColor = '#faf9f8';
         this.setState({
            isSection4Text1Hide: false,
         });
      } else if (x2 <= 1.4) { // 1.4
         $home2.style.backgroundColor = '#faf9f8';
         this.setState({
            isSection4Text1Hide: true,
         });
      } else if (x2 <= 2.05) { // 1.45
         $home2.style.backgroundColor = '#000';
         this.setState({
            isSection4Text1Hide: true,
         });
      } else {
         this.setState({
            hasFishSlideIn: true,
         });
      }
      console.log(x2);
      // $s3Bg.style.transform = 'translateX(' + (x2 - 1.1) * 100 + '%)';
   }

   public async enter() {
      document.title = 'Home - SEU-Nanjing-China - iGEM 2019';
      this.$logoareaSpinner.startLengthening();
      await delay(800);
      this.$logoareaSpinner.stopRotating();
      this.setState({
         showLogo: true,
         isLogoareaBlue: true,
      });
      await delay(100);
      this.setState({
         shouldApproach: true,
         showHome1Bg: true,
      });
      await delay(1000);
      this.setState({
         showLogoWave: true,
         showHome1Slogan: true,
      });
      await delay(300);
      this.setState({
         isHome1MaskNotDisplay: true,
         showHome23: true,
      }, () => {
         this.resize();
      });
   }
   public async exit() {
      this.setState({
         shouldHomePageLeave: true,
      });
      await delay(300);
      window.scrollTo({
         top: 0,
      });
   }

   public render() {
      const {
         homeHeight,
         shouldHomePageLeave: leave,
         shouldApproach,
         isLogoareaBlue,
         isLogoareaTransparent,
      } = this.state;
      const cns = normalizeClassNames({
         home: [
            'home',
            leave && 'fade-out',
         ],
         homeLogoarea: [
            'home-logoarea',
            isLogoareaBlue && 'blue',
            isLogoareaTransparent && 'transparent',
            shouldApproach && 'approach',
         ],
      });

      return (
         <div id='home' className={cns.home}
            style={homeHeight ? { height: homeHeight + 'px' } : void 0}
         >
            <div className='home-fixed' ref={e => this.$homeFixed = e!}>
               <div className='home-logoarea-container' ref={e => this.$logoareaContainer = e!}>
                  <div id='home-logoarea' className={cns.homeLogoarea}
                     ref={e => this.$home1Logoarea = e!}>
                     {this.renderLogoarea()}
                  </div>
               </div>
               {this.renderHome1()}
               {this.renderHome2()}
            </div>
            {this.renderHome3()}
         </div>
      );
   }

   private renderHome1() {
      const {
         shouldApproach,
         isHome1MaskNotDisplay: home1MaskNotDisplay,
         showHome1Bg,
         isHome1BgImgTooWide: home1BgImgTooWide,
         showHome1Slogan,
      } = this.state;
      const cns = normalizeClassNames({
         home1: 'home-1',
         home1Mask: [
            'home-1-mask',
            shouldApproach && 'approach',
            home1MaskNotDisplay && 'not-display',
         ],
         home1Bg: [
            'home-1-bg',
            showHome1Bg && 'show',
            home1BgImgTooWide ? 'height' : 'width',
         ],
         home1Slogan: [
            'home-1-slogan',
            showHome1Slogan && 'show',
         ],
      });

      return (
         <div id='home-1' className={cns.home1}>
            <canvas className={cns.home1Mask} ref={e => this.$home1Mask = e!}></canvas>
            <div className={cns.home1Slogan}>
               <div>
                  <div>Earth Intelligence Against</div>
                  <div>Earth Cancer</div>
                  <div className='chevron-container'>
                     <div className='chevron'></div>
                     <div className='chevron'></div>
                  </div>
               </div>
            </div>
            <div className={cns.home1Bg}>
               <img className='img'
                  src={assets.pages.Home.homeBg$jpg}
                  ref={e => this.$home1BgImg = e!}
                  alt='The background of homepage.' />
               <div className='mask'></div>
            </div>
         </div>
      );
   }

   private renderLogoarea() {
      const cns = normalizeClassNames({
         logo: [
            'logoarea-logo',
            this.state.showLogo && 'enter',
         ],
         wave: [
            'logoarea-wave',
            'fill-wave',
            this.state.showLogoWave && 'show',
         ],
      });
      return (<>
         <HomePageSpinner ref={e => this.$logoareaSpinner = e!} />
         <img className={cns.logo} src={assets.logos.teamLogo$svg} alt='The logo of our team.' />
         <div className={cns.wave}>
            <div><div></div><div></div></div>
         </div>
      </>);
   }

   private renderHome2() {
      const {
         showHome23,
         home2Width,
         shouldShowSection2,
         isHome2BgSmooth,
         isSection4Text1Hide,
         hasFishSlideIn,
      } = this.state;

      const cns = normalizeClassNames({
         home2: [
            'home-2',
            showHome23 && 'show',
            isHome2BgSmooth && 'smooth-bg',
         ],
         s2Text: [
            's2-text',
            shouldShowSection2 && 'show',
         ],
         s4t1: [
            's4-t1',
            isSection4Text1Hide && 'hide',
         ],
         fish: [
            's7-bg',
            hasFishSlideIn && 'in',
         ],
      });

      return (
         <div id='home-2' className={cns.home2} ref={e => this.$home2 = e!}>
            <main className='home-2-content' ref={e => this.$home2Content = e!}
               style={home2Width ? { width: home2Width } : void 0}>
               {/* <div style={{ position: 'absolute', left: 100, top: 100, width: 200, height: 100, background: 'red' }}></div> */}

               <section className='home-2-sect' style={{ left: '0' }}>
               </section>


               <section className='home-2-sect' style={{ left: '50vw', width: '75vw' }}>
                  <div className='home-2-flex'>
                     <div className={cns.s2Text}>
                        <div className='s2-h1'>Algae Terminator</div>
                        <div className='s2-h2'>The Midas Touch for Cyanobacteria</div>
                     </div>
                  </div>
               </section>


               <section className='home-2-sect' style={{ left: '125vw' }}>
                  <div className='s3-bg'>
                     {/* <div ref={e => this.$s3Bg = e!}>
                        <MsImage src={assets.pages.Home.bg$jpg} imageFit={ImageFit.cover} width='100%' height='100%' />
                     </div> */}
                  </div>
               </section>


               <section className='home-2-sect' style={{ left: '175vw', userSelect: 'none' }}>
                  <div className={cns.s4t1}>
                     <div className='home-2-flex' style={{ color: '#323130' }}>
                        <div className='home-2-sect-inner'>
                           <div className='home-2-sect-header'>Why is it so urgent to deal with algae bloom?</div>
                           <div className='home-2-sect-subheader'>The cancer of earth brooks no delay.</div>
                           <div className='home-2-sect-body'>
                              <p>Cyanobacteria (blue-green algae) can reproduce infinitely as long as there is adequate nutrition, which leads to frequent harmful algae bloom all over the world. <span style={{ fontSize: '1.4em' }}>Just like cancer cells to earth</span>.</p>
                              <p>Under the background of global warming and ocean acidification, large scale of cyanobacteria bloom-forming is unavoidable, causing serious damage to water ecosystem and drinking water safety.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='s4-t2'>
                     <div className='home-2-flex' style={{ color: '#faf9f8' }}>
                        <div className='home-2-sect-inner'>
                           <div className='home-2-sect-header'>What is the highlight of our project?</div>
                           <div className='home-2-sect-subheader'>‘From nature, to nature’, we always believe.</div>
                           <div className='home-2-sect-body'>
                              <p>Creatively, we turn blue-green algae <span style={{ fontSize: '1.4em' }}>from pollution to resource</span>. Our degradation product of cyanobacteria is toxin-free small molecule nutrients, which is a great supplement to animal feed protein ingredients.</p>
                              <p>The best choice for nature problem is always hide in nature itself. We learned the existing method in nature from marine creature and develop it to be the best solution to earth cancer. The system of us is clear, simple and efficient with low the ecological safety risk. We don’t release any genetically modified organisms or their products directly into the environment.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section className='home-2-sect' style={{ left: '225vw' }}>
                  <div className='s5-bg'>
                     {/* <div ref={e => this.$s3Bg = e!}>
                        <MsImage src={assets.pages.Home.bg$jpg} imageFit={ImageFit.cover} width='100%' height='100%' />
                     </div> */}
                  </div>
               </section>

               <section className='home-2-sect' style={{ left: '325vw', width: '70vw', userSelect: 'none', zIndex: 1 }}>

                  <div className='home-2-flex' style={{ color: '#faf9f8' }}>
                     <div className='home-2-sect-inner'>
                        <div className='home-2-sect-header'>How do we make it?</div>
                        <div className='home-2-sect-subheader'>From salvage to use, we are moving on.</div>
                        <div className='home-2-sect-body'>
                           <p>Recently, we have found that a simple creature called the amphioxus (Branchiostoma) has an unusual way of absorbing nutrients called phagocytic intracellular digestion, which can digest algae directly and degrade harmful algal elements.</p>
                           <p style={{ fontSize: '1.3em' }}>Biobrick + Scaled expression + Natural ratio= Successful degradation with high efficiency</p>
                           <p>We also modeled the reaction process and mechanism by computer simulation. In addition, we combine our project with TaiHu Lake algae control program and integrated algae fishing and treatment equipment, so as to make the degradation liquid reach the level of engineering application.</p>
                        </div>
                     </div>
                  </div>

               </section>

               <section className='home-2-sect' style={{ left: '275vw', zIndex: 0 }}>
                  <div className={cns.fish}>
                     <MsImage src={assets.pages.Home.fish$jpg} width='100%' height='100%' imageFit={ImageFit.contain} />
                  </div>
               </section>

            </main>
         </div >
      );
   }
   private renderHome3() {
      const cns = normalizeClassNames({
         home3: [
            'home-3',
            this.state.showHome23 && 'show',
         ],
      });
      return (
         <div className={cns.home3} ref={e => this.$home3 = e!}>
            <div className='home-3-header'>
               <div>
                  Where would our degradation product go?
               </div>
            </div>
            <div className='home-3-subheader'>
               <div>
                  Eat algae like a fish? That’s not impossible.
               </div>
            </div>
            <div className='home-3-body'>
               <div>
                  <p>Focusing on the original discovery of intracellular digestive mechanism of marine organisms (amphioxus) and the theme of algae ecological management, we develop a novel non-grain feed protein source as raw material for feed protein based on algae degradation products. The main components of degradation products of cyanobacteria are amino acids, small peptides, oligopeptides and oligosaccharides. It will be a powerful substitute for soybean and other traditional feed protein sources with higher nutritive value, lower cost and more stable supply.</p>
                  <p>In the face of cyanobacteria crisis, we learn from the wisdom of nature. Jumping out from controlling cyanobacteria pollution via traditional methods, we find a new way to utilize cyanobacteria resources. It is a creative business model with closed-loop that will revolutionize the feed industry and have more profound influence in the future. As we know, cyanobacteria reserves are abundant around the world and if they are exploited effectively, more arable land will be saved to grow rations. This will improve the nutritional level and solve global food crisis to some extent.</p>
                  <p>By the way, perhaps one day in the future, we would develop delicious cyanobacteria biscuits and they would be your first choice for afternoon tea!</p>
               </div>
            </div>
            <div style={{ height: '6em' }}></div>
            <div className='home-3-end-logo'>
               <img src={assets.logos.teamLogo$svg} alt='The logo of our team.' />
            </div>
            <div style={{ height: '14em' }}></div>
         </div>
      );
   }
}
