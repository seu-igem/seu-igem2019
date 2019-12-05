import React from 'react';
import './css/H3.scss';
import Translate from '../../../translation/Translate';

const H3: React.FC<{
   prefix?: string;
   style?: React.CSSProperties;
}> = props => {
   if (typeof props.children !== 'string') throw new Error('Invalid children of H3.');

   return (
      <h3 style={props.style}>
         <span>
            {props.prefix && (props.prefix + '. ')}
            {props.children}
         </span>
      </h3>
   );
};

const TRH3: React.FC<{ TRkey: string; prefix?: string; style?: React.CSSProperties }> = props => {
   if (typeof props.children !== 'string') throw new Error('Invalid children of TRH3.');
   return (
      <Translate TRkey={props.TRkey}>
         <H3 prefix={props.prefix} style={props.style}>{props.children}</H3>
      </Translate>
   );
};

export default TRH3;
