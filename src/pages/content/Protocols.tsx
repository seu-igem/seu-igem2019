import React from 'react';

import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import PdfList from './comps/PdfList';

import { assets } from '../../assets-path.json';

export const body = {
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Project', path: '/Description' },
      { text: 'Protocols', path: '/Protocols' },
   ],
   editors: [
      {
         name: 'Yuhan Luo', hash: '#yuhan-luo',
         nameAbbr: 'YL', avatar: assets.avatars.YuhanLuo32x32$jpg,
      },
   ],
   lastModified: 'September 25, 2019',
   content: (<>
      <TRH2 TRkey='abcdefghij'>I. Molecular cloning and genetic engineering</TRH2>
      <PdfList
         items={[
            {
               name: '3A Assembly',
               author: 'Yuhan Luo',
               size: 49,
            },
            {
               name: 'DNA Kit Plate',
               author: 'Yuhan Luo',
               size: 31,
            },
            {
               name: 'Gel electrophoresis',
               author: 'Yuhan Luo',
               size: 34,
            },
            {
               name: 'Glycerol stocks',
               author: 'Yuhan Luo',
               size: 27,
            },
            {
               name: 'LB media',
               author: 'Yuhan Luo',
               size: 38,
            },
            {
               name: 'Ligation',
               author: 'Yuhan Luo',
               size: 28,
            },
            {
               name: 'Restriction Digest',
               author: 'Yuhan Luo',
               size: 35,
            },
            {
               name: 'Transformation',
               author: 'Yuhan Luo',
               size: 45,
            },
         ]}
      />

   </>),
};
