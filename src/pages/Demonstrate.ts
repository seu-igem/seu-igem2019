import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Demonstrate = new DocPage(
   {
      imgUrl: assets.cover.demonstrate$jpg,
      tbimgUrl: assets.cover.tnDemonstrate$jpg,
      title: 'Demonstrate',
   },
   lazy(() => import('./content/Demonstrate'))
);
