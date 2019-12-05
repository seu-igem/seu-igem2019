import React from 'react';

import { Image as MsImage } from 'office-ui-fabric-react/lib/Image';

import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import { Link } from './comps/Link';
import { assets } from '../../assets-path.json';

import './css/PublicEngagement.scss';

const content = (<>
   <div className='pe-slogan' style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
         <MsImage shouldFadeIn src={assets.pages.PublicEngagement.slogan$png} styles={{
            image: { width: '100%', borderRadius: 10 },
         }} />
      </div>
   </div>

   <TRH2 prefix='I' TRkey='c1c9270d89'>Online survey</TRH2>

   <TRp TRkey='527c48ec25'>As a crucial part of Human Practice, we designed an online survey prudently. We listed 13 questions varying from education background, cyanobacteria problems and genetic modification (GM, also referred to as genetic engineering) technology. We have received 433 valid return until this report is writing. Based on both the facts of our program and the general situation of local society, we expect a comparatively ideal result guiding us in the practical perspective. <b>Also, we hope that our efforts can make positive contributions to the society.</b></TRp>
   <TRp TRkey='19e6fd69e7'>Among all the respondents, about 65% have bachelor degree or above, thus the result shows views from educated masses in a way. When it comes to the actual impact of cyanobacteria pollution on life, almost all the people who live in cyanobacteria pollution outbreak areas report a large or general impact. And 70% of all the replies prove the influence again —— while some who live far from outbreak areas also vote on the option ‘large or general impact’. In general, an absolute proportion of respondents confirm the huge impact of cyanobacteria pollution and its severity on a global scale. <b>Therefore, the adverse impact of cyanobacteria on residents’ routine life is obvious for most people living around the lake. There is a public urgency of solving harmful algae bloom in society.</b></TRp>

   <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', width: '75%' }}>
         <MsImage shouldFadeIn src={assets.pages.PublicEngagement.result1$jpg} styles={{
            image: { width: '100%', borderRadius: 10 },
         }} />
      </div>
   </div>
   <TRp TRkey='a1a9961072' style={{ marginBottom: 0, fontSize: '.9em' }}>
      Q2: Does your living area have cyanobacteria pollution outbreak?
      &nbsp;&nbsp;<span style={{ color: '#06f' }}>[YES/NO/NOT SURE]</span>
   </TRp>
   <TRp TRkey='771fd1494d' style={{ marginTop: 0, fontSize: '.9em' }}>
      Q3: Do you think cyanobacteria pollution has a big impact on your life?
      &nbsp;&nbsp;<span style={{ color: '#06f' }}>[Great impact/Ordinary impact/Little impact/Almost no effect]</span>
   </TRp>

   <TRp TRkey='f0e32d0eb7'>What’s also striking to note is that 37.88% people are not sure whether their areas has cyanobacteria pollution outbreak or not and 44.81% are not concerned with the problem at all, which shows the absence of propaganda and education in a way. Actually, according to Wuxi Blue Algae Governance Office, more than 60% cyanobacteria in Wuxi are from other places. Although some people don’t realize the impact of cyanobacteria pollution, their areas’ water eutrophication leads to other places’ pollution in a certain degree. <b>So, it is necessary for us to go into communities and hold popular science activities, especially for children. It is very important for everyone to realize the damage of water eutrophication and take measurements to help build a clean waterbody.</b></TRp>
   <TRp TRkey='27637d9f27'>As if to confirm this, only 14.09% people are satisfied with the related propaganda, others hold relatively a negative response. What’s worse, 62.82% of the respondents say that they don’t know governance measures. We have to admit the existence of two-way blind zone between government and masses. While some people have misunderstandings in governments’ actions, some even criticize measures taken for cyanobacteria pollution treatment. <b>We need private organizations to communicate spontaneously. As a college student team, we promote it actively, publicizing related knowledge in primary schools, interviewing relevant departments and investigating views from friends &amp; relatives. We hope to make a common view of the importance of algae bloom control in society and work together to solve algae pollution.</b></TRp>
   <TRp TRkey='db8876e566'>Among all the causes of cyanobacteria outbreak, water eutrophication is the most important one (about 40% people choose the correct option). Domestic sewage is enough to cause cyanobacteria to erupt, <b>thus cyanobacteria pollution is almost inevitable in residents enriched areas. Now that it’s inevitable, just make use of it. We turn our attention to the GM technology.</b></TRp>
   <TRp TRkey='01dc4909f9'>While only 17.09% people know GM technology well, others don’t know much. In the light of our survey, most people hold a conservative attitude, some even show resistance, which comes from ignorance. <b>This illustrates the importance of popular science work again.</b> Because of the extensive media coverage, a lot of respondents know the controversial fields more, such as gene therapy, biopharmaceuticals and genetically modified crops.</TRp>

   <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', width: '75%' }}>
         <MsImage shouldFadeIn src={assets.pages.PublicEngagement.result2$jpg} styles={{
            image: { width: '100%', borderRadius: 10 },
         }} />
      </div>
   </div>

   <TRp TRkey='0566a31947' style={{ marginBottom: 0, fontSize: '.9em' }}>
      Q10: How much do you know about GM technology?
      &nbsp;&nbsp;<span style={{ color: '#06f' }}>[Very well/ Comparatively well/ Ordinary Not much/ Not at all]</span>
   </TRp>
   <TRp TRkey='8a5346ccaf' style={{ marginTop: 0, fontSize: '.9em' }}>
      Q11: What is your attitude towards GM technology?
      &nbsp;&nbsp;<span style={{ color: '#06f' }}>[List in the figure]</span>
   </TRp>

   <TRp TRkey='37053c6fdb'><b>With the promotion of popular science activities, we also try our best to avoid public concern and bioethics Risk. In order to avoid the risk of genetic modification, we adjust our program, focusing on processing salvaged algae rather than put genetically modified products directly into the natural environment. We lay emphasis on expressing massive degrading enzymes by genetic engineering methods, producing only small molecules from cyanobacteria post-degradation products. It’s not only obeying the law regulations, but also catering to people’s cautious attitude.</b></TRp>
   <TRp TRkey='9c7d33d153'>For full contents and results of the questionnaire, please refer to <Link target='_blank' href={assets.pages.PublicEngagement.iGEMOnlineSurvey$pdf}>this PDF document</Link>.</TRp>


   <TRH2 prefix='II' TRkey='f71941c1c6'>General outreach: from lab to community</TRH2>
   <TRp TRkey='5d692e2adc'>Our project aims to achieve the complete digestion of cyanobacteria which can benefit the whole society in a greater level due to the severe hazard of blue-green algae contamination nowadays. So, on Monday (2019.09.02), we took half a day off to go beyond the laboratory and wanted to inform people of the significance of what we are doing and the basic knowledge of synthetic biology and the competition, iGEM, itself. Where we went includes both residential area and commercial streets, the near-by primary school and parks were also in our visit plan.</TRp>
   <TRp TRkey='db1258de32'>We held a poster board that displays our cartoon character, algae terminator, and another one designed like a frame so people can take photos with it. People from all walks of life had listened to us attentively when we were talking from the global environmental issues like the urgency of lake eutrophication to things happening in our daily life such as trash classification that went into effect nationwide recently. Among them, one of the elders said that his hometown had witnessed the serious pollution resulted by harmful algal blooms, and he hoped our work could do some contribution to the problem. There’s also a couple that just graduated from university and was travelling in Nanjing these days, and we tried to impart to them the processes involved in the digestion of cyanobacteria which are cell walls breaking, tissue digestion, oxidation, sugar digestion and algal toxin degradation. The boy who majored in chemistry said the experiment we’re working on made him recall the days he spent in college when he buried his head in the lab all day long, they both encouraged us to keep going and don’t give up.</TRp>
   <TRp TRkey='4fa62b332f'>We believe that if such activities can be held in a regular basis, it is certain that public awareness of the social interest will be raised and we are able to achieve the ultimate goal of protecting Earth with our own strength.</TRp>
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
      <MsImage
         shouldFadeIn
         styles={{
            root: {
               width: '80%',
               borderRadius: 6,
               boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
            },
            image: {
               width: '100%',
            },
         }}
         src={assets.pages.PublicEngagement.img1$jpg}
      />
   </div>

   <TRH2 prefix='III' TRkey='d9554322f9'>Teaching children about lab security</TRH2>
   <TRp TRkey='6f87557b19'>Upon opening the kit from the iGEM organization, we found a postcard about lab security. In the process of brainstorming, a team member, who is enthusiastic about charity activities on our team, proposes to go to the activity center of the nearby community, Chenxianjie Street Community, in order to promote the knowledge related to experiment safety through games and interaction. This also corresponds to the purpose of human practice, how world affects us and how we affect the world. In order to make our lesson lively and attractive, we prepared some cards and brands with interesting pictures. We hope we can make them interested in science and experiment.</TRp>
   <TRp TRkey='b724615d8f'>The teachers gave us a warm reception and introduced us to the children. The children were playing games at the time of our arrival, but when the curious children saw the brands we held, they were immediately attracted. We had hardly finished our introduction when they scrambled to ask about the pictures on the brands. So we started a game first to get all of them involved. We showed them cards with pictures about lab operation, and asked them to point out which ones could be wrong. Each of them rushed to answer and did not want to lag behind. And we were surprised that they can point out most of the wrong operations quickly. The children being focused, we continued to start more detailed teaching. We introduced what iGEM is, what our project is about and more knowledge on lab security. They were so concentrated that they kept applauding after almost each of our sentence. When we saw their brilliant smiles, our photographs taken after the lesson, we knew that this lesson and our effort were worthwhile.</TRp>
   <TRp TRkey='95c1eaf31b'>In the process of conversation, unlike what we have imagined, children have a lot of opinions about what we express, which also shows that today's children are more willing to understand the outside world. It also makes us believe that the world has influenced us, and we have influenced young people in various ways, and they will influence the world in their own way. Through our efforts, more people can be involved and the world can be better.</TRp>
   <TRp TRkey='5abc133963'>We all think this kind of activity is meaningful for science. What contribution in the field of science we can make currently is limited, but in the way of spreading the spirit of science, the possibility we make is unlimited. No one knows what achievements the children in that room can acquire when they grow up. As the saying goes, ‘A butterfly dancing in the wind in Brazil is likely to cause a tornado in Texas in the United States.’</TRp>

   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
      <MsImage
         shouldFadeIn
         styles={{
            root: {
               width: '80%',
               borderRadius: 6,
               boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
            },
            image: {
               width: '100%',
            },
         }}
         src={assets.pages.PublicEngagement.img2$jpg}
      />
   </div>


   <TRH2 prefix='IV' TRkey='ed84e27407'>Concerning about our campus</TRH2>
   <TRp TRkey='c2fd6e6fc6'>The frequent outbreak of cyanobacteria has become a severe problem in the last few years. In the water environment around us, the pollution caused by the algae outbreak has become exceedingly serious. As for an IGEMer, we ought to care for the environment we live in. Also, we hope to change the present worrying situation of algae outbreak through our hard work. Take Jiulonghu Lake, the symbolic landscape of our campus, for example. In recent years, when the temperature rises and the organic materials accumulate in summer, a large number of algae will appear on the surface of the lake, which not only affects the beauty of the campus environment, but also troubles the lake cleaners. Some of them suggest that due to small size and large quantity, algae are too difficult to clear. Although relevant departments in school have taken almost all kinds of measures to control the propagation of cyanobacteria, the situation is still not optimistic. So, our school hoped to reduce algae pollution in Jiulonghu Lake in a more scientific and reasonable way. In order to prevent the outbreak of the algae in Jiulonghu Lake, we communicated with the manager and provided our special algae-controlling methods in this project. Besides, we mentioned some ideas on practical prevention operations. After the conversation, we were encouraged and determined to try our best to strive for a clean water environment in Jiulonghu Lake.</TRp>
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
      <MsImage
         shouldFadeIn
         styles={{
            root: {
               width: '80%',
               borderRadius: 6,
               boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
            },
            image: {
               width: '100%',
            },
         }}
         src={assets.pages.PublicEngagement.img3$jpg}
      />
   </div>


</>);

export const body = {
   title: 'Public Engagement',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Practices', path: '/Human_Practices' },
      { text: 'Public Engagement', path: '/Public_Engagement' },
   ],
   editors: [
      {
         name: 'Qing Sun', hash: '#qing-sun',
         nameAbbr: 'QS', avatar: assets.avatars.QingSun32x32$jpg,
      },
   ],
   lastModified: 'October 19, 2019',
   content,
};

