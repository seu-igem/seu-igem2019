import React from 'react';
import './css/Parafolding.scss';

interface Paragraph {
   title: string;
   body: React.ReactChild;
}

interface IParafoldingProps {
   left?: boolean;
   paras: Paragraph[];
}
interface IParafoldingState {
   currentlyViewingParaId: number | null;
}
export class Parafolding extends React.Component<IParafoldingProps, IParafoldingState> {
   public state: IParafoldingState = {
      currentlyViewingParaId: null,
   };
   private onClickTitle = (paraId: number) => {
      if (this.state.currentlyViewingParaId === paraId) {
         this.setState({
            currentlyViewingParaId: null,
         });
      } else {
         this.setState({
            currentlyViewingParaId: paraId,
         });
      }
   }
   public render() {
      const { paras } = this.props;
      const { currentlyViewingParaId } = this.state;
      return (
         <div className='Parafolding'>
            {
               paras.map((para, i) => (
                  <div className='Parafolding-group' key={i}>
                     <div className='Parafolding-title' onClick={() => this.onClickTitle(i)}>
                        <div className={'Parafolding-title-inner' + (this.props.left ? ' left' : '')}>
                           {para.title}
                        </div>
                     </div>
                     <div
                        className={
                           'Parafolding-content text ' +
                           (currentlyViewingParaId === i ? 'show' : '')
                        }>
                        {para.body}
                     </div>
                  </div>
               ))
            }
         </div>
      );
   }
}
