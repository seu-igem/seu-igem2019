import $ from 'jquery';
import { noop } from './util';

const base = 'https://justlog.xyz/api/seu-igem';
const URLs = {
   error: base + '/err',
   visit: base + '/visit',
   feedback: base + '/feedback',
};

function post(url: string, data: any, dataType?: string) {
   return new Promise<any>((resolve, reject) => {
      $.post({
         url,
         data,
         success(d) { resolve(d); },
         error(e) { reject(e); },
         dataType,
      });
   });
}

export const analysis = {
   logError(reason: any) {
      reason = String(reason);
      if (reason.length > 1e3) reason = reason.substring(0, 1000);
      post(URLs.error, {
         ua: window.navigator.userAgent,
         time: Date.now(),
         error: reason,
      }).catch(noop);
   },
   logVisit() {
      post(URLs.visit, {
         page: String(window.location),
      }).catch(noop);
   },
   ratingDoc(pagePath: string, rating: number) {
      post(URLs.feedback, {
         pagePath,
         rating,
      }).catch(noop);
   },
   commentDoc(pagePath: string, cmt: string) {
      post(URLs.feedback, {
         pagePath,
         cmt,
      }).catch(noop);
   },
};
