import { DocPage } from './DocPage';
import { lazy } from '../util';
import { assets } from '../assets-path.json';

export const Protocols = new DocPage(
   {
      imgUrl: assets.cover.Description$jpg,
      tbimgUrl: assets.cover.tnDescription$jpg,
      title: 'Protocols',
   },
   lazy(() => import('./content/Protocols'))
);
