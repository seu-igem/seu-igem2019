import React from 'react';
import './css/H2.css';
import Translate from '../../../translation/Translate';

const TRp: React.FC<{ TRkey: string; }> = props => {
   return (
      <Translate TRkey={props.TRkey}>
         <p>{props.children}</p>
      </Translate>
   );
};

export default TRp;
