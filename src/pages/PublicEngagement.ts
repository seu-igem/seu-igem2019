import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const PublicEngagement = new DocPage(
   {
      imgUrl: assets.cover.PublicEngagement$jpg,
      tbimgUrl: assets.cover.tnPublicEngagement$jpg,
      title: 'Public Engagement',
   },
   lazy(() => import('./content/PublicEngagement'))
);
