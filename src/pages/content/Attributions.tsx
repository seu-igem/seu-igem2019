import React from 'react';

import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import { assets } from '../../assets-path.json';

import './css/Attributions.scss';

const content = (<>
   <div className='attr-1'>
      <div className='attr-2'>
         <TRp TRkey='665da97de4' style={{ gridColumn: '1 / span 2' }}>From the beginning of 2019, SEU-Nanjing-China have brand new members for this competition season. With the effort of two dedicated team leaders, we build a team consisting of 14 undergraduate students from different majors and grades. All the members in SEU-Nanjing-China devoted the best of themselves to our project. At the same time, we would have gone nowhere without the help from many other people from our school, other institutions and the society. We'd like to thank all those who have helped us over the season, not only for making iGEM possible but also for making it incredibly fun. We sincerely appreciate all the help!</TRp>

         <div className='grid-1'>
            <TRH2 TRkey='2ceefa15e7'>General support</TRH2>
            <TRp TRkey='69808816c4'>We deeply appreciate the effort of our PI, <b>Pro. Zuhong Lu</b>. His dedication towards helping us select the ideas from the brainstorm and give us supports on the project could not be more greatly appreciated. We’d love to thank <b>Chunpeng He</b>, our instructor, for supervising our lab techniques as well as aiding us in project design. We also want to thank <b>Ping Zhou</b>, Vice President of School of Biological Science and Medical Engineering, Southeast University, and <b>Xiaobing Shen</b>, deputy director of Academic Affairs Office of Southeast University, in charge of student innovation and entrepreneurship, for providing us with financial support and general advice. And we want to thank <b>Ruijing Zhang</b>, captain of SEU-Nanjing-China, and <b>Qing Sun</b>, vice-captain of our team, for their full-hearted devotion to the project, who are in main responsibilities of designing the experiments, making arrangements for all work and interacting with other iGEM teams.</TRp>
         </div>

         <div className='grid-2'>
            <TRH2 TRkey='c354e416de'>Lab Support</TRH2>
            <TRp TRkey='c59729bcd1'>We’d love to thank our PI, <b>Pro. Zuhong Lu</b> for offering us lab space, as well as guidance and support throughout the development of our project. We’d love to thank <b>Chunpeng He</b>, our instructor for managing the process of experiments. We’d like to extend our thanks to <b>Pro. Yuanjin Zhao</b> and <b>Pro. Fugen Wu</b> for giving us access to instrument and equipment necessary to our experiments. We’d like to thank <b>Jianxin Zhang</b> from Shanghai Novoprotein Technology Co., Ltd. for giving us technical advice on expression of recombinant protein and <b>Zongyao Qian</b> from School of Environment, Nanjing University for assisting us with HPLC for detection of microcystin. We also want to thank core members of our team, namely <b>Ruijing Zhang</b>, <b>Qing Sun</b>, <b>Jingyuan Ma</b>, <b>Yuhan Luo</b>, for their hard work in in design and implementation of the experiment. Last but not least, we’d love to thank <b>Yuhan Luo</b> for notebook recording and protocol writing and <b>Jingyuan Liu</b> for constructing our Biobricks by 3A assembly. </TRp>
         </div>

         <div className='grid-2'>
            <TRH2 TRkey='0d7e21ea11'>Software support</TRH2>
            <TRp TRkey='d93cdc2678'>We could not be more grateful to <b>Tingyu Han</b>, <b>Changwei Bi</b>, <b>Yixin Li</b> and other seniors in Lu’s group for providing help in bioinformatic analysis, including the sharing of data, the use of software and the provision of computing resources. We’d love to thank our team member <b>Kaihao Luan</b> for managing the process of sequence alignment and gene annotation. </TRp>
         </div>

         <div className='grid-1'>
            <TRH2 TRkey='c2cb38bfb1'>Modeling support</TRH2>
            <TRp TRkey='f8e9c1d4ca'>We’d love to thank our team members, <b>Baihui Shan</b>, <b>Jingyuan Liu</b> and <b>Gen Li</b> for implementation of 3D structure modeling of proteins. We’d love to thank <b>Qing Sun</b>, vice-captain of our team, for managing the process of modeling. And we deeply appreciate the help of <b>Jenny Zhong</b> from Beijing WeComput Technology Co., Ltd. for molecular docking.</TRp>
         </div>

         <div className='grid-1'>
            <TRH2 TRkey='059531844b'>Human Practices support</TRH2>
            <TRp TRkey='cd8aba9ab6'>We’d love to thank <b>Qing Sun</b>, vice-captain of our team, for managing the process of human practice. We deeply appreciate <b>Junyi Zhang</b>, Director of Biology Department of Wuxi environmental monitoring station, for providing vital connections and organizing connection events. We sincerely appreciate <b>Zhang Zhenghui</b>, deputy director of the cyanobacteria Control Office of Wuxi Water Bureau for interview and investigation. We’d also extend our sincere thanks to relevant people and staff in <b>Wuxi Delinhai Environmental Protection Technology Co., Ltd.</b> and <b>MetaBD Biotechnology Co., Ltd.</b> They shared general information and offered great help to us when looking for ways to implement our product into wastewater treatment plants. </TRp>
         </div>

         <div className='grid-2'>
            <TRH2 TRkey='1091fdeaa6'>Entrepreneurship support</TRH2>
            <TRp TRkey='60053dd183'>We’d like to thank our student leader <b>Ruijing Zhang</b> for completing business plan, promoting entrepreneurship of our project and facilitating the communication with experts and investors. We’d like to appreciate <b>Siyu Wu</b>, copartner of Nanjing Changlin Equity Investment Fund Center, who shared with us personal entrepreneurial experiences and gave us recommendations and suggestions on our business plan. We’d also extend our sincere thanks to <b>Entrepreneurship &amp; Practice Department of Youth League Committee, Southeast University</b> for expanding our startup network and giving us access to great insight from many entrepreneurs in different fields. </TRp>
         </div>

         <div className='grid-2' style={{ gridColumn: '1 / span 2' }}>
            <TRH2 TRkey='e1e8bc37d8'>Wiki support</TRH2>
            <TRp TRkey='322633f55d'>We’d like to thank our team member <b>Chengyu Fu</b> for building the wiki page of our team. And we’d like to thank <b>Jinghe Cui</b> for art design of our logo, poster and propaganda materials.</TRp>
         </div>
      </div>
   </div>
</>);

export const body = {
   title: 'Attributions',
   hasAside: false,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Team', path: '/Member' },
      { text: 'Attributions', path: '/Attributions' },
   ],
   editors: [
      {
         name: 'Qing Sun', hash: '#qing-sun',
         nameAbbr: 'QS', avatar: assets.avatars.QingSun32x32$jpg,
      },
   ],
   lastModified: 'October 17, 2019',
   content,
};
