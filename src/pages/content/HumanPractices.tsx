import React from 'react';

import { Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

import TRH2 from './comps/TRH2';
import TRH3 from './comps/TRH3';
import TRp from './comps/TRp';
import { Link } from './comps/Link';
import { assets } from '../../assets-path.json';

import './css/HumanPractices.scss';
import { Subpage } from './comps/Subpage';
import { Parafolding } from './comps/Parafolding';


const Overview = (<>
   <TRH2 TRkey='0e0503c71d'>
      Overview
   </TRH2>
   <TRp TRkey='34ec894f58'>Cyanobacteria bloom pollution is a problem troubling the globe. As iGEMers, we decided to devote ourselves to this from focusing on situations around us and provide practical solutions to local problems with our wisdom and efforts. Taihu Lake, located in southern Jiangsu Province, is a crucial drinking water source area for the cities around. Wuxi and other cities around Taihu Lake have been making joint efforts to monitor its ecosystem as well as getting rid of pollution in the whole area since a serious algal bloom in 2007. We want to contribute to the work by combining <b>Algae Terminator</b> with existing solutions. We have therefore consulted with experts within Government Departments, Environmental Protection Centers, plants, companies, commerce and academia. Furthermore, we have gotten valuable feedback from other creatives from the field by joining the new open data platform Algae-Hub (<Link href='https://www.algaehub.cn/'>www.algaehub.cn</Link>) and CCiC (Conference of China iGEMer Community).</TRp>
   <TRp TRkey='b880a4d847'>Here we got questions about our project, allowing us to create an early user connection to adjust the feasibility and impact of our solution. The methods used today within cyanobacteria treatment were discussed in great details with experts, but also future treatment systems and the practicability and sustainability of our product. The key in our work was defined by talking to people within the community providing transparency and open discussions. The result of our meetings and people that crossed our path became <b>Algae Terminator</b> - a reflection of integrated influences and the community.</TRp>
</>);


const Public_concern = (<>
   <TRH2 TRkey='6a328b3cc0'>
      Public concern is the promotor of our brainstorm
   </TRH2>

   <TRp TRkey='f34e9e95c3'>Before we launch our project, it is of great necessity to understand the needs and current situation of the society, so as to ensure that the project we choose is meaningful, and the problems we want to solve are real, serious and urgent. So, believing that public concern is the promotor of our brainstorm, we designed an online survey prudently. We listed 13 questions varying from education background, cyanobacteria problems and genetic modification (GM, also referred to as genetic engineering) technology. We have received 433 valid return until this report is writing. Based on both the facts of our program and the general situation of local society, we expect a comparatively ideal result guiding us in the practical perspective.</TRp>

   <TRH3 TRkey='5b90fdea69' style={{ marginLeft: '2em' }}>Does algae bloom badly affect people’s life?</TRH3>
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

   <TRp TRkey='fb45b41bb8'>Among all the respondents, about 65% have bachelor degree or above, thus the result shows views from educated masses in a way. When it comes to the actual impact of cyanobacteria pollution on life, almost all the people who live in cyanobacteria pollution outbreak areas report a large or general impact. And 70% of all the replies prove the influence again - while some who live far from outbreak areas also vote on the option ‘large or general impact’. In general, an absolute proportion of respondents confirm the huge impact of cyanobacteria pollution and its severity on a global scale. Therefore, the adverse impact of cyanobacteria on residents’ routine life is obvious for most people living around the lake. There is a public urgency of solving harmful algae bloom in society.</TRp>


   <TRH3 TRkey='99e414279a' style={{ marginLeft: '2em' }}>What is people’s attitude towards genetic engineering?</TRH3>
   <TRp TRkey='7956fd5fe2'>Among all the causes of cyanobacteria outbreak, water eutrophication is the most important one (about 40% people choose the correct option). Domestic sewage is enough to cause cyanobacteria to erupt, thus cyanobacteria pollution is almost inevitable in residents enriched areas. Now that it’s inevitable, just make use of it. We turn our attention to the genetic modification (GM, also referred to as genetic engineering) technology.</TRp>

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

   <TRp TRkey='31c8338d34'>While only 17.09% people know GM technology well, others don’t know much. In the light of our survey, most people hold a conservative attitude, some even show resistance, which comes from ignorance. This illustrates the importance of popular science work again. Because of the extensive media coverage, a lot of respondents know the controversial fields more, such as gene therapy, biopharmaceuticals and genetically modified crops.</TRp>
   <TRp TRkey='5e46a2f4d2'>With the promotion of popular science activities, we also try our best to avoid public concern and bioethics Risk. In order to avoid the risk of genetic modification, we adjust our program, focusing on processing salvaged algae rather than put genetically modified products directly into the natural environment. We lay emphasis on expressing massive degrading enzymes by genetic engineering methods, producing only small molecules from cyanobacteria post-degradation products. It’s not only obeying the law regulations, but also catering to people’s cautious attitude.</TRp>

   <TRp TRkey='9c7d33d153'>For full contents and results of the questionnaire, please refer to <Link target='_blank' href={assets.pages.PublicEngagement.iGEMOnlineSurvey$pdf}>this PDF document</Link>.</TRp>
</>);


const Expert_opinion = (<>
   <TRH2 TRkey='3d08b6b7e0'>
      Expert opinion is the catalyst of our project
   </TRH2>
   <TRp TRkey='b11a6fa788'>After determining the theme and technical route of our project, we consulted experts from different fields. Their opinions and suggestions are the catalyst of our project, which give us great confidence and inspire us to make our ideas come true. So, what do experts think of Algae Terminator? Here is a character cloud made of experts’ words.</TRp>
   {/* {expertsWord} */}

   <div className='hp-ciyun' style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
         <MsImage shouldFadeIn src={assets.pages.HumanPractices.ciyun$png} styles={{
            image: { width: '100%' },
         }} />
      </div>
   </div>

   <Pivot>
      <PivotItem headerText='Dr. Jianhong Li'>
         <div className='hp-expert'>
            <div>
               <p>Dr. Jianhong Li, Professor of School of Life Sciences, Nanjing Normal University</p>
               <TRH3 TRkey='9b0126cacc'>Why did we approach him/her?</TRH3>
               <MsImage shouldFadeIn src={assets.pages.HumanPractices.expLijianhong$jpg} />
               <TRp TRkey='b6ff276dbf'>Dr. Jianhong Li is Professor of School of Life Sciences and his main research field is microalgae and water environment. We met with him to learn about the physiology and ecology of microalgae in aquatic ecosystem, especially the toxic and harmful cyanobacteria that form water blooms, and to explore the occurrence law of water blooms, so as to provide theoretical basis for the control of toxic cyanobacteria.</TRp>
            </div>
            <TRH3 TRkey='ab4394e0a1'>What did we learn?</TRH3>
            <TRp TRkey='5ef51e261a'>Cyanobacteria is a kind of microorganism with strong proliferation and good adaptable ability, and how to deal with and utilize their cells is a hotspot issue of current scientific community. Making recombinant enzymes developed from natural creatures, amphioxus to degrade algal toxins is very impressive and promising.</TRp>
         </div>
      </PivotItem>
      <PivotItem headerText='Dr. Renhui Li'>
         <div className='hp-expert'>
            <div>
               <p>Dr. Renhui Li, Director of Algae Research Center of Institute of Hydrobiology, Chinese Academy of Sciences</p>
               <TRH3 TRkey='9b0126cacc'>Why did we approach him/her?</TRH3>
               <MsImage shouldFadeIn src={assets.pages.HumanPractices.expLirenhui$jpg} />
               <TRp TRkey='4074813ec0'>Professor Renhui Li is an expert in aquatic biology. His research fields include eutrophication, toxic cyanobacteria blooms and odor of algae. He has chaired and participated in a number of national projects, including ecological restoration and cyanobacterial bloom control. We consulted him on the feasibility and difficulties of using biotechnology to solve the problem of algal blooms, and he affirmed our thinking mode.</TRp>
            </div>
            <TRH3 TRkey='ab4394e0a1'>What did we learn?</TRH3>
            <TRp TRkey='76cb9ebf2f'>Controlling of cyanobacteria bloom in globe has been a long-term and continuous systematic project. With the progress of China's economy, the outbreak of cyanobacteria bloom has increasingly become a national problem. Instead of introducing exotic genes into existing water bodies, The SEU-Nanjing-China team's plan is to stimulate cyanobacterial fishing by exploiting cyanobacterial resources, which is a major innovation in the field of biotechnology to solve algal blooms.</TRp>
         </div>

      </PivotItem>
      <PivotItem headerText='Dr. Gongliang Yu'>
         <div className='hp-expert'>
            <div>
               <p>Dr. Gongliang Yu, Associate Researcher of Institute of Hydrobiology, Chinese Academy of Sciences</p>
               <TRH3 TRkey='9b0126cacc'>Why did we approach him/her?</TRH3>
               <MsImage shouldFadeIn src={assets.pages.HumanPractices.expYugongliang$jpg} />
               <TRp TRkey='72005ddf67'>Professor Gongliang Yu focuses on the study of taxonomy and biology of cyanobacteria, as well as remote sensing monitoring of cyanobacteria and water environment. We met up with him to learn more about the technology of satellite remote sensing and UAV hyperspectral remote sensing to control the outbreak of cyanobacteria, which would help us better understand the underlying factors and problems to consider.</TRp>
            </div>
            <TRH3 TRkey='ab4394e0a1'>What did we learn?</TRH3>
            <TRp TRkey='9c121f4f9d'>The complex species, outbreak mechanism and interaction with water environment of algae make cyanobacteria bloom control a challenge all over the world. The SEU-Nanjing-China team is trying to develop cyanobacteria resources through reverse thinking, which is a very encouraging attempt. If combined with remote sensing monitoring technology of water environment, such as UAV remote sensing technology, and dynamically track the source of cyanobacteria outbreak, it will play a greater role in promoting the control of algae bloom.</TRp>
         </div>

      </PivotItem>
      <PivotItem headerText='Dr. Tao Li'>
         <div className='hp-expert'>
            <div>
               <p>Dr. Tao Li, Chief Director of International Water Association (IWA), Greater China</p>
               <TRH3 TRkey='9b0126cacc'>Why did we approach him/her?</TRH3>
               <MsImage shouldFadeIn src={assets.pages.HumanPractices.expLitao$jpg} />
               <TRp TRkey='c6d7b40d0b'>Dr. Tao Li is Chief Director of International Water Association (IWA), Greater China and has been a project consultant for WHO and the Asian Development Bank. In order to alleviate the current sewage treatment problems in the process of urbanization, it is important to study treatment and reuse of urban sewage. We discussed with Dr. Tao Li about the design, operation and energy saving of large-scale sewage treatment plants, and the removal and recovery of nutrients from sewage.</TRp>
            </div>
            <TRH3 TRkey='ab4394e0a1'>What did we learn?</TRH3>
            <TRp TRkey='125c1fd7ee'>How to treat wastewater containing algae is an important and interesting topic in the field of water treatment. It is important and commendable to conduct a full preliminary research on the project and take the possibility of combining with wastewater treatment equipment for large-scale application into consideration from the very beginning. </TRp>
         </div>

      </PivotItem>
      <PivotItem headerText='Mr. Siyu Wu'>
         <div className='hp-expert'>
            <div>
               <p>Mr. Siyu Wu, Youth entrepreneurship mentor</p>
               <TRH3 TRkey='9b0126cacc'>Why did we approach him/her?</TRH3>
               <MsImage shouldFadeIn src={assets.pages.HumanPractices.expWusiyu$jpg} />
               <TRp TRkey='d7138fd88f'>As the founder and partner of the investment company, Siyu Wu has abundant practical experience in entrepreneurship. At the same time, he also serves as an entrepreneurship mentor to provide advice and guidance to young teams. Therefore, we consult him from the point of view of product design and business model, hoping to get constructive suggestions.</TRp>
            </div>
            <TRH3 TRkey='ab4394e0a1'>What did we learn?</TRH3>
            <TRp TRkey='1648ae7139'>One of the most important issues in Entrepreneurship is to have a clear business model with a closed loop and then have sustainable development, which means companies do not need continuous social "blood transfusion" to maintain their operation. As an environmental protection project, Cyanobacteria Terminator has a solid foundation and a bright future based on market research and process design in addition to the research and development work of the project itself. It would be a blue sea if cyanobacteria resources were really exploited worldwide and entered the grain and agricultural market as feed proteins.</TRp>
         </div>
      </PivotItem>
   </Pivot>
</>);


const We_visited = (<>
   <TRH2 TRkey='b70389687b'>We visited and got valuable feedback from...</TRH2>
   <Subpage
      style={{ marginLeft: '2em', marginRight: '2em' }}
      items={[
         {
            cover: {
               src: assets.pages.HumanPractices.governmentCover$jpg,
            },
            h1: 'Government',
            h2: 'Cyanobacteria Control Office of Wuxi Water Bureau',
            content: <div style={{ width: '100%' }}>
               <TRp TRkey='045bf11b34'>In order to understand the former progress and ideas of Wuxi Municipal Government on the control of cyanobacteria pollution in Taihu Lake Basin, we interviewed Zhang Zhenghui, deputy director of the cyanobacteria Control Office of Wuxi Water Bureau. During the interview, Director Zhang introduced to us the history and achievements of cyanobacteria control in Wuxi City, the way and scale of cyanobacteria salvage, the methods of follow-up treatment as well as the attitude and expectation of innovative treatment and utilization prospects, which made the project team have a more concrete and realistic understanding of the demand and prospects for the future engineering application of our project in the control of cyanobacteria pollution.</TRp>
               <TRp TRkey='7142e32276'>Wuxi Water Bureau is located at 288 Canal East Road, Wuxi City. We arrived at Zhang Zhenghui's office at 9:30 a.m. After a brief greetings and visits, we began our interview.</TRp>
               <TRp TRkey='70e3e897a7'>During the interview, we collected the following key information:</TRp>
               <TRp TRkey='d893a4cb15'>Since 2007, Wuxi Municipal Government has invested a lot of manpower and funds into the treatment of cyanobacteria pollution. Because of the wind direction, cyanobacteria from the whole Taihu Lake basin will gather in Wuxi. The unpleasing vision and smell caused by cyanobacteria bloom and its pressure on the water supply system greatly affects the life and economic development of citizens in Wuxi.</TRp>
               <TRp TRkey='95d3bedf1d'>With the joint efforts of local governments around the lake, although the population of the Taihu Lake basin has increased by 15 million and GDP has tripled, the water eutrophication have still been controlled between mild and moderate level successfully through pollution interception and ecological restoration. After 2007, the large-scale cyanobacterial pollution with severe society harmfulness never occurred in Taihu Lake Basin again. However, the seasonal outbreak of cyanobacteria cannot be eliminated, so every year the Wuxi Municipal Government uses physical and mechanical salvage to clean the cyanobacteria gathered on the surface of the water body. Fixed algae-absorbing pumps and algae-water separation stations are set up in the areas where cyanobacteria are easy to accumulate, and salvage teams equipped with pumping boats are set up in other areas along the lake to flexibly catch cyanobacteria. In the past five years, the annual catch of cyanobacteria in Wuxi City was more than 1.5 million tons.</TRp>

               <MsImage
                  styles={{
                     root: {
                        width: '16em',
                        float: 'left',
                        fontSize: '1em',
                        margin: '0 .8em .8em 1.2em',
                        borderRadius: 6,
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                     },
                     image: {
                        width: '100%',
                     },
                  }}
                  shouldFadeIn
                  src={assets.pages.HumanPractices.government1$jpg} />

               <TRp TRkey='c71b536c1f'>In subsequent processing, the cyanobacteria with water content of about 99% were treated into algae sludge with water content of about 85% by algae water separation, and then transported to waste treatment plant for incineration. Considering the cost and market factors, no effective cyanobacteria treatment method has entered the stage of engineering application. Wuxi Municipal Government is very willing to guide the market and enterprises in all aspects to carry out technological innovation and industrial upgrading at the resource utilization level of cyanobacteria or the algae mud.</TRp>
               <TRp TRkey='296bc53db5'>From the perspective of government, it is very prudent to disseminate chemical or biological agents directly into the water. Due to the complexity and delicacy of the lake ecosystem, Wuxi municipal government tends to use physical methods to salvage cyanobacteria before further treatment.</TRp>
               <TRp TRkey='cb023f2cd5'>Finally, Director Zhang contacted Yangwan Algae Water Separation Station for further field investigation.</TRp>
               <TRp TRkey='8e9e6219de'>This interview provides the following enlightenment for our project:</TRp>


               <div className='ordered-list text'>
                  <div>1</div>
                  <div>
                     <MsImage
                        styles={{
                           root: {
                              width: '16em',
                              float: 'right',
                              fontSize: '1em',
                              margin: '0 .8em .8em .8em',
                              borderRadius: 6,
                              boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                           },
                           image: {
                              width: '100%',
                           },
                        }}
                        shouldFadeIn
                        src={assets.pages.HumanPractices.government2$jpg} />

                     <TRp TRkey='efd3315c06'>At present, a relatively perfect cyanobacteria salvage system has been built in Taihu Lake Basin. The amount of cyanobacteria fishing in Wuxi alone is 1.5 million tons, but the subsequent treatment technology of cyanobacteria sludge still needs to be developed urgently. The degradation of algae toxin, production efficiency and cost make incineration still the main means to treat cyanobacterial algae mud. Therefore, based on degrading cyanobacteria, we need to pay more attention to the degradation of cyanobacteria toxin and cost control in engineering applications. We invest more efforts in protein screening, large-scale expression, formulation simplification and other issues in engineering level.</TRp>
                  </div>
               </div>
               <div className='ordered-list text'>
                  <div>2</div>
                  <div><TRp TRkey='1447350c56'>The prudent attitude of Wuxi Municipal Government towards the dissemination of biochemical reagents into the environment further confirms our confidence into our idea of using genetic engineering to produce proteomic preparations for algae sludge treatment, which avoid ecological risk. At the same time, we know that now the government processing of cyanobacteria is mainly from the consideration of harmless level, cyanobacteria resources are actually in an undeveloped state. Through the development and transformation of cyanobacterial resources, this project can further guide the deeper and more comprehensive treatment of cyanobacterial pollution and achieve the overall ecological restoration of water body.</TRp>
                  </div>
               </div>
            </div>,
         },
         {
            cover: {
               src: assets.pages.HumanPractices.envMonCenCover$jpg,
            },
            h1: 'Monitor Center',
            h2: 'Wuxi Environment Monitor Center',
            content: <div style={{ width: '100%' }}>
               <TRp TRkey='fb542b8adb'>Taihu Lake, located in southern Jiangsu Province, is a crucial drinking water source area for the cities around. Wuxi and other cities around Taihu Lake have been making joint efforts to monitor its ecosystem as well as getting rid of pollution in the whole area since a serious algal bloom in 2007. Thus we visited the Wuxi Environment Monitor Center to get the picture of monitor system of the lake's aquatic ecosystem. There, officers mainly introduced the methods to us that they used to decide the eco-conditions.</TRp>
               <TRp TRkey='dcf0a5842b'>The center's responsibility includes monitoring all aspects of the environment but we only focus on the algal bloom monitoring of Taihu Lake. The lake is monitored from two aspects, its on-time properties of water quality and pictures from satellite, which jointly used to help researchers judging the lake condition.</TRp>
               <TRp TRkey='b73d9442f8'>First, we visited the ecology monitor center, which mainly focuses on water property. As the officer Ju introduced, the test composes of several procedures. The main body of the test work is to record species and intensities of the aquatic plants in the sample provided. At first, chemical reagent is used to fix all cells in the sample, after which researchers get drops of sample on the slide to observe under microscopes. Then, researchers note down the species they find in their sight, judging by the morphological features of the plants and they also count the cells to decide the biological intensity of the sample. Based on the samples they've observed in the past decades, they published a handbook for all species they found in Taihu Lake to help people learn more about the lake. In this way, important ecological features like the population structure of the lake in different seasons can be easily demonstrated to provide basic information for further analysis. Correspondingly, the center has set up lots of auto monitor at Taihu Lake estuaries and specific sites in the lake to measure chemical and physical properties of rivers. According to the officer, the most dangerous time of a algae bloom is decomposition time instead of algae bursting time. During the decomposition process, the number of microorganism bursts and solvent oxygen is quickly consumed. It leads to the result that big aquatic animals face the predicament of asphyxia as well as microcystin poisoning, and, of course, drinking water is polluted by biological decay. So, to get information of livings growth condition in the lake, some related properties like solvent oxygen, pH and temperature are quite important for monitoring. Data is sent to the center every hour automatically for researchers to observe.</TRp>
               <TRp TRkey='7105737d07'>One thing we considered most among all is the solvent microcystin measurement since it seems to us that this is the most harmful toxicant for human beings. However, comparing to other properties, this one is hard to measure and expensive (usually requires HPLC for accurate measurement). Additionally, microcystin is released into water with a large amount only when it undergoes the decomposition period, once getting into which harm is too late to prevent and control. So the microcystin measurement is not meaningful for monitoring though it’s main toxicity chemical to human. Work should mainly focus on putting the blooming process under control before decay starts, according to officer Ju.</TRp>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                     src={assets.pages.HumanPractices.envMonCen1$jpg}
                  />
               </div>
               <TRp TRkey='d53a1202ac'>Second, we met engineer Song, who is responsible for processing data sent by satellites. He introduced processing method and software for us. Taking advantage of the remote sensing technique, researchers can collect the data and obtain a clear image of the Taihu Lake area when the cloud cover rate is lower than 10 percent. From the processed image, researchers can observe plant cover presented with green in the lake which partly shows the algae bloom condition. The cover size is an important data thus needs to be corrected cautiously after discussions of several related offices thus to make decisions about setting up bloom warning. Song told us it is also crucial to combine the results gotten from patrolling on the spot for its reliability. Once the warning is set, the patrolling frequency will be increased and novel intervention will be involved to control the algae expansion.</TRp>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                     src={assets.pages.HumanPractices.envMonCen2$jpg}
                  />
               </div>

               <TRp TRkey='e9a7ef1e33'>An important point suggested by all officers we communicated here is that the whole condition should be decided by data and information gathered across-the-board. Nature is much more delicate and sophisticated than we can imagine so conclusions should be drowned cautiously or we may cause disasters to our ecosystem.  Which imprinted us most is the exchange and corporation between different sections, the integrates utilization of data and information makes it possible for researchers to spend less time and energy to gain higher efficiency. Plus, the way automatic monitor combined with manual operation also inspires us the advance of science and technology not only can emancipate human sources, but also devote to be a man Friday in the field of environmental and human safety.</TRp>

            </div>,
         },
         {
            cover: {
               src: assets.pages.HumanPractices.sepStaCover$jpg,
            },
            h1: 'Separation Station',
            h2: 'Algae water separation station',
            content: <div style={{ width: '100%' }}>
               <TRp TRkey='059db29928'>On August 13, we went to the China Taihu algae water separation station for further survey. Through this investigation, we understand that most of the algae treatment schemes today are based on incineration, which is not harmless and can create favorable social value. The results of this study prove that our project is of great significance.</TRp>
               <TRp TRkey='c030365b76'>Algae water separation station is to catch cyanobacteria from water, and then to separate algae and water, which is essential in water purification. Along the coast of Taihu, there are many algae salvage points and algae water separation stations. We visited the Yangwan Algae Water Separation Station. The staff introduced to us the technological process of algae water separation and the use of the separated algae. Algae is caught from the water by suction or salvage. A kind of water containing micro-nano bubbles called “milk water” is used to make algae float on the surface of water, and then the algae is scraped off to achieve the purpose of separating the algae from water. The separated water can be reused. The separated algae needs to be dehydrated again to become algae sludge. Algae sludge can be manufactured into organic fertilizers, or used as fuel for power generation or in biomedical applications. However, the cost of the above methods is high, and they can not effectively utilize algae, so they can not be put into large-scale application. As a result, most algae treatment nowadays schemes are mainly incinerated. Incineration not only can not utilize algae, but also can cause additional environmental hazards. Proteins extracted from amphioxus can degrade algae into non-toxic and harmless nutrient molecules, which may solve the problems faced by algae control today. Together with our staff, we also discussed the problem of changing the water quality of Taihu and related technologies for algae control. This is a meaningful investigation, so that we have an intuitive understanding of algae fishing and management and will guide us to better complete the next work.</TRp>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.sepSta1$jpg}
                  />
                  <div className='text' style={{ marginBottom: '3em' }}>Visiting the algae water separation simulation device</div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.sepSta2$jpg}
                  />
                  <div className='text' style={{ marginBottom: '3em' }}>Visiting the algae water separation device</div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.sepSta3$jpg}
                  />
                  <div className='text' style={{ marginBottom: '3em' }}>Visiting the polluted lake water extraction device</div>
               </div>
            </div>,
         },
         {
            cover: {
               src: assets.pages.HumanPractices.companyCover$jpg,
            },
            h1: 'Company',
            h2: 'MetaBD Biotechnology Co., Ltd.',
            content: <div style={{ width: '100%' }}>
               <TRp TRkey='2916ddffd6'>Industrial application of laboratory innovation is an important and complex project, which needs to take customer demand, market positioning and the feasibility of solutions into consideration. Only in this way can laboratory results be effectively transformed into industrial-scale production process and bring practical benefits to our society. As a success example for the grafting from laboratory scale to industrial applications, our PI, Professor Lu introduced MetaBD to us. </TRp>
               <TRp TRkey='b3b251933b'>MetaBD Biotechnology Co., Ltd. was established in Wuxi, Jiangsu province in April 2016, focusing on industrialized applications of high-throughput sequencing technologies of Genomics, Metagenomics, Metatranscriptomics and Metaproteomics in microbe, human health and life sciences. Our PI, Professor Lu holds the post of expert advisor, providing technical guidance and help for the company. With a core team consisting of talents from home and abroad, the company has built a variety of high-throughput sequencing platforms and has strong capabilities of offering diverse service for scientific research.</TRp>
               <TRp TRkey='0d4525d263'>We visited MetaBD Biotechnology Co., Ltd. in Wuxi, Jiangsu province on 13rd July. Ms. Zhou, Vice President of the company showed us around the company's laboratories and equipment, and gave us a detailed introduction of the company's founding process and main business. Based on advanced high-throughput sequencing technology and high-performance computing platforms, MetaBD offers excellent service for scientific research in the fields of genomics, transcriptome, macrogenomics and macrotranscriptome. It focuses on industrialized applications in microbe, human health and life sciences, especially aquatic microorganisms and cyanobacteria blooms. We also learned about Algae-Hub (www.algaehub.cn), a large data platform that gathers information about algae species to promote the study and popularization of algae. Further collaboration with Algae-Hub can be found on next part of this page.</TRp>

               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.company1$jpg}
                  />
               </div>
            </div>,
         },
      ]}
   />
</>);


const We_established = (<>

   <TRH2 TRkey='6cab1949ea'>We established long-term partnership in fields of...</TRH2>

   <Parafolding paras={[
      {
         title: 'Information sharing',
         body: <>
            <TRp TRkey='6dec33c085'>Qin Boqiang, director of Taihu station of Nanjing Institute of Geography & Limnology, introduced that they set up stations to collect samples of water and cyanobacteria in Taihu Lake on a regular basis. At the same time, they established prediction models to analyze and predict the probability and possible areas of cyanobacteria bloom according to algae biomass and weather forecast.</TRp>
            <TRp TRkey='82fee3b1f4'>Through data sharing, we will jointly establish a monitoring, prediction and early warning mechanism for cyanobacteria bloom. They provide us with information about the amount of cyanobacteria, duration time of algae outbreak, daily salvage volume, as well as fishing equipment, etc. We would help them detect and characterize the algae samples, analyze and upload the data. Through the establishment of the monitoring and early warning mechanism, the probability of cyanobacteria bloom outbreak can be further reduced. It can also provide timely and accurate technical support and information services for cyanobacteria salvage.</TRp>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap', marginBottom: '3em' }}>
               <MsImage
                  shouldFadeIn
                  styles={{
                     root: {
                        width: '90%',
                        borderRadius: 6,
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                     },
                     image: {
                        width: '100%',
                     },
                  }}
                  src={assets.pages.HumanPractices.par1$jpg}
               />
            </div>
         </>,
      },
      {
         title: 'Algae sample supply',
         body: <>
            <TRp TRkey='d102ce14ec'>We have learned from the relevant departments of Wuxi government that since 2007, Wuxi has taken the salvage of blue algae as the most direct, environmentally friendly and effective means to control algae bloom in Taihu Lake. Taking safety and efficiency into consideration, fixed salvage points and platforms have been set up in the areas along Taihu Lake where blue algae are easy to gather. Mechanized fishing boats are reasonably equipped so as to make combination of mobile salvage and fixed salvage of blue algae.</TRp>
            <TRp TRkey='ccea9e6bb0'>We have established long term cooperation with Cyanobacteria Control Office of Wuxi Water Bureau and Wuxi environmental monitoring center, Jiangsu Province to study the comprehensive control of cyanobacteria in Taihu Lake. They provide us with sufficient algae samples and algae mud. We study the samples and analyze their components with the goal of building genome database of algae. We also carry out experiments to degrade algae, aiming to transform them into nutritious feed raw materials. We believe that with the joint efforts, the follow-up treatment and utilization of cyanobacteria resource will be promoted and bring about more social and ecological benefits.</TRp>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap', marginBottom: '3em' }}>
               <MsImage
                  shouldFadeIn
                  styles={{
                     root: {
                        width: '70%',
                        borderRadius: 6,
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                     },
                     image: {
                        width: '100%',
                     },
                  }}
                  src={assets.pages.HumanPractices.par2$jpg}
               />
            </div>
         </>,
      },
      {
         title: 'Cooperation prospect',
         body: <>
            <TRp TRkey='b1ddbbf151'>We have established a wide-range and far-reaching prospect of cooperation with Delinhai Technology Co., Ltd. It is an environmental protection company, mainly engaging in the emergency treatment and control of cyanobacteria bloom in lakes and reservoirs. They have developed a variety of adaptive and diversified cyanobacteria control technology and equipment. Having learned about the extraction capacity of algae water separation station and the latest equipment of cyanobacteria treatment, we designed a new industrial process for our project. In the future, we can also integrate the technology with the algae water separation station to in situ degrade and remove cyanobacteria form the extracted water, so as to realize the immediate treatment. Thanks to their advanced technology and equipment, as well as complete set of professional operation and maintenance services for cyanobacteria treatment, we believe that we have a broad prospect of cooperation, which can jointly realize the industrialization and market-oriented application of cyanobacteria resources.</TRp>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap', marginBottom: '3em' }}>
               <MsImage
                  shouldFadeIn
                  styles={{
                     root: {
                        width: '70%',
                        borderRadius: 6,
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                     },
                     image: {
                        width: '100%',
                     },
                  }}
                  src={assets.pages.HumanPractices.par3$jpg}
               />
            </div>
         </>,
      },
   ]} />
</>);

const To_further = (<>
   <TRH2 TRkey='9ed551edcf'>To further pitch our project</TRH2>
   <Subpage
      style={{ marginLeft: '2em', marginRight: '2em' }}
      items={[
         {
            cover: {
               src: assets.pages.HumanPractices.algaeCover$jpg,
            },
            h1: 'Algae-Hub',
            h2: 'Sharing our findings on Algae-Hub',
            content: <div style={{ width: '100%' }}>

               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.algae1$jpg}
                  />
               </div>

               <TRp TRkey='48a851361c'>Algae-Hub (<Link href='https://www.algaehub.cn/'>www.algaehub.cn</Link>) is a large data platform that gathers information about algae species including pictures, identification features, habitat distribution, classification keys, and DNA molecular sequences. In Algae-Hub, users can consult the details of algae species, publish the identification needs of undetermined algae species, and communicate with algae researchers around the world through forums and sharing. We learned about Algae-Hub when visiting MetaBD Biotechnology company and made our own contribution to it afterwards. </TRp>
               <TRp TRkey='d268ed7762'>Specifically, we collected water samples from Taihu Lake in Wuxi and Jiulonghu Lake in Nanjing, and analyzed the species of algae. We took high-definition microscopic photos of different algae and uploaded them to the website. We also uploaded supplementary information on their taxonomic characteristics, ecological distribution, physical and chemical characteristics and related research literature, seamlessly docking with the international standard database. For some uncertain algae, we sought for help online. In terms of the identification of undetermined algae species, we published pictures and related descriptions in the identification section of the website. Other users could give the identification results of these "seeking identification" species and we could get feedback from experts online. The website also provides us with a rich platform for interactive interaction. We commented on the pictures and information, shared our research results and contributed to its WeChat Subscription. In addition, we have conducted in-depth discussions and interactive exchanges on scientific research, practice and industry in the comprehensive forum of Algae-Hub.</TRp>

            </div>,
         },
         {
            cover: {
               src: assets.pages.HumanPractices.ccicCover$jpg,
            },
            h1: 'CCiC',
            h2: 'Making presentation at CCiC',
            content: <div style={{ width: '100%' }}>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.ccic1$jpg}
                  />
               </div>
               <TRp TRkey='6a967d2879'>The 6th Conference of China iGEMer Community (CCiC) was held in Shenzhen from August 19th to 23rd, 2019. The conference was guided by the Synthetic Biology Committee of the China Society of Bioengineering, co-sponsored by the Institute of Synthetic Biology of the Shenzhen Institute of Advanced Technology of the Chinese Academy of Sciences, the Shenzhen Synthetic Biology Innovation Institute and the CCiC Executive Committee, and co-organized by the Shenzhen Synthetic Biology Association. With the theme of “Synbiopunk”, this year's CCiC expresses a pursuit of freedom and innovation. In the exploratory stage, synthetic biologists in the future will break away from the constraints of traditional biology and open the door to a new world.</TRp>
               <TRp TRkey='ea8c2553fa'>At the venue of CCiC, we made a presentation on our project. Our display had achieved good results on the spot. The judges and the students at the scene were very interested in the content of our project and put forward a series of related questions and suggestions. The judges' questions focused on the cost and goals of our projects. The judges believed that the cost of our project may be high, and the goal of our project should be to degrade algal toxins. Based on the opinions of the judges, we had made some adjustments to the subsequent experimental programs.</TRp>
               <TRp TRkey='6399818605'>The students of other teams are very interested in our project. After our presentation, many teams have contacted us and hoped to further exchange the project content. After our presentation, we also discussed with other teams’ members. Our discussion focused on academic integrity and project sustainability.</TRp>
            </div>,
         },
         {
            cover: {
               src: assets.pages.HumanPractices.colCover$jpg,
            },
            h1: 'Collaboration',
            h2: 'Searching for collaboration with other teams',
            content: <div style={{ width: '100%' }}>
               <TRp TRkey='053df46773'>Collaboration with iGEM team SEU of open track</TRp>
               <TRp TRkey='2658bb444e'>Bounce around biology ideas with information science: We believe that interdisciplinary always brings new ideas and inspirations. The way connecting two disciplines also can expose the similarities between two fields and arouse us new stands to think and solve problems. Therefore, we contact with an iGEM team of open track - SEU.</TRp>
               <TRH3 TRkey='6842ddfe4b' style={{ marginLeft: '.4em' }}>Meetup</TRH3>
               <TRp TRkey='0066c2dba5'>We hold a meetup in the main conference room of Southeast University Wireless Valley in May. SEU team has been devoted to building a black box with DNA components that can realize the regulation of input and output. And we helped to estimate the feasibility of DNA displacement reaction applied to computation, by which way we searched for relative literature, analyzed the reaction rate and evaluated the workload of operation in experiments. Correspondingly, team SEU gave us some advice on modeling, including introducing the biological big data based on the biological open-source databases to conduct comparison and screening.</TRp>


               <TRH3 TRkey='d66faed03c' style={{ marginLeft: '.4em' }}>Resource sharing</TRH3>

               <TRp TRkey='50f7be4dff'>Sharing resource enables us to integrate our strengths: We two teams have distinguished sources as we are familiar with different professional fields and major in different specialties. It is also very convenient for us to share resource between each other since we are close in location.</TRp>

               <div className='unordered-list text'>
                  <div>•</div>
                  <div>
                     <TRp TRkey='373d02125f'>SEU team support us in computing resources - the access to severs from school of information science, which produced a marked effect on the annotation of phylogenetic tree, partial collation of high-throughput sequencing results and the comparison of structures between protein molecules. They also helped our information group by providing training in python skills and Git hub codes recommendation.</TRp>
                  </div>
               </div>
               <div className='unordered-list text'>
                  <div>•</div>
                  <div>
                     <TRp TRkey='47e15fea4e'>In return, we helped them to optimize the experimental scheme from the perspective of molecular biology. First, we helped to predict the best reaction condition for DNA replacement. Then we additionally set up a series of environmental gradients and control groups for them to make the experiment results more convincing. In last we offer to evaluate the computational element efficiency from the perspective of bioreaction kinetics. We also shared the information of CCiC (Conference of China iGEMer Community) for them.</TRp>
                  </div>
               </div>

               <TRH3 TRkey='846f03718f' style={{ marginLeft: '.4em' }}>Troubleshoot</TRH3>
               <TRp TRkey='14dac8990b'>After a long term of on-extensive cooperation, we helped troubleshoot each other's projects. SEU team corrected the several bugs in our website and software use. We pointed out some control group experiment, for example, the reaction stability at different temperatures, could be done to perfect the result.</TRp>
            </div>,
         },
         {
            cover: {
               src: assets.pages.HumanPractices.patent_pendingCover$jpg,
            },
            h1: 'Patents & Entrepreneurship',
            h2: 'Starting up business',
            content: <div style={{ width: '100%' }}>
               <TRH3 TRkey='092f871368' style={{ marginLeft: '.4em' }}>Invention patents</TRH3>
               <TRp TRkey='375349921f'>The problem of cyanobacteria bloom has attracted global attention regarding environmental pollution and ecology. Although cyanobacteria have rich nutritional value, they cannot be effectively utilized by livestock, poultry, and aquatic animals because of their impenetrable cell walls and algal toxins. The existing algae treatment methods are expensive and technologically complicated, leaving the environmental governance and practical usage of algae unresolved. Recently, we discovered that amphioxus, a marine invertebrate that feeds on cyanobacteria, can degrade algae into amino acids, oligopeptides, and polysaccharides and degrade algal toxins through its unique intracellular digestion mechanism. These research results broke new ground for the ecological usage of cyanobacteria and were commented on by Nature. Based on this study, we reconstructed the full-length functional proteome library of the internal digestive mechanism of amphioxus. Primitive research indicates that we can degrade cyanobacteria into non-toxic absorbable small-molecule nutrients.</TRp>
               <TRp TRkey='c1dc3bcc5f'>We have applied for patents for the core technology, namely production and application of a biological preparation for degradation of algae. The effective component is the protein specifically expressed in the epithelial cells of the amphioxus. The invention uses biological agents, which greatly reduces the cost of algae degradation and treatment. Our project will use this technology as the core, combined with algae-killing wells, algae water separation stations and cyanobacteria digesters and other equipment, to convert over millions of tons of algae mud into high-energy nutrients.</TRp>

               <TRH3 TRkey='862284c7c9' style={{ marginLeft: '.4em' }}>Strategic planning</TRH3>
               <TRp TRkey='280395c2cb'>In order to put theory into practice, we have registered a biotechnology company to operate our project and realize market-oriented application. We have innovated and developed novel business model, formulated strategic plans and conducted the feasibility study for the future development of the company. We invited experts to comment on our project from different aspects. Our project is favored by investors and supported by state funds. Mr. Siyu Wu, copartner of Nanjing Changlin Equity Investment Fund Center, shared with us personal entrepreneurial experiences and gave us recommendations and suggestions on our business plan. We also got guidance from Entrepreneurship &amp; Practice Department of Youth League Committee, Southeast University, expanding our startup network and gaining great insight from many entrepreneurs in different fields.</TRp>
               <TRp TRkey='214f98daed'>For more details of product design and entrepreneurship, please refer to the <Link href='/Product_Design'>product page</Link>.</TRp>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
                  <MsImage
                     shouldFadeIn
                     styles={{
                        root: {
                           width: '70%',
                           borderRadius: 6,
                           boxShadow: 'rgba(0, 0, 0, 0.4) 0px 16px 38px -12px,rgba(0, 0, 0, 0.4) 0px 4px 25px 0px,rgba(0, 0, 0, 0.4) 0px 8px 10px -5px',
                        },
                        image: {
                           width: '100%',
                        },
                     }}
                     src={assets.pages.HumanPractices.pat1$jpg}
                  />
               </div>
            </div>,
         },
      ]}
   />
</>);

const content = (<>
   {Overview}
   {Public_concern}
   {Expert_opinion}
   {We_visited}
   {We_established}
   {To_further}
</>);

export const body = {
   title: 'Human Practices',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Practices', path: '/Human_Practices' },
      { text: 'Human Practices', path: '/Human_Practices' },
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

