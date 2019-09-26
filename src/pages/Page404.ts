import { DocPage } from './DocPage';
import { lazy } from '../util';
import { assets } from '../assets-path.json';

export const Page404 = new DocPage(
   {
      imgUrl: assets.cover.Description$jpg,
      tbimgUrl: assets.cover.tnDescription$jpg,
      title: 'Description',
   },
   lazy(() => import('./content/Page404'))
);
