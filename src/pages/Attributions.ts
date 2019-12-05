import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Attributions = new DocPage(
   {
      imgUrl: assets.cover.Attributions$jpg,
      tbimgUrl: assets.cover.tnAttributions$jpg,
      title: 'Attributions',
   },
   lazy(() => import('./content/Attributions'))
);
