import React from 'react';
import './Loading.css';

export default class Loading extends React.Component {
   public render() {
      return (
         <div className='loading-container'>
            <div className='sk-cube sk-cube1'></div>
            <div className='sk-cube sk-cube2'></div>
            <div className='sk-cube sk-cube3'></div>
            <div className='sk-cube sk-cube4'></div>
            <div className='sk-cube sk-cube5'></div>
            <div className='sk-cube sk-cube6'></div>
            <div className='sk-cube sk-cube7'></div>
            <div className='sk-cube sk-cube8'></div>
            <div className='sk-cube sk-cube9'></div>
         </div>
      );
   }
}
