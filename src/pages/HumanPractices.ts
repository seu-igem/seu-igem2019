import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const HumanPractices = new DocPage(
   {
      imgUrl: assets.cover.HumanPractices$jpg,
      tbimgUrl: assets.cover.tnHumanPractices$jpg,
      title: 'Human Practices',
   },
   lazy(() => import('./content/HumanPractices'))
);
