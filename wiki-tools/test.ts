// tslint:disable
import pupp from 'puppeteer';
import login from './login';

(async () => {
  const browser = await pupp.launch();
  await login(browser);

  const edit_page = await browser.newPage();
  await edit_page.goto('https://2019.igem.org/wiki/index.php?title=Team:SEU-Nanjing-China/&action=edit');
  await edit_page.screenshot({ path: 'edit-result.png' });

  await browser.close();
})();
