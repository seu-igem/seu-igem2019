import React from 'react';

import { Image as MsImage, ImageFit } from 'office-ui-fabric-react/lib/Image';

import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
// import { Link } from './comps/Link';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';

// import './css/Safety.scss';
// import TRH3 from './comps/TRH3';

const content = (<>
   <TRH2 TRkey='7a0fa2042c'>Overview</TRH2>
   <TRp TRkey='d7605320af'>The iGEM team SEU-Nanjing-China maintains strict safety standards all the way. We want to carry out a project that is safe for the environment, society and ourselves. During our processing of blue-green algae, we don’t release any genetically modified organisms or their product directly into the environment. We don’t introduce new proteins into the nature, too. The enzymes expressed by E.coli we used to degrade the salvaged algae are screened from lancelet endo-digestive proteins. As these enzymes originally are used to digest blue-green algae by lancelet’s cecum epithelial cells, we can directly degrade algae into totally nontoxic small molecules (mainly small peptide). Furthermore, these degradation products are ideal raw materials of animal feed. Before entering the market, all of our product will take a strict quarantine procedure. In our safety form, we discuss safety in detail based on iGEM standards and have got approval by iGEM Safety and Security Committee.</TRp>
   <TRH2 TRkey='fb5a57fc98'>Product Application Safety</TRH2>
   <TRp TRkey='fd00358e4f'>Our products are animal feed raw material degraded from blue-green algae. Algae will be degraded into amino acids, oligopeptides and polysaccharides. All the harmful substances such as algae toxins are effectively degraded by using highly purified and reasonable protein reagents.</TRp>

   <ImageWithShadow noShadow src={assets.pages.Safety.hplc$png} width='70%' noRadius
      caption='Mass spectrometry analysis of algae products degraded by mixed enzymes with the ratio of 1:500 (enzyme:algae) after 6 h' />

   <TRp TRkey='c6cbdde2dc'>The proteins we use are naturally existing, screened from lancelet endo-digestive proteome, and without any genetic pollution risk. The gene transformation procedures are highly mature and safe. The proteins can degrade algae salvaged into nontoxic nutrients, which will be examined by a strict quarantine procedure. </TRp>
   <TRp TRkey='1fd9aaf3d5'>In the future these proteins may also be sold as enzyme reagent. They are made by mature engineering technology and will be sold to environmental monitoring department and laboratory that have passed a rigorous qualification screening. The subsequent use of these enzymes are also strictly limited to R&D use and salvaged algae processing.</TRp>
   <TRp TRkey='f707c66d4d'>We don’t release any GM organism and product into the environment.</TRp>
   <TRp TRkey='dfd147c3cc'>Enzymes are stored at ultra-low temperatures, and lose activity at room temperature quickly. Otherwise, they are highly specialized and need combined with each other in exact ratio to be functional. Therefore, even if they leak into ecosystem there will be no ecological risk.</TRp>
   <TRH2 TRkey='714b6b39f7'>Lab Work Safety</TRH2>
   <TRp TRkey='891265584e'>All of the experiment group have received safety training and security training systematically. We have taken the biomedical experiment course taught by Jinke Wang, who is a professor of State Key Laboratory of Bioelectronics for more than 56 periods. Under the instruction of Professor Wang, we have received systematically training on basic laboratory operations of molecular biology and handling safety accidents.</TRp>
   <TRp TRkey='5035fb6bff'>In addition to the course, all personnel involved in the experiment were systematically trained and supervised by a specialized laboratory instructor during the whole process of the experiment.</TRp>
   <TRp TRkey='3437a9940c'>We also have three Lab techs. They are responsible for the safety and security of biology labs. They are in charge of the management and registration of all the experimental equipment, supervising our use of them to prevent accidents.</TRp>
   <TRp TRkey='ea044adee3'>They have a wealth of experience and expertise and are very familiar with our project. The space in which we work is very safe. We routinely (for example, before and after each experiment) disinfect or treat consumables such as used instruments, centrifuge tubes, aseptic benches etc. Our laboratory is also equipped with professional operators dealing with waste biological products, they will properly handle all the waste.</TRp>
   <TRp TRkey='5caadae62c'>All of our experiments are under standard monitoring. We don’t carry out any of the activities not on the Whitelist. The biosafety Level of our work space is level 1 that means low risk. The space in which we work is very safe.</TRp>

   <ImageWithShadow src={assets.pages.Safety.fig1$jpg} width='70%' />


   <TRH2 TRkey='0b6ec414dc'>Organism Safety</TRH2>
   <TRp TRkey='91b9568ac4'>The E.coli we use is non-pathogenic. Escherichia coli is a gram-negative bacterium commonly used in research laboratories, due to its rapid growth rate, simple nutritional requirements, well-established genetics and genomic sequence. For our experiments we used the strains BL21 and DH5α. All culture medium with bacteria are processed properly to prevent the potential biological pollution. We don’t use any organism or parts not on the White List. If E.coli used in our experiments is accidentally leaked out, they will disappear in few hours because of the lack of proper living conditions. All the plasmids are harmless and none of our parts would raise any safety issue according to the current expertise. We don’t use any parts or organisms obtained from outside the lab or regular suppliers. We don’t conduct any research with animals. And most importantly we don’t release any organism or product derived from our project.</TRp>
   <TRp TRkey='6861124019'>Our team have carefully studied iGEM's safety and security rules and policies. Throughout the experiment, we strictly obeyed iGEM's safety and security rules and policies. During the project, we have maintained an active and effective communication with the iGEM Safety and Security Committee. It’s a great pleasure for us to have the reviewer Kathryn Millett’s approval and praise (<Link href={assets.pages.Safety.ReiGEMsafetyandsecurityformclarificationneeded$pdf}>View our emails</Link>)! </TRp>
</>);

export const body = {
   title: 'Safety',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab Work', path: '/' },
      { text: 'Safety', path: '/Safety' },
   ],
   editors: [
      {
         name: 'Qing Sun', hash: '#qing-sun',
         nameAbbr: 'QS', avatar: assets.avatars.QingSun32x32$jpg,
      },
   ],
   lastModified: 'October 8, 2019',
   content,
};

