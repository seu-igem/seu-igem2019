import React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { pageBehavior } from '../../page';

interface IDocPageAsideProps {
   darkMode: boolean;
   calloutTarget: HTMLDivElement;
   showSettingCallout: boolean;
}

export default class DocPageAside extends React.Component<IDocPageAsideProps> {
   public render() {
      return (
         <div id='doc-aside-container'>
            <aside id='doc-aside'>
               <Toggle
                  label='Dark Mode'
                  onText='On'
                  offText='Off'
                  checked={this.props.darkMode}
                  onChange={(ev, checked) => {
                     pageBehavior.emit('darkMode', checked);
                  }}
               />
            </aside>
            <Callout
               gapSpace={0}
               target={this.props.calloutTarget}
               onDismiss={() => { this.setState({ showSettingCallout: false }); }}
               setInitialFocus={true}
               hidden={!this.props.showSettingCallout}
            >
               <div className='doc-setting-callout-inner'>
                  <Toggle
                     inlineLabel
                     label='Dark Mode'
                     onText='On'
                     offText='Off'
                     checked={this.props.darkMode}
                     onChange={(ev, checked) => {
                        pageBehavior.emit('darkMode', checked);
                     }}
                  />
               </div>
            </Callout>
         </div>
      );
   }
}
