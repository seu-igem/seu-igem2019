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
import { DocUnorderedList } from './comps/DocList';
import { Link } from './comps/Link';
// import { Link } from './comps/Link';

const content = (<>
   <TRp TRkey='053df46773' style={{ fontSize: '1.6em', paddingLeft: '.2em', marginBottom: '.5em' }}>Collaboration with iGEM team SEU of open track</TRp>
   <TRp TRkey='2658bb444e'>Bounce around biology ideas with information science: We believe that interdisciplinary always brings new ideas and inspirations. The way connecting two disciplines also can expose the similarities between two fields and arouse us new stands to think and solve problems. Therefore, we contact with an iGEM team of open track - SEU.</TRp>
   <TRH2 TRkey='6842ddfe4b'>Meetup</TRH2>
   <TRp TRkey='0066c2dba5'>We hold a meetup in the main conference room of Southeast University Wireless Valley in May. SEU team has been devoted to building a black box with DNA components that can realize the regulation of input and output. And we helped to estimate the feasibility of DNA displacement reaction applied to computation, by which way we searched for relative literature, analyzed the reaction rate and evaluated the workload of operation in experiments. Correspondingly, team SEU gave us some advice on modeling, including introducing the biological big data based on the biological open-source databases to conduct comparison and screening.</TRp>

   <ImageWithShadow width='70%' src={assets.pages.HumanPractices.colCover$jpg} />
   <TRH2 TRkey='d66faed03c'>Resource sharing</TRH2>

   <TRp TRkey='50f7be4dff'>Sharing resource enables us to integrate our strengths: We two teams have distinguished sources as we are familiar with different professional fields and major in different specialties. It is also very convenient for us to share resource between each other since we are close in location.</TRp>

   <DocUnorderedList items={[
      <TRp TRkey='373d02125f'>SEU team support us in computing resources - the access to severs from school of information science, which produced a marked effect on the annotation of phylogenetic tree, partial collation of high-throughput sequencing results and the comparison of structures between protein molecules. They also helped our information group by providing training in python skills and Git hub codes recommendation.</TRp>,
      <TRp TRkey='47e15fea4e'>In return, we helped them to optimize the experimental scheme from the perspective of molecular biology. First, we helped to predict the best reaction condition for DNA replacement. Then we additionally set up a series of environmental gradients and control groups for them to make the experiment results more convincing. In last we offer to evaluate the computational element efficiency from the perspective of bioreaction kinetics. We also shared the information of CCiC (Conference of China iGEMer Community) for them.</TRp>,
   ]} />

   <TRH2 TRkey='846f03718f'>Troubleshoot</TRH2>
   <TRp TRkey='14dac8990b'>After a long term of on-extensive cooperation, we helped troubleshoot each other's projects. SEU team corrected the several bugs in our website and software use. We pointed out some control group experiment, for example, the reaction stability at different temperatures, could be done to perfect the result.</TRp>


   <TRH2 TRkey='e7c36f93df'>Other collaborations</TRH2>
   <TRH3 TRkey='8894047cfb'>Show our project and communicate with other teams in CCiC</TRH3>
   <TRp TRkey='327613d086'>We participated in CCiC, Conference of China iGEMer Community, which is an annual meet up in China held by Chinese iGEM teams in August. At the conference, we make a presentation of our project to other teams and communicate with some teams who share the same interesting.</TRp>

   <ImageWithShadow width='70%' src={assets.pages.HumanPractices.ccic1$jpg} />

   <TRp TRkey='8eaae1cc80'>We also get some really impressive ideas and advice from expert judges and other teams. For example, CCiC officials are very interested in the degradation of algal toxins and we have added a lot of experiment work in this part such as the design of degradation matrix and the molecule docking analysis to perfect our characterization of algal toxin degradation.</TRp>

   <TRH3 TRkey='8894047cfb'>Share protocol with iGEM team XMU-China</TRH3>

   <TRp TRkey='6c65684e38'>Especially, students from Xiamen University team were attracted to the expression of prokaryotic genes in eukaryotic organisms and asked about the methods of operation in detail. We shared some major issues and considerations related to it and shared a protocol on common problems and solutions of heterologously expressed genes in <Link href={assets.pages.dcgj$pdf}>Escherichia coli</Link>.</TRp>
</>);

export const body = {
   title: 'Collaborations',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Team', path: '/Member' },
      { text: 'Collaborations', path: '/Collaborations' },
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
