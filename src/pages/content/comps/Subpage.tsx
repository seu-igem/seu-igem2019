import React from 'react';
import { IconButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import './css/Subpage.scss';
import { IImageProps, Image as MsImage, ImageFit } from 'office-ui-fabric-react/lib/Image';
import $ from 'jquery';

interface ISubpageItem {
   cover: IImageProps;
   h1: string;
   h2: string;
   content: React.ReactElement;
}

interface ISubpageProps {
   style?: React.CSSProperties;
   items: ISubpageItem[];
}

interface ISubpageState {
   currentItemKey: null | number;
}
export class Subpage extends React.Component<ISubpageProps, ISubpageState> {
   private $root: HTMLDivElement;
   private $bg: HTMLDivElement;
   private $initial: HTMLDivElement;
   private $entered: HTMLDivElement;
   public state: ISubpageState = {
      currentItemKey: null,
   };
   private scroll() {
      this.$initial.children[0].scrollIntoView({
         behavior: 'smooth',
         block: 'center',
      });
   }
   public onClickItem = (itemKey: number) => {
      this.scroll();
      this.setState({
         currentItemKey: itemKey,
      }, () => {
         const $$bg = $(this.$bg);
         const currentItem = this.$initial.children[itemKey] as HTMLDivElement;
         const otherItems = [...this.$initial.children].filter(e => e !== currentItem);
         currentItem.style.zIndex = '4';
         $$bg.css({
            left: currentItem.offsetLeft + 'px',
            top: currentItem.offsetTop + 'px',
            width: currentItem.offsetWidth + 'px',
            height: currentItem.offsetHeight + 'px',
         }).show().animate({
            left: 0,
            top: 0,
            width: this.$root.offsetWidth,
            height: this.$root.offsetHeight,
         }, () => {
            this.$entered.style.opacity = '1';
            currentItem.style.zIndex = '1';
            $$bg.css('width', '100%');
            $$bg.css('height', '100%');
            $(otherItems).hide();
         });
      });
   }
   public onClickBack = () => {
      const $$bg = $(this.$bg);
      const currentItem = this.$initial.children[this.state.currentItemKey!] as HTMLDivElement;
      const otherItems = [...this.$initial.children].filter(e => e !== currentItem);

      currentItem.style.zIndex = '4';
      this.$entered.style.opacity = '0';
      $(otherItems).show();
      $$bg.animate({
         left: currentItem.offsetLeft + 'px',
         top: (currentItem.offsetTop - 60) + 'px',
         width: '13em',
         height: '18em',
      }, () => {
         $$bg.hide();
         currentItem.style.zIndex = '1';
      });
      this.scroll();

      this.setState({
         currentItemKey: null,
      });
   }
   public render() {
      const { currentItemKey } = this.state;
      const isInitial = currentItemKey === null;
      const backBtnStyles: IButtonStyles = {
         root: {
            borderRadius: 6,
            overflow: 'hidden',
            width: 32,
            height: 32,
         },
         icon: {
            fontSize: 24,
         },
      };
      const backBtn = (
         <IconButton iconProps={{ iconName: 'Back' }} onClick={this.onClickBack} styles={backBtnStyles} />
      );
      return (
         <div className='Subpage' style={this.props.style} ref={e => this.$root = e!}>
            <div className='Subpage-bg' ref={e => this.$bg = e!}></div>
            <div className={'Subpage-initial' + (isInitial ? ' is-initial' : '')} ref={e => this.$initial = e!}>
               {this.props.items.map((item, i) => (
                  <SubpageItem
                     key={i}
                     itemKey={i}
                     cover={item.cover}
                     h1={item.h1}
                     h2={item.h2}
                     onClick={this.onClickItem}
                     className={currentItemKey === i ? '' : ' show'}
                  />
               ))}
            </div>
            <div className={'Subpage-entered' + (isInitial ? ' is-initial' : '')} ref={e => this.$entered = e!}>
               {backBtn}
               <div className='Subpage-entered-content'>
                  {currentItemKey !== null && this.props.items[currentItemKey].content}
               </div>
               {backBtn}
            </div>
         </div>
      );
   }
}

interface ISubpageItemProps {
   className: string;
   itemKey: number;
   cover: IImageProps;
   h1: string;
   h2: string;
   onClick: (key: number) => void;
}

export const SubpageItem: React.FC<ISubpageItemProps> = props => {
   return (
      <div className={'Subpage-item' + props.className} onClick={() => props.onClick(props.itemKey)}>
         <MsImage
            className='Subpage-item-cover'
            shouldFadeIn
            imageFit={ImageFit.cover}
            {...props.cover}
         />
         <div className='Subpage-item-h1'>{props.h1}</div>
         <div className='Subpage-item-h2'>{props.h2}</div>
      </div>
   );
};
