import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Collaborations = new DocPage(
   {
      imgUrl: assets.cover.team$jpg,
      tbimgUrl: assets.cover.tnTeam$jpg,
      title: 'Collaborations',
   },
   lazy(() => import('./content/Collaborations'))
);
