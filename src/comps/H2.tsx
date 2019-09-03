import React from 'react';
import './css/H2.css';

const H2: React.FunctionComponent = props => {
   if (typeof props.children !== 'string') throw new Error('The `children` of H2 must be a string.');
   const anchorName =
      props.children
         .toLowerCase()
         .replace(/[^\w\s]/g, '')
         .replace(/(\w)\s+(\w)/g, (_, $1, $2) => $1 + '-' + $2);
   return (
      <h2 id={'anchor-' + anchorName}>
         {props.children}
         &nbsp;
         <a href={'#' + anchorName} className='h2-anchor'>#</a>
      </h2>
   );
};

export default H2;
