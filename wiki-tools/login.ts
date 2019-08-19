import pupp from 'puppeteer';
import config from '../wiki-config.json';
const { account } = config;
import { delay } from './util';

export default async (browser: pupp.Browser) => {
  const page = await browser.newPage();
  await page.goto('https://igem.org/Login2');
  await page.type('input[type=text]', account.username);
  await page.type('input[type=password]', account.password);

  await Promise.all([
    page.click('.submit'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
  page.close();
};
