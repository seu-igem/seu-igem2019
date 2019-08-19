import md5 from 'md5';
import fs from 'fs-extra';
import pupp from 'puppeteer';

export function delay(second = 1) {
  return new Promise(r => {
    setTimeout(r, second * 1000);
  });
}

export function getFileHash(filepath: string) {
  return md5(fs.readFileSync(filepath)).substring(0, 8);
}

export function waitUntilUrlChanged(page: pupp.Page, timeout: number) {
  const oldUrl = page.url();
  return new Promise(async (resolve, reject) => {
    let over = false;
    setTimeout(() => {
      over = true;
    }, timeout);

    while (true) {
      if (page.url() !== oldUrl) {
        resolve();
        break;
      }
      if (over) {
        reject('timeout');
        break;
      }
      await delay(0.2);
    }
  });
}

/**
 * Turn an asynchronous function curry into a function that
 * limits concurrent numbers.
 */
export function concurrencyRestrictify<T extends Function>(
  fn: T,
  num: number
): T {
  const queue = [] as Array<{
    args: any[];
    resolve: () => void;
    reject: () => void;
  }>;
  let concNum = 0;

  function checkout() {
    concNum--;
    if (queue.length > 0 && num - concNum > 0) {
      queue.splice(0, num - concNum).forEach(task => {
        concNum++;
        fn(...task.args)
          .then(task.resolve)
          .catch(task.reject)
          .finally(checkout);
      });
    }
  }

  return ((...args: any[]) => {
    if (concNum < num) {
      concNum++;
      return fn(...args).finally(checkout);
    }

    return new Promise<any>((resolve, reject) => {
      queue.push({ args, resolve, reject });
    });
  }) as any as T;
}
