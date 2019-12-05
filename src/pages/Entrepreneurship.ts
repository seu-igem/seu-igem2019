import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Entrepreneurship = new DocPage(
   {
      imgUrl: assets.cover.product$jpg,
      tbimgUrl: assets.cover.tnProduct$jpg,
      title: 'Entrepreneurship',
   },
   lazy(() => import('./content/Entrepreneurship'))
);
