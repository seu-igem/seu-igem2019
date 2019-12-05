import React from 'react';
import './css/H2.css';
import Translate from '../../../translation/Translate';

const TRp: React.FC<{ TRkey: string; style?: React.CSSProperties }> = props => {
   return (
      <Translate TRkey={props.TRkey}>
         <p style={props.style}>{props.children}</p>
      </Translate>
   );
};

export default TRp;
