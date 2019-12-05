import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Member = new DocPage(
   {
      imgUrl: assets.cover.team$jpg,
      tbimgUrl: assets.cover.tnTeam$jpg,
      title: 'Member',
   },
   lazy(() => import('./content/Member'))
);
