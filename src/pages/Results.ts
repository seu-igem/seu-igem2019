import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Results = new DocPage(
   {
      imgUrl: assets.cover.lab$jpg,
      tbimgUrl: assets.cover.tnLab$jpg,
      title: 'Results',
   },
   lazy(() => import('./content/Results'))
);
