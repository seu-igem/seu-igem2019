import React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export const AlertSafari: React.FC<{ show: boolean; hide: () => void }> = props => {
   return (
      <Dialog
         hidden={!props.show}
         dialogContentProps={{
            type: DialogType.normal,
            title: 'Safari Detected',
         }}
         modalProps={{
            isBlocking: true,
            styles: { main: { maxWidth: 450 } },
         }}
      >
         <div style={{ lineHeight: '22px' }}>
            It seems that you are using Safari to browse our wiki.
            It is an old browser with many wrong implementations of
            the specification that can lead to poor display.
            Would you please consider using other modern browsers instead?
            <div style={{ marginTop: 10, display: 'flex' }}>
               <img src='https://developer.mozilla.org/static/browsers/chrome.b49946f7739f.svg' width={20} alt='Icon of Chrome' />
               &nbsp;&nbsp;&nbsp;Chrome
            </div>
            <div style={{ marginTop: 10, display: 'flex' }}>
               <img src='https://developer.mozilla.org/static/browsers/firefox.1c9f202ae696.svg' width={20} alt='Icon of Firefox' />
               &nbsp;&nbsp;&nbsp;Firefox
            </div>
            <div style={{ marginTop: 10, display: 'flex' }}>
               <img src='https://developer.mozilla.org/static/browsers/edge.a5b352eb863f.svg' width={20} alt='Icon of Edge' />
               &nbsp;&nbsp;&nbsp;Edge
            </div>
            <div style={{ marginTop: 10, display: 'flex' }}>
               <img src='https://developer.mozilla.org/static/browsers/opera.da441711d2f6.svg' width={20} alt='Icon of Opera' />
               &nbsp;&nbsp;&nbsp;Opera
            </div>
         </div>
         <DialogFooter>
            <PrimaryButton
               onClick={props.hide}
               text='Never show again' />
         </DialogFooter>
      </Dialog>
   );
};
