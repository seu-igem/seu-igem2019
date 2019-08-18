import pupp from 'puppeteer';
import config from '../wiki-config.json';
const { account } = config;
import { delay } from './util';

export default async (browser: pupp.Browser) => {
  const page = await browser.newPage();
  await page.goto('https://igem.org/Login2');
  await page.type('input[type=text]', account.username);
  await page.type('input[type=password]', account.password);
  await page.click('.submit');

  for (let i = 0; i < 100; ++i) {
    await delay(0.1);
    if (page.url() === 'https://igem.org/Login_Confirmed') {
      break;
    }
    if (i === 99) throw new Error('Login timeout');
  }
};
