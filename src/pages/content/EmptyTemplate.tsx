import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
// import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRH3 from './comps/TRH3';
import TRp from './comps/TRp';
// import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

// import './css/Empty.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
// import { Link } from './comps/Link';

const content = (<>

</>);

export const body = {
   title: 'Empty',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Empty', path: '/Empty' },
      { text: 'Empty', path: '/Empty' },
   ],
   editors: [
      {
         name: 'Chengyu Fu', hash: '#chengyu-fu',
         nameAbbr: 'CF', avatar: assets.avatars.ChengyuFu32x32$png,
      },
   ],
   lastModified: 'October 19, 2019',
   content,
};
