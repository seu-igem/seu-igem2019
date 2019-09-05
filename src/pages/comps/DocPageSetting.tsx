import React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { pageBehavior } from '../../page';

import '../css/DocPageSetting.css';

interface IDocPageSettingProps {
   darkMode: boolean;
   enableTranslate: boolean;
   lang: string;
}

export default class DocPageSetting extends React.Component<IDocPageSettingProps> {
   private onTranslateToggleChange = (
      ev: React.MouseEvent<HTMLElement, MouseEvent>,
      checked?: boolean
   ) => {
      pageBehavior.emit('lang', {
         enableTranslate: checked,
         lang: this.props.lang,
      });
   }

   public render() {
      return (<>
         <Toggle
            inlineLabel
            label={<span>
               <FontIcon iconName='Light' /> Dark Mode
            </span>}
            onText='On'
            offText='Off'
            checked={this.props.darkMode}
            onChange={(ev, checked) => {
               pageBehavior.emit('darkMode', checked);
            }}
         />
         <Toggle
            inlineLabel
            label={<span>
               <FontIcon iconName='Translate' /> Translate
            </span>}
            onText='On'
            offText='Off'
            checked={this.props.enableTranslate}
            onChange={this.onTranslateToggleChange}
         />
      </>);
   }
}
