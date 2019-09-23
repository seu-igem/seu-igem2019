import React from 'react';
import './css/H2.css';
import Translate from '../../../translation/Translate';

const TRH2: React.FC<{ TRkey: string }> = props => {
   if (typeof props.children !== 'string') throw new Error('Invalid children of TRH2.');
   const anchorName =
      props.children
         .toLowerCase()
         .replace(/[^\w\s]/g, '')
         .replace(/(\w)\s+(\w)/g, (_, $1, $2) => $1 + '-' + $2);
   return (
      <Translate TRkey={props.TRkey}>
         <h2 id={'anchor-' + anchorName} className='doc-page-h2'>
            <span>
               {props.children}
            </span>
            &nbsp;
            <a href={'#' + anchorName} className='h2-anchor'>#</a>
         </h2>
      </Translate>
   );
};

export default TRH2;
