import React from 'react';
import './css/Link.scss';
import { locaCtrl } from '@/loca-ctrl';

export const Link: React.FC<{ href: string; target?: string }> = props => {
   const href = props.href;
   const target = props.target || '_blank';
   if (href.startsWith('/')) {
      const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
         event.preventDefault();
         locaCtrl.navTo(href);
      };
      return (
         <span className='Link'>
            <a href={'/Team:SEU-Nanjing-China' + href} onClick={onClick}>{props.children}</a>
         </span>
      );
   } else if (href.startsWith('#')) {
      const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
         event.preventDefault();
         const elem = document.getElementById(href.substring(1));
         if (elem) {
            elem.scrollIntoView({
               block: 'center',
               behavior: 'smooth',
            });
         }
      };
      return (
         <span className='Link'>
            <a href={href} onClick={onClick}>{props.children}</a>
         </span>
      );
   } else {
      return (
         <span className='Link'>
            <a href={href} target={target} rel='noopener noreferrer'>{props.children}</a>
         </span>
      );
   }
};
