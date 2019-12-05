import React from 'react';

interface IMyImageProps {
   src: string;
}

interface IMyImageState {

}

export class MyImage extends React.Component<IMyImageProps, IMyImageState> {
   public render() {
      return (
         <div>
            <img />
         </div>
      );
   }
}
