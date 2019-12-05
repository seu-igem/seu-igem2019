import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Model = new DocPage(
   {
      imgUrl: assets.cover.lab$jpg,
      tbimgUrl: assets.cover.tnLab$jpg,
      title: 'Model',
   },
   lazy(() => import('./content/Model'))
);
