import React from 'react';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { context } from '../context';
import { assets } from '../assets-path.json';
import { locaCtrl } from '../loca-ctrl';

import { HeaderNavItem, HeaderNarrowNavItem } from './HeaderNavItem';

import './css/Header.scss';
import './css/Header-wide.scss';
import './css/Header-narrow.scss';

const links = [
   {
      h1: { text: 'Project' },
      h2: [
         { text: 'Project Description', url: '/Description' },
         { text: 'Project Design', url: '/Design' },
         { text: 'Demonstrate', url: '/Demonstrate' },
      ],
   },
   {
      h1: { text: 'Lab Work' },
      h2: [
         { text: 'Experiments', url: '/Experiments' },
         { text: 'Results', url: '/Results' },
         { text: 'Parts', url: '/Parts' },
         { text: 'Model', url: '/Model' },
         { text: 'Protocols', url: '/Protocols' },
         { text: 'Notebook', url: '/Notebook' },
         { text: 'Safety', url: '/Safety' },
      ],
   },
   {
      h1: { text: 'Product' },
      h2: [
         { text: 'Product Design', url: '/Product_Design' },
         { text: 'Entrepreneur-ship', url: '/Entrepreneurship' },
      ],
   },
   {
      h1: {
         text: 'Practices',
         plainText: 'Practice',
      },
      h2: [
         { text: 'Human Practices', url: '/Human_Practices' },
         { text: 'Public Engagement', url: '/Public_Engagement' },
      ],
   },
   {
      h1: { text: 'Team' },
      h2: [
         { text: 'Memeber', url: '/Member' },
         { text: 'Attributions', url: '/Attributions' },
         { text: 'Collaborations', url: '/Collaborations' },
      ],
   },
   {
      h1: {
         text: <div style={{ display: 'flex', alignItems: 'center', fontSize: '.9em' }}>
            <div>Medal<br />Criteria</div>
            <Icon
               iconName='ArrowUpRight'
               style={{ width: 18, height: 18, fontSize: 18, marginLeft: 6 }} />
         </div>,
         plainText: 'Medal Criteria',
         icon: 'ArrowUpRight',
         url: '/Criteria',
      },
   },
];

export default class Header extends React.Component {
   public render() {
      const logo = (
         <div className='header-logo' onClick={() => locaCtrl.navTo('/')}>
            <img src={assets.logoWhite$svg} alt='Team Logo' />
            <div className='header-logo-txt'>
               <div>ALGAE</div>
               <div>TERMINATOR</div>
            </div>
            <div className='header-logo-bg'></div>
            <div className='header-logo-mask'></div>
         </div>
      );
      const wide = (
         <div id='header-wide'>
            {logo}
            <nav id='header-nav'>
               {links.map((link, i) =>
                  <HeaderNavItem
                     key={i}
                     h1={link.h1}
                     h2={link.h2}
                  />
               )}
            </nav>
         </div>
      );

      const narrow = (
         <div id='header-narrow'>
            {logo}
            <HeaderNarrowNavItem links={links} />
         </div>
      );

      return (
         <div id='header-container' ref={el => this.$headerContainer = el}>
            <header id='header' ref={el => this.$header = el}>
               <div id='header-content'>
                  {wide}
                  {narrow}
               </div>
            </header>
         </div>
      );
   }
   public $headerContainer?: HTMLDivElement | null;
   public $header?: HTMLHeadElement | null;
   private isHeaderFixed = false;

   private onPageScroll = () => {
      const { $headerContainer } = this;
      if ($headerContainer!.getBoundingClientRect().top <= 18) {
         if (!this.isHeaderFixed) {
            $headerContainer!.classList.add('fixed-header');
            this.isHeaderFixed = true;
            context.emit('headerFixed', true);
         }
      } else if (this.isHeaderFixed) {
         $headerContainer!.classList.remove('fixed-header');
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
