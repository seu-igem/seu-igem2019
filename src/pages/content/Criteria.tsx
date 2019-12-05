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
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
import { Link } from './comps/Link';
// import { Link } from './comps/Link';
import './css/cri.scss';

const content = (<>
   <div className='cri-1'>
      <div className='cri-2'>

         <p>
            In this page we list our achievements of our project and how they align with the medal criteria set by iGEM 2019.
         </p>
         <p>
            <b>Bronze Medal</b>
         </p>
         <DocOrderedList items={[
            <p>Registration and Giant Jamboree Attendance √</p>,
            <>
               <p>Competition Deliverables</p>
               <DocUnorderedList items={[
                  <p>Wiki √</p>,
                  <p>Poster √</p>,
                  <p>Presentation √</p>,
                  <p>Judging Form √</p>,
               ]} />
            </>,
            <p><Link href='/Attributions'>Attributions √</Link></p>,
            <p><Link href='/Description'>Project Inspiration and Description √</Link></p>,
            <p><Link href='/Parts'>Characterization √</Link></p>,
         ]} />

         <p>
            <b>Silver Medal</b>
         </p>
         <DocOrderedList items={[
            <p><Link href='/Parts'>Validated Part √</Link></p>,
            <p><Link href='/Collaborations'>Collaborations √</Link></p>,
            <p><Link href='/Human_Practices'>Human Practices √</Link></p>,
         ]} />

         <p>
            <b>Gold Medal</b>
         </p>
         <DocOrderedList items={[
            <p><Link href='/Human_Practices'>Integrated Human Practice √</Link></p>,
            <p><Link href='/Model'>Model Your Project √</Link></p>,
            <p><Link href='/Demonstrate'>Demostration of Your Work √</Link></p>,
         ]} />
      </div>
   </div>
</>);

export const body = {
   title: 'Criteria',
   hasAside: false,
   hasInfobar: true,
   hasRating: false,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Criteria', path: '/Criteria' },
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
