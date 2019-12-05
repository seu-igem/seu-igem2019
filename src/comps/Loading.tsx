import React from 'react';
import './css/Loading.scss';

interface ILoadingProps {
   showLoading: boolean;
}

export default class Loading extends React.Component<ILoadingProps> {
   private $loading: HTMLDivElement;
   public shouldComponentUpdate(nextProps: Readonly<ILoadingProps>) {
      if (nextProps.showLoading) {
         this.$loading.style.display = 'flex';
      } else {
         setTimeout(() => {
            this.$loading.style.display = 'none';
         }, 1000);
      }
      return true;
   }
   public render() {
      return (
         <div id='loading' ref={el => this.$loading = el!} style={{ opacity: this.props.showLoading ? 1 : 0 }}>
            <div id='loading-inner'>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      );
   }
}
