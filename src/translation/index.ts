import $ from 'jquery';
import _supportedLanguages from './supported-languages.json';
import { EventEmitter, noop } from '../util';

export const sourceLanguage = 'en';
export const supportedLanguages: { [_: string]: string } = _supportedLanguages;

export function detectDefaultLang(): string {
   const lang: string = navigator.language
      || (navigator as any).userLanguage
      || 'zh-Hans';
   if (supportedLanguages[lang]) return lang;
   if (supportedLanguages[lang.split('-')[0]]) return lang.split('-')[0];
   for (const key of Object.keys(supportedLanguages)) {
      if (key.split('-')[0] === lang) return key;
      if (key.split('-')[0] === lang.split('-')[0]) return key;
   }
   return 'zh-Hans';
}

class TranslationItem extends EventEmitter<{ stateChange: [number] }> {
   public text: string | undefined;
   public state: 0 | 1 | 2 = 0;
}

type ITranslationBatch = Array<{
   textKey: string;
   text: string;
   targetLang: string;
   promise: Promise<string>;
   resolve: (text: string) => void;
   reject: () => void;
}>;

class Translation extends EventEmitter<{
   backToIdle: [boolean /* last batch final state */];
}> {
   private dataSource: {
      [TextKey: string]: {
         [lang: string]: TranslationItem;
      }
   } = {};
   public busy = 0;

   public batch: ITranslationBatch = [];
   public getTranslation(textKey: string, text: string, targetLang: string) {
      if (!this.dataSource[textKey]) this.dataSource[textKey] = {};
      if (!this.dataSource[textKey][targetLang]) this.dataSource[textKey][targetLang] = new TranslationItem();

      let resolve: (text: string) => void = noop;
      let reject: () => void = noop;
      const promise = new Promise<string>((_resolve, _reject) => {
         resolve = _resolve;
         reject = _reject;
      });

      this.batch.push({
         textKey,
         text,
         targetLang,
         promise,
         resolve,
         reject,
      });
      if (!this.willExecute) {
         this.willExecute = true;
         Promise.resolve().then(this.execute);
      }
      return promise;
   }
   private willExecute = false;
   private execute = () => {
      this.busy++;
      this.willExecute = false;

      const promises = this.batch.map(o => o.promise);

      const batch = this.batch.filter(o => {
         const item = this.dataSource[o.textKey][o.targetLang];
         if (item.state === 2) {
            o.resolve(item.text!);
            return false;
         }
         if (item.state === 1) {
            item.once('stateChange', state => {
               if (state === 2) o.resolve(o.text!);
               else if (state === 0) o.reject();
               else throw new Error('Program flow should not arrive here');
            });
            return false;
         }
         item.state = 1;
         item.emit('stateChange', 1);
         return true;
      });
      const batches = Translation.splitBatch(batch);

      batches.forEach(b => this.sendTranslateRequest(b));
      Promise.all(promises).then(
         () => {
            this.busy--;
            if (!this.busy) this.emit('backToIdle', true);
         },
         () => {
            this.busy--;
            if (!this.busy) this.emit('backToIdle', false);
         }
      );
   }

   /**
    * Due to the limitation of Microsoft Translator, the batch may have to be
    * split into smaller pieces.
    */
   private static splitBatch(batch: ITranslationBatch): ITranslationBatch[] {
      const result: ITranslationBatch[] = [];
      const resultEachSize: number[] = [];
      const pointer: { [targetLang: string]: number; } = {};

      for (const bi of batch) {
         if (!pointer[bi.targetLang]) {
            pointer[bi.targetLang] = result.length;
            resultEachSize[result.length] = 0;
            result.push([]);
         }
         let p = pointer[bi.targetLang];
         let targetBatch = result[p];
         let targetBatchSize = resultEachSize[p];
         if (targetBatch.length >= 100 || targetBatchSize >= 1000) {
            pointer[bi.targetLang] = p = result.length;
            resultEachSize[p] = 0;
            result.push([]);
            targetBatch = result[p];
            targetBatchSize = resultEachSize[p];
         }
         targetBatch.push(bi);
         resultEachSize[p] += bi.text.length;
      }

      return result;
   }

   private static API = {
      url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0',
      method: 'POST',
      headers: {
         'Ocp-Apim-Subscription-Key': '3d5e632adccd4842a6c6e6649ef4de22',
      },
   };

   private sendTranslateRequest(batch: ITranslationBatch) {
      const success = (data: any) => {
         if (!Array.isArray(data) || data.length !== batch.length) return error();
         batch.forEach((bi, i) => {
            const ti = this.dataSource[bi.textKey][bi.targetLang];
            ti.text = data[i].translations[0].text;
            if (ti.state !== 2) {
               ti.state = 2;
               ti.emit('stateChange', 2);
            }
            bi.resolve(data[i].translations[0].text);
         });
      };

      const error = () => {
         batch.forEach(bi => {
            const ti = this.dataSource[bi.textKey][bi.targetLang];
            if (ti.state === 1) {
               ti.state = 0;
               ti.emit('stateChange', 0);
            }
            bi.reject();
         });
      };

      const requestOptions: any = {
         method: Translation.API.method,
         url: Translation.API.url + '&textType=html&from=en&to=' + batch[0].targetLang,
         data: JSON.stringify(
            batch.map(b => ({ text: b.text }))
         ),
         dataType: 'json',
         contentType: 'application/json',
         headers: Translation.API.headers,
         retryLimit: 2,
         timeout: 12000,
         success,
         error(xhr: any, textStatus: any) {
            if (textStatus === 'timeout') {
               this.retryLimit--;
               if (this.retryLimit > 0) {
                  $.ajax(this);
                  return;
               }
            }
            error();
         },
      };
      $.ajax(requestOptions);
   }
}

export const translation = new Translation();
