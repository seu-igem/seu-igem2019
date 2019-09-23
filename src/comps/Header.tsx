import React from 'react';

import './css/Header.scss';
import { context } from '../context';

export default class Header extends React.Component {
   public render() {
      return (
         <div id='header-container' ref={el => this.$HeaderContainer = el}>
            <header id='header' ref={el => this.$Header = el}>
            </header>
         </div>
      );
   }
   public $HeaderContainer?: HTMLDivElement | null;
   public $Header?: HTMLHeadElement | null;
   private isHeaderFixed = false;

   private onPageScroll = () => {
      const { $HeaderContainer } = this;
      if ($HeaderContainer!.getBoundingClientRect().top <= 18) {
         if (!this.isHeaderFixed) {
            $HeaderContainer!.classList.add('fixed-header');
            this.isHeaderFixed = true;
            context.emit('headerFixed', true);
         }
      } else if (this.isHeaderFixed) {
         $HeaderContainer!.classList.remove('fixed-header');
         this.isHeaderFixed = false;
         context.emit('headerFixed', false);
      }
   }

   public componentDidMount() {
      context.on('scroll', this.onPageScroll);
   }
   public componentWillUnmount() {
      context.removeListener('scroll', this.onPageScroll);
   }
}
