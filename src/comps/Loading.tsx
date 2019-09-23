import React from 'react';
import './css/Loading.scss';

interface ILoadingProps {
   showLoading: boolean;
}

export default class Loading extends React.Component<ILoadingProps> {
   private $Loading: HTMLDivElement;
   public shouldComponentUpdate(nextProps: Readonly<ILoadingProps>) {
      if (nextProps.showLoading) {
         this.$Loading.style.display = 'block';
      } else {
         setTimeout(() => {
            this.$Loading.style.display = 'none';
         }, 1000);
      }
      return true;
   }
   public render() {
      return (
         <div id='loading' ref={el => this.$Loading = el!} style={{ opacity: this.props.showLoading ? 1 : 0 }}>
            <div id='loading-inner'>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      );
   }
}
