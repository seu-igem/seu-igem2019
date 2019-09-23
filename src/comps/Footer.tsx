import React from 'react';
import { assets } from '../assets-path.json';

import './css/Footer.scss';

interface IFooterProps {
   showFooter?: boolean;
}

export default class Footer extends React.Component<IFooterProps> {
   private onClickLogoBtn = (url: string) => {
      const tab = window.open()!;
      tab.opener = null;
      tab.location.href = url;
   }

   public render() {
      return (
         <div id='footer' style={{ display: this.props.showFooter ? 'block' : 'none' }}>
            <div id='footer-strip-container'>
               <div id='footer-strip-1' className='footer-strip'></div>
               <div id='footer-strip-2' className='footer-strip'></div>
               <div id='footer-strip-3' className='footer-strip'></div>
            </div>
            <div id='footer-1'>
               <div id='footer-2'>
                  <div className='footer-space'></div>
                  <div id='footer-content'>
                     <div id='footer-cont-logo'>
                        <div id='footer-cta'>
                           <div id='footer-cta-inner'>
                              <h3>Contact us</h3>
                              <hr />
                              <table><tbody>
                                 <tr>
                                    <td>Email</td>
                                    <td style={{ width: '1.8em' }}></td>
                                    <td>XXXXXXXXXX</td>
                                 </tr>
                                 <tr>
                                    <td>Twitter</td>
                                    <td style={{ width: '1.8em' }}></td>
                                    <td>XXXXXXXXXX</td>
                                 </tr>
                                 <tr>
                                    <td>Facebook</td>
                                    <td style={{ width: '1.8em' }}></td>
                                    <td>XXXXXXXXXX</td>
                                 </tr>
                              </tbody></table>
                           </div>
                        </div>
                        <div id='footer-logo'>
                           <div className='footer-logo-btn' onClick={() => this.onClickLogoBtn('https://www.seu.edu.cn/english/main.htm')}>
                              <img
                                 src={assets.SEUWithTxtWhite$png}
                                 alt='Southeast University Logo'
                                 style={{ height: '4.8em' }}
                              />
                           </div>
                           <div className='footer-logo-btn' onClick={() => this.onClickLogoBtn('https://sklb.seu.edu.cn/')}>
                              <img
                                 src={assets.sklbLogo$png}
                                 alt='State Key Laboratory of Bioelectronics'
                                 style={{
                                    height: '4.5em',
                                    position: 'relative',
                                    left: '.6em',
                                 }}
                              />
                           </div>
                           <div id='footer-github-container' className='footer-logo-btn' onClick={() => this.onClickLogoBtn('https://github.com/seu-igem/seu-igem2019')}>
                              <img
                                 src={assets.github.GitHubMarkLight64px$png}
                                 alt='Star this website on Github'
                                 style={{ height: '3.2em' }}
                              />
                              <div style={{ width: '1.2em' }}></div>
                              <div id='footer-github-msg'>
                                 <h2>Like our website?</h2>
                                 <p>
                                    It is open sourced under GPLv2 License on Github.
                           </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='footer-space'></div>
               </div>
            </div>
         </div>
      );
   }
}
