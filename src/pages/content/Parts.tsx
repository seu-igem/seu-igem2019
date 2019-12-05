import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
// import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRH3 from './comps/TRH3';
import TRp from './comps/TRp';
// import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

import './css/Parts.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
// import { Link } from './comps/Link';

const content = (<>
   <div className='parts-1'>
      <div className='parts-2'>
         <p>
            We have made characterization of a registered part <span className='num'>BBa_K398331</span>, <Link href='http://parts.igem.org/Part:BBa_K398331'>click to see our experiment result.</Link>
         </p>
         <p>
            Since the core work of our project is to degrade microcystin thoroughly, our parts are mainly related to this topic. We have created 3 basic parts and submitted them to the iGEM Registry of Standard Biological Parts. For more detailed information and characterization of these parts, use the links below to reach the Registry page of each BioBrick.
         </p>
         <p>
            <Link href='http://parts.igem.org/Part:BBa_K3195003'>Part 1: His-tagged Cathepsin B <span className='num'>BBa_K3195003</span></Link><br />
            This Cathepsin B from Branchiostoma belcheri tsingtauense[1] is originally a kind of hydrolase in lysosome.In our project,it has been used to biodegrade microcystin,a kind of biotoxin synthesized by cyanobacteria.
         </p>
         <p>
            <Link href='http://parts.igem.org/Part:BBa_K3195002'>Part 2: GST tagged carboxypeptidase Z/N <span className='num'>BBa_K3195002</span></Link><br />
            Carboxypeptidase is a class of exopeptidases that can specifically degrade a peptide from its C-terminal of and release free amino acids. In our project, we found Carboxypeptidase Z/N can decompose microcystin RR with another enzyme called subtilisin-like protease.
         </p>
         <p>
            <Link href='http://parts.igem.org/Part:BBa_K3195004'>Part 3: Trx-His-EK tagged subtilisin-like protease <span className='num'>BBa_K3195004</span></Link><br />
            Subtilisin-like protease is a kind of alcalase similar to subtilisin protease. In our project, it has been used to degrade microcystin with another enzyme called carboxypeptidase Z/N.
         </p>
         <p>
            It is worth mentioning that in addition to codon optimization, we also add the tag required for protein extraction to each protein, and use different tags in each part, which is not only for listing, but the results of the tag optimization to different size, expression characteristics and extraction methods of protein.
         </p>
      </div>
   </div>
</>);

export const body = {
   title: 'Parts',
   hasAside: false,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab Work', path: '/Experiments' },
      { text: 'Parts', path: '/Parts' },
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
