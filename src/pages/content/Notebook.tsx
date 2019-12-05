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
   <div style={{ display: 'flex', width: '100%', margin: 0, padding: 0, justifyContent: 'center' }}>
      <div style={{ width: '80%' }}>
         <object data={assets.pages.notebook$pdf} type='application/pdf' style={{ width: '100%', minHeight: '50em', background: 'grey' }}>
            <embed src={assets.pages.notebook$pdf} type='application/pdf' />
         </object>
      </div>
   </div>
</>);

export const body = {
   title: 'Notebook',
   hasAside: false,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab Work', path: '/Experiments' },
      { text: 'Notebook', path: '/Notebook' },
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
