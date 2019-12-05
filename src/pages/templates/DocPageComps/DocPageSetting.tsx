import React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { Dropdown, ResponsiveMode, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import './css/DocPageSetting.scss';
import { supportedLanguages } from '@/translation';
import { context } from '@/context';

interface IDocPageSettingProps {
   darkMode: boolean;
   translatable: boolean;
   enableTranslate: boolean;
   lang: string;
}

const TranslateDropdownList = Object.keys(supportedLanguages).map(key => ({
   key,
   text: supportedLanguages[key],
}));

export default class DocPageSetting extends React.Component<IDocPageSettingProps> {
   private onTranslateToggleChange = (
      ev: React.MouseEvent<HTMLElement, MouseEvent>,
      checked?: boolean
   ) => {
      const newLang = {
         enableTranslate: !!checked,
         lang: this.props.lang,
      };
      context.translation = newLang;
      context.emit('translation', newLang);
   }
   private onTranslateDropdownChange = (
      event: React.FormEvent<HTMLDivElement>,
      option?: IDropdownOption | undefined,
      index?: number | undefined
   ) => {
      const newLang = {
         enableTranslate: this.props.enableTranslate,
         lang: option!.key + '',
      };
      context.translation = newLang;
      context.emit('translation', newLang);
   }
   private switchDarkMode = (
      ev: React.MouseEvent<HTMLElement, MouseEvent>,
      checked: boolean | undefined
   ) => {
      context.darkMode = !!checked;
      context.emit('darkMode', !!checked);
   }

   public render() {
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
            onChange={this.switchDarkMode}
            className='doc-setting-tg'
         />
         {this.props.translatable &&
            <>
               <Toggle
                  inlineLabel
                  label={<>
                     <FontIcon iconName='Translate' />
                     <span>&nbsp;Translation</span>
                  </>}
                  onText='On'
                  offText='Off'
                  checked={this.props.enableTranslate}
                  onChange={this.onTranslateToggleChange}
                  className='doc-setting-tg'
               />
               <Dropdown
                  selectedKey={this.props.lang}
                  options={TranslateDropdownList}
                  responsiveMode={ResponsiveMode.large}
                  className='doc-setting-dd'
                  onChange={this.onTranslateDropdownChange}
               />
            </>
         }
      </>);
   }
}
