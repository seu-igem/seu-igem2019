import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Criteria = new DocPage(
   {
      imgUrl: assets.cover.criteria$jpg,
      tbimgUrl: assets.cover.tnCriteria$jpg,
      title: 'Criteria',
   },
   lazy(() => import('./content/Criteria'))
);
