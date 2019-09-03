import React from 'react';

import { analysis } from '../../analysis';

import '../css/DocPageRating.css';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

interface IDocPageRatingProps {
   pagePath: string;
}

interface IDocPageRatingState {
   rating?: number;
   ratingBtnActive: boolean[];
   textFieldValue: string;
   commentSent: boolean;
}

export default class DocPageRating extends React.Component<IDocPageRatingProps, IDocPageRatingState> {
   public state = {
      rating: void 0,
      ratingBtnActive: [false, false, false],
      textFieldValue: '',
      commentSent: false,
   };

   private onHover(i: number) {
      const ratingBtnActive = [false, false, false];
      ratingBtnActive[i] = true;
      this.setState({ ratingBtnActive });
   }

   private onLeave() {
      const ratingBtnActive = [false, false, false];
      if (typeof this.state.rating !== 'undefined') {
         ratingBtnActive[this.state.rating!] = true;
      }
      this.setState({ ratingBtnActive });
   }

   private onClick(i: number) {
      const prevRating = this.state.rating;
      const ratingBtnActive = [false, false, false];
      ratingBtnActive[i] = true;
      this.setState({
         rating: i,
         ratingBtnActive,
      });
      if (prevRating !== i) this.onRatingChange(i);
   }

   public onRatingChange(i: number) {
      analysis.ratingDoc(this.props.pagePath, i);
   }

   public onSubmit = () => {
      if (this.state.commentSent) return;
      if (this.state.textFieldValue.length < 4) return;
      const cmt = this.state.textFieldValue;
      this.setState({
         textFieldValue: '',
         commentSent: true,
      });
      analysis.commentDoc(this.props.pagePath, cmt);
   }

   public onTextFieldChange = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      if (!newValue || newValue.length <= 500) {
         this.setState({ textFieldValue: newValue || '' });
      } else {
         this.setState({ textFieldValue: this.state.textFieldValue });
      }
   }

   public render() {
      return (
         <div className='doc-rating-cmt-container'>
            <div className='doc-rating-container'>
               <div className='doc-rating'>
                  {['EmojiDisappointed', 'EmojiNeutral', 'Emoji2'].map((iconName, i) => (
                     <div key={i}>
                        <div
                           className={'doc-rating-btn ' +
                              (this.state.ratingBtnActive[i]
                                 ? 'doc-rating-btn-active'
                                 : 'doc-rating-btn-inactive')
                           }
                           onMouseOver={() => this.onHover(i)}
                           onMouseLeave={() => this.onLeave()}
                           onTouchStart={() => this.onHover(i)}
                           onTouchEnd={() => this.onLeave()}
                           onClick={() => this.onClick(i)}
                        >
                           <FontIcon iconName={iconName} />
                        </div>
                     </div>
                  ))}
               </div>
               <div className='doc-rating-hint'>
                  {typeof this.state.rating === 'undefined'
                     ? 'How about this article?'
                     : this.state.rating === 0
                        ? 'Sorry, we will try to improve.'
                        : this.state.rating === 1
                           ? 'We will continue to improve.'
                           : 'Thank you~'
                  }
               </div>
            </div>
            <div className='doc-cmt-container'>
               <TextField multiline resizable={false} placeholder='Comment on this article' rows={7} value={this.state.textFieldValue} onChange={this.onTextFieldChange} />
               <div className='doc-cmt-submit-container'>
                  {this.state.commentSent && <span><FontIcon iconName='CheckMark' style={{ color: 'green' }} />Thanks for your feedback. &nbsp;</span>}
                  <PrimaryButton text='Submit' onClick={this.onSubmit} />
               </div>
            </div>
         </div>
      );
   }
}
