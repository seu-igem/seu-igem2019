import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Protocols = new DocPage(
   {
      imgUrl: assets.cover.Protocols$jpg,
      tbimgUrl: assets.cover.tnProtocols$jpg,
      title: 'Protocols',
   },
   lazy(() => import('./content/Protocols'))
);
