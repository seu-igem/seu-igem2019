import React from 'react';
import GitHubButton from 'react-github-btn';

import './css/Footer.scss';
import { pageBehavior, PageLoadingStage } from '../page';

export default class Footer extends React.Component {
   private $Footer: HTMLDivElement;
   public componentDidMount() {
      pageBehavior.on('pageLoadingStage', stage => {
         if (stage >= PageLoadingStage.codeLoaded) {
            this.$Footer.style.opacity = '1';
         } else { }
      });
   }
   public render() {
      return (
         <div id='footer' ref={el => this.$Footer = el!}>
            <div id='footer-strip-container'>
               <div id='footer-strip-1' className='footer-strip'></div>
               <div id='footer-strip-2' className='footer-strip'></div>
               <div id='footer-strip-3' className='footer-strip'></div>
            </div>
            <div id='footer-1'>
               <div id='footer-2'>
                  <div className='footer-space'></div>
                  <div id='footer-content'>
                     <div></div>
                     <GitHubButton
                        href='https://github.com/seu-igem/seu-igem2019'
                        data-size='large'
                        data-show-count
                        aria-label='Star seu-igem/seu-igem2019 on GitHub'>
                        Star
                     </GitHubButton>
                  </div>
                  <div className='footer-space'></div>
               </div>
            </div>
         </div>
      );
   }
}
