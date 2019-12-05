import React from 'react';
import { Image } from 'office-ui-fabric-react/lib/Image';

export const ImageWithShadow: React.FC<{
   src: string;
   width?: string;
   style?: React.CSSProperties;
   caption?: string | React.ReactChild;
   noShadow?: boolean;
   noRadius?: boolean;
}> = props => {
   return (
      <div style={
         Object.assign({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column wrap',
         }, props.style || {})
      }>
         <Image
            shouldFadeIn
            styles={{
               root: {
                  width: props.width || '70%',
                  borderRadius: props.noRadius
                     ? void 0
                     : 6,
                  boxShadow: props.noShadow
                     ? void 0
                     : 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
               },
               image: {
                  width: '100%',
               },
            }}
            src={props.src}
         />
         {props.caption &&
            <div className='text'
               style={{
                  fontSize: '.9em',
                  marginBottom: '1.2em',
                  fontFamily: '\'Times New Roman\', Times, serif',
                  textAlign: 'center',
               }}
            >{props.caption}</div>
         }
      </div>

   );
};
