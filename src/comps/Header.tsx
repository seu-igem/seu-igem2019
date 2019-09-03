import React from 'react';

import { assets } from '../assets-path.json';
import './css/Header.css';
import { pageBehavior } from '../page';

export default class Header extends React.Component {
   public render() {
      return (
         <div id='header-container' data-focus='0' ref={el => this.$HeaderContainer = el}>
            <header id='header' ref={el => this.$Header = el}>
               <img id='logo'
                  src={assets.teamLogoStroke200x200$png}
                  style={{ height: '100%' }}
                  alt='logo'
               />
            </header>
         </div>
      );
   }
   private $HeaderContainer?: HTMLDivElement | null;
   private $Header?: HTMLHeadElement | null;
   private isHeaderFixed = false;

   private onPageScroll = () => {
      if (this.$HeaderContainer!.getBoundingClientRect().top <= 18) {
         if (!this.isHeaderFixed) {
            this.$HeaderContainer!.classList.add('fixed-header');
            this.isHeaderFixed = true;
            pageBehavior.emit('headerFixed', true);
         }
      } else if (this.isHeaderFixed) {
         this.$HeaderContainer!.classList.remove('fixed-header');
         this.isHeaderFixed = false;
         pageBehavior.emit('headerFixed', false);
      }
   }

   public componentDidMount() {
      pageBehavior.on('scroll', this.onPageScroll);
   }
   public componentWillUnmount() {
      pageBehavior.removeListener('scroll', this.onPageScroll);
   }
}
