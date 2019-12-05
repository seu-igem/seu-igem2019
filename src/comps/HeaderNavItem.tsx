import React from 'react';
import { locaCtrl } from '../loca-ctrl';
import { EventEmitter } from '../util';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { lightTheme } from '../theme';

const dissmiss = new EventEmitter<{
   press: [],
}>();

window.addEventListener('mousedown', e => {
   dissmiss.emit('press');
});
window.addEventListener('touchstart', e => {
   dissmiss.emit('press');
});

interface NavItem {
   text: any;
   url?: string;
}

interface IHeaderNavItemProps {
   h1: NavItem;
   h1style?: any;
   h2?: NavItem[];
}

interface IHeaderNavItemState {
   rotate: boolean;
}

export class HeaderNavItem extends React.PureComponent<IHeaderNavItemProps, IHeaderNavItemState> {
   public componentDidMount() {
      dissmiss.on('press', this.onWindowPress);
   }
   public componentWillUnmount() {
      dissmiss.removeListener('press', this.onWindowPress);
   }

   public state = {
      rotate: false,
   };

   private shouldDismiss = true;
   private onNavPress = () => {
      this.shouldDismiss = false;
   }
   private onWindowPress = () => {
      if (!this.shouldDismiss) {
         this.shouldDismiss = true;
         return;
      }
      this.setState({
         rotate: false,
      });
   }
   private onNavOneClick = () => {
      if (!this.props.h2) {
         locaCtrl.navTo(this.props.h1.url!);
         return;
      }
      this.setState({
         rotate: true,
      });
   }
   private onNavTwoClick = (url: string) => {
      this.setState({
         rotate: false,
      });
      locaCtrl.navTo(url);
   }
   public render() {
      const { h1, h2 } = this.props;
      return (
         <div className='header-nav-3d-container'>
            <div
               className={'header-nav-item' + (this.state.rotate ? ' rotate' : '')}
               onMouseDown={this.onNavPress}
               onTouchStart={this.onNavPress}
            >
               <div
                  className='header-nav-1'
                  style={this.props.h1style && this.props.h1style.root}
                  onClick={this.onNavOneClick}
               >
                  <div>{h1.text}</div>
               </div>
               {h2 &&
                  <div className='header-nav-2'>
                     {
                        h2.map((item, i) => <div
                           key={i}
                           className='header-nav-2-item'
                           onClick={() => this.onNavTwoClick(item.url!)}
                        >
                           <div>{item.text}</div>
                        </div>)
                     }
                  </div>
               }
            </div>
         </div>
      );
   }
}

export class HeaderNarrowNavItem extends React.Component<{ links: any }, { rotate: boolean; }> {
   public $switchNav: HTMLDivElement;
   public componentDidMount() {
      dissmiss.on('press', this.onWindowPress);
   }
   public componentWillUnmount() {
      dissmiss.removeListener('press', this.onWindowPress);
   }
   public state = {
      rotate: false,
   };
   private shouldDismiss = true;
   private onNavPress = () => {
      this.shouldDismiss = false;
   }
   private onWindowPress = () => {
      if (!this.shouldDismiss) {
         this.shouldDismiss = true;
         return;
      }
      this.setState({
         rotate: false,
      });
   }
   private onNavOneClick = () => {
      this.$switchNav.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
      this.setState({
         rotate: true,
      });
   }
   private onNavTwoClick = () => {
      this.setState({
         rotate: false,
      });
   }
   private onNavItemClick = (ev?: React.MouseEvent<HTMLElement, MouseEvent>, item?: INavLink | undefined) => {
      if (!ev) return;
      if (item && item.url) {
         ev.preventDefault();
         locaCtrl.navTo(item!.url);
         this.setState({
            rotate: false,
         });
      }
   }
   public render() {
      const links = this.props.links.map((link: any, i: number) => {
         if (!link.h2) {
            return {
               name: link.h1.plainText || link.h1.text,
               url: link.h1.url,
               key: 'key' + i,
               target: '_blank',
               icon: link.h1.icon,
            };
         }
         return {
            name: link.h1.plainText || link.h1.text,
            links: link.h2.map((item: any, ii: number) => (
               {
                  name: item.text,
                  url: item.url,
                  key: 'key' + ii,
                  target: '_blank',
               }
            )),
         };
      });
      return (
         <div id='header-narrow-3d'>
            <div id='header-narrow-3dobj'
               className={this.state.rotate ? 'rotate' : ''}
               onMouseDown={this.onNavPress}
               onTouchStart={this.onNavPress}
            >
               <div id='header-switch-nav' ref={e => this.$switchNav = e!} onClick={this.onNavOneClick}>
                  <Icon
                     iconName='GlobalNavButton'
                     style={{
                        width: 66,
                        height: 66,
                        fontSize: 27,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  />
               </div>
               <div id='header-switch-nav-rotated'>
                  <Icon
                     iconName='GlobalNavButton'
                     style={{
                        width: 66,
                        height: 66,
                        fontSize: 27,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#000',
                     }}
                     onClick={this.onNavTwoClick}
                  />
                  <div id='header-narrow-nav-container'>
                     <Nav
                        onLinkClick={this.onNavItemClick}
                        ariaLabel='Nav'
                        styles={{
                           root: {
                              width: '100%',
                              maxHeight: 'calc(80vh - 66px)',
                              overflowY: 'auto',
                           },
                        }}
                        groups={[{ links }]}
                        theme={lightTheme}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
