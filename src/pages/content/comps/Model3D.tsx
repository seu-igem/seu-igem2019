import React from 'react';
import { Stage } from 'ngl';

export class Model3D extends React.Component<{ id: string; url: string }> {
   private stage: any;
   private resize = () => {
      setTimeout(() => {
         this.stage.handleResize();
      }, 600);
   }
   public componentDidMount() {
      this.stage = new Stage('model-3d-' + this.props.id, { backgroundColor: 'white' });
      this.stage.setSpin(true);
      this.stage.loadFile(this.props.url, { defaultRepresentation: true, ext: 'pdb' });
      window.addEventListener('resize', this.resize);
   }
   public componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
   }
   public render() {
      return (
         <div id={'model-3d-' + this.props.id} style={{ width: '100%', height: '100%', borderRadius: 6, overflow: 'hidden' }}></div>
      );
   }
}

