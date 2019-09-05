import React from 'react';
import DocPageSetting from './DocPageSetting';

import '../css/DocPageAside.css';

interface IDocPageAsideProps {
   darkMode: boolean;
   enableTranslate: boolean;
   lang: string;
}

export default class DocPageAside extends React.Component<IDocPageAsideProps> {
   public render() {
      return (<>
         <DocPageSetting
            darkMode={this.props.darkMode}
            enableTranslate={this.props.enableTranslate}
            lang={this.props.lang}
         />
      </>);
   }
}
