import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Safety = new DocPage(
   {
      imgUrl: assets.cover.PublicEngagement$jpg,
      tbimgUrl: assets.cover.tnPublicEngagement$jpg,
      title: 'Safety',
   },
   lazy(() => import('./content/Safety'))
);
