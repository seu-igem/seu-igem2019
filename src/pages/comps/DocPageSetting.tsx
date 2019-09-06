import React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { Dropdown, ResponsiveMode } from 'office-ui-fabric-react/lib/Dropdown';
import { pageBehavior } from '../../page';

import '../css/DocPageSetting.scss';
import { Translate } from '../../translate';

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
      const { langList } = Translate;
      return (<>
         <Toggle
            inlineLabel
            label={<>
               <FontIcon iconName='Light' />
               <span>&nbsp;Dark Mode</span>
            </>}
            onText='On'
            offText='Off'
            checked={this.props.darkMode}
            onChange={(ev, checked) => {
               pageBehavior.emit('darkMode', checked);
            }}
            className='doc-setting-tg'
         />
         <Toggle
            inlineLabel
            label={<>
               <FontIcon iconName='Translate' />
               <span>&nbsp;Translate</span>
            </>}
            onText='On'
            offText='Off'
            checked={this.props.enableTranslate}
            onChange={this.onTranslateToggleChange}
            className='doc-setting-tg'
         />
         <Dropdown
            defaultSelectedKey='zh'
            options={Object.keys(langList).map(key => ({
               key,
               text: (langList as any)[key],
            }))}
            responsiveMode={ResponsiveMode.large}
            className='doc-setting-dd'
         />
      </>);
   }
}
