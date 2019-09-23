import React from 'react';
import { context } from '../context';
import { translation } from '.';
import { } from './Translate';

export function makeTranslatable<P extends { innerHTML: string; } | { innerHTML: string; original: string; }>(
   WrappedComponent: React.FunctionComponent<P> | React.ComponentClass<P> | string
) {
   interface TranslatableComponentState {
      currentLang: string;
      targetLang: string | null;
      innerHTML: string;
   }

   return class extends React.PureComponent<Omit<P, 'original'> & { TRkey: string; }, TranslatableComponentState> {
      public initialState = {
         currentLang: 'en',
         targetLang: null,
         innerHTML: this.props.innerHTML,
      };

      public state = Object.assign({}, this.initialState);

      private onTranslation = (
         { lang, enableTranslate }: { lang: string; enableTranslate: boolean; }
      ) => {
         if (!enableTranslate) {
            this.setState(this.initialState);
            return;
         }

         if (this.state.currentLang === lang) {
            this.setState({
               targetLang: null,
            });
            return;
         }

         if (this.state.targetLang !== lang) {
            this.setState({
               targetLang: lang,
            });
            translation.getTranslation(
               this.props.TRkey,
               this.props.innerHTML,
               lang
            ).then(result => this.onTranslationDone({
               success: true,
               result,
               lang,
            })).catch(() => this.onTranslationDone({
               success: false,
               lang,
            }));
         }
      }

      private onTranslationDone(o: { success: boolean; result?: string; lang: string; }) {
         if (!o.success) {
            if (this.state.targetLang === o.lang) {
               this.setState(this.initialState);
            }
            return;
         }

         this.setState({
            currentLang: o.lang,
            targetLang: null,
            innerHTML: o.result!,
         });
      }

      public componentDidMount() {
         context.on('translation', this.onTranslation);
         if (context.translation.enableTranslate) {
            this.onTranslation(context.translation);
         }
      }
      public componentWillUnmount() {
         context.removeListener('translation', this.onTranslation);
      }
      public render() {
         const isNative = typeof WrappedComponent === 'string';
         const childProps: any = Object.assign({}, this.props,
            isNative
               ? { dangerouslySetInnerHTML: { __html: this.state.innerHTML } }
               : { innerHTML: this.state.innerHTML, original: this.props.innerHTML }
         );
         isNative && delete childProps.innerHTML;

         return (
            <WrappedComponent {...childProps} />
         );
      }
   };
}
