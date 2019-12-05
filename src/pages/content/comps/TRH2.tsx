import React from 'react';
import './css/H2.css';
import Translate from '../../../translation/Translate';

const H2: React.FC<{
   prefix?: string
}> = props => {
   if (typeof props.children !== 'string') throw new Error('Invalid children of H2.');

   const anchorName =
      props.children
         .toLowerCase()
         .replace(/[^\w\s]/g, '')
         .replace(/(\w)\s+(\w)/g, (_, $1, $2) => $1 + '-' + $2);

   return (
      <h2 id={'anchor-' + anchorName} className='doc-page-h2'>
         <span>
            {props.prefix && (props.prefix + '. ')}
            {props.children}
         </span>
         &nbsp;
         <a href={'#' + anchorName} className='h2-anchor'>#</a>
      </h2>
   );
};

const TRH2: React.FC<{ TRkey: string; prefix?: string; }> = props => {
   if (typeof props.children !== 'string') throw new Error('Invalid children of TRH2.');
   return (
      <Translate TRkey={props.TRkey}>
         <H2 prefix={props.prefix}>{props.children}</H2>
      </Translate>
   );
};

export default TRH2;
