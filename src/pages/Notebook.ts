import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Notebook = new DocPage(
   {
      imgUrl: assets.cover.notebook$jpg,
      tbimgUrl: assets.cover.tnNotebook$jpg,
      title: 'Notebook',
   },
   lazy(() => import('./content/Notebook'))
);
