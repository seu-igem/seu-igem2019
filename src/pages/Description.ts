import { DocPage } from './DocPage';
import { lazy } from '../util';
import { assets } from '../assets-path.json';

export const Description = new DocPage(
   {
      imgUrl: assets.cover.saplings3$jpg,
      tbimgUrl: assets.cover.tnSaplings3$jpg,
      title: 'Description',
   },
   lazy(() => import('./content/Description'))
);
