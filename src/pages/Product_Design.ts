import { DocPage } from './templates/DocPage';
import { lazy } from '@/util';
import { assets } from '@/assets-path.json';

export const Product_Design = new DocPage(
   {
      imgUrl: assets.cover.product2$jpg,
      tbimgUrl: assets.cover.tnProduct2$jpg,
      title: 'Product Design',
   },
   lazy(() => import('./content/Product_Design'))
);
