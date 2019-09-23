import { EventEmitter } from './util';
import { getDefaultLang } from './translation';

interface Context extends EventEmitter<{
   headerFixed: [boolean];
   darkMode: [boolean];
   translation: [{
      enableTranslate: boolean,
      lang: string,
   }];
   scroll: [];
}> {
   darkMode: boolean;
   translation: {
      enableTranslate: boolean,
      lang: string,
   };
}

export const context: Context = Object.assign(new EventEmitter(), {
   darkMode: false,
   translation: {
      enableTranslate: false,
      lang: getDefaultLang(),
   },
});
