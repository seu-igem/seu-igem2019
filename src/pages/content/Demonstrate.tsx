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
import { Link } from './comps/Link';
import { DocUnorderedList } from './comps/DocList';
// import { Link } from './comps/Link';

const dd = assets.pages.Demonstrate;

const content = (<>
   <TRH2 TRkey='8ee714da9e'>Overview</TRH2>
   <TRp TRkey='750316076d'>Algae Terminator focuses on degradation and utilization of cyanobacteria, which is an environmental risk for almost all the water body worldwide. As a solution, we developed an innovative enzymatic preparation containing 10 proteins screened from amphioxus genome to degrade algae samples at a ratio of 1:500 by weight completely into small molecule nutrients in 24h. As a proof of concept, we have demonstrated our work with algae samples directly collected from Taihu lake, China. To progress our project out of the lab, we then designed a set of industrial technological process matching the existing equipment, which can produce nutrients out of concentrated algae plasma. Extensive fieldwork and partnership with enterprises in the field have been built to make our project more practical. We also make great progress in entrepreneurship, with patents, a feasibility study provided by consulting companies and an investment intention from Mersen.</TRp>
   <TRH2 TRkey='d5d1a862a8'>In the lab, out of the lab</TRH2>
   <TRp TRkey='189cb6e53d'>From the very beginning of the project we have decided to make the basis of our project reached out of the academic range. This is reflected in all aspects of our experiment.</TRp>
   <TRp TRkey='e4c99294e8'>The algae sample we used in the whole process of our experiments are fresh algae directly collected from Taihu Lake, one of the five largest freshwater lake in China.</TRp>

   <ImageWithShadow src={dd.fig1$jpg} width='60%' caption='Figure 1. Our partner, Junyi Zhang from Cyanobacteria Control Office of Wuxi Water Bureau is collecting algae sample for us' />
   <ImageWithShadow src={dd.fig2$jpg} width='60%' caption='Figure 2.The sample collection points provided for us' />

   <TRp TRkey='a400d44b71'>In general, we have verified the efficiency and safety of our solution scheme for the whole technique process. The formula of our preparations has been optimized with bioinformatics methods and become simple and efficient. The expression strategy of all the 12 proteins has been built and confirmed with molecular biology experiments. The characterization of these produced proteins also has been finely completed with enzyme activity test kits. The reaction mechanism has been explained by molecule docking model and its authenticity have been proved in subsequent experiment. The algae sample from Taihu Lake has been well characterized and observed. We have got success in degradation of algae with our enzymatic preparation at ratio of 1:500 in 24h, and its product have been tested with mass spectrometry and HPLC. The algae got totally degraded to small molecule nutrients without any residents of microcystin (algal toxin). To get details of all these exciting results, <Link href='/Results'>please click here</Link>.</TRp>
   <TRH2 TRkey='22618a61f9'>From lab to industry</TRH2>
   <TRp TRkey='02fc62be9a'>In order to better prove the practical significance and feasibility of our project, we have carried out a detailed investigation on the current situation of the field of cyanobacteria treatment, and designed a completed industrial technique flow in combination with the existing industries and equipment.</TRp>
   <TRp TRkey='647c1b009b'>The protein production flows continue to follow the expression scheme designed in our experiment, which is mainly expressed in E-Coli systems to get scaled production, high efficiency and low cost.</TRp>
   <TRp TRkey='75eff83ab7'>The protein production flows are list here.</TRp>
   <DocUnorderedList items={[
      <TRp TRkey='90bae162e4'><Link href={assets.pages.Results.ExpressionresultsofcathepsinB$pdf}>Expression results of cathepsin B</Link></TRp>,
      <TRp TRkey='21c7a76366'><Link href={assets.pages.Results.ExpressionresultsofTrypsinLikeserineprotease$pdf}>Expression results of Trypsin-like serine protease</Link></TRp>,
      <TRp TRkey='5386b9af68'><Link href={assets.pages.Results.ExpressionresultsofsubtilisinLikeprotease$pdf}>Expression results of subtilisin-like protease</Link></TRp>,
      <TRp TRkey='0157113415'><Link href={assets.pages.Results.ExpressionresultsofendoBeta14Glucanase$pdf}>Expression results of endo-beta-1,4-glucanase</Link></TRp>,
      <TRp TRkey='e16321aefd'><Link href={assets.pages.Results.ExpressionresultsofpancreaticlipaseLikeprotein$pdf}>Expression results of pancreatic lipase-like protein</Link></TRp>,
      <TRp TRkey='0e1a155d54'><Link href={assets.pages.Results.Expressionresultsofcarboxypeptidase$pdf}>Expression results of carboxypeptidase</Link></TRp>,
   ]} />
   <TRp TRkey='eaa1565da9'>For all the protein in the preparation list, we had tried to optimize its sequence and construct expression plasmid, and all of them had expressed. Some of them show great activity and high expression yield in E-Coli system, as we list above. For the rest 4 proteins, we are trying to use other expression strategy to get better efficiency. </TRp>

   <ImageWithShadow src={dd.fig3$jpg} width='75%' noShadow caption='Figure 3. Production line built by Algae Terminator' />

   <TRp TRkey='58e8745705'>In combination with the demonstration project of algae pollution control in Taihu Lake, the project integrates with algae fishing and treatment equipment such as algal wells, algal water separation stations, algal digesters, etc. so that the expression products of the internal digestion proteome library can reach the level of engineering application. The algal well and algal water separation station are the special equipment for the treatment of algal pollution in Taihu Lake of Wuxi Municipal government. Each set of equipment has the capacity of extracting and catching more than 100, 000 tons of cyanobacterial mud every day. Now 10 sets of this equipment are planned to be installed. The algae water separation station can remove 90% of the water in the algae mud. As shown in Figure 3, it is proposed to connect the concentrated algae plasma discharge pipeline of the algae water separation station to establish a cyanobacteria digestion pool (with a total capacity of 10000 m3); then, through the inlet of the digestion pool, the AT enzymatic preparations and PBS solid balance salt are added according to the dry weight ratio of 1:1000 to 1:100000 to algae; the digestion and degradation of algae are accelerated through the agitator in the pool. The degraded small molecular nutrients (degradation products) enter the concentration pool through the small molecular filtration membrane; the excess water in the degradation products is separated out through the water molecular filtration membrane; the degradation products in the concentration pool are collected and freeze-dried or dried in the air, tested according to relevant standards in the Feed Health Standard (GB 13078-2017) and the Code for the Safe Use of Feed Additives ( No. 2625 announcement of the Ministry of Agriculture) issued by the Chinese Ministry of Agriculture, and finally applied to feed and other related downstream industries.</TRp>

   <ImageWithShadow src={dd.fig4$jpg} width='70%' caption='Figure 4. One device in algae separate station' />

   <TRp TRkey='5f4c1a042a'>We have made contact with algae water separation station mentioned above and with DeLinHai Technology Co., Ltd., exchanged technical ideas and established cooperation intention. They show great interest in our scheme, and a small trial production line has been built in Wuxi for further research.</TRp>
   <TRp TRkey='3b62398450'>Click here to get more information about our partnership on <Link href='/Human_Practices'>our human practice page</Link>.</TRp>
   <TRH2 TRkey='cba35fa2f2'>From industry to entrepreneurship</TRH2>
   <TRp TRkey='32e83207b1'>We believe that for the demonstration of environmental protection projects, in addition to technical issues, economic issues also need to be considered. If an environmental protection project can complete the closed-loop business, then the project can promote itself, with its achievements applied to larger range. It’s a one hundred per cent good thing for iGEMers to pursue creating value as well as solving environmental problems. </TRp>
   <TRp TRkey='40ff35cfc9'>Algae Terminator take cyanobacteria as a resource rather than a pollution. Our degradation product is small molecule nutrients which is a great supplement for animal feed protein nutrients. If the cyanobacteria resource gets to be effectively exploited, there will be a large number of land area for economic crops to be planted in grain rations. Therefore, the development of cyanobacteria resource not only brings about the revolution of feed industry, but also contributes to solving the problem of global hunger to some extent. Cyanobacteria, as one of the oldest nitrogen-fixing plants on the earth, is actually a huge protein treasure house waiting for us to dig.</TRp>
   <TRH3 TRkey='e1d285b468'>Business Plan</TRH3>
   <TRp TRkey='48936a15a1'>We have prepared detailed <Link href='/Product_Design'>product design</Link> and <Link href='/Entrepreneurship'>business plan</Link>, in which we have elaborated our business model and target market.</TRp>
   <TRp TRkey='56a127b930'>Our plan has been highly praised by Siyu Wu, Changlin investment partner, who says “One of the most important issues in Entrepreneurship is to have a clear business model with a closed loop and then have sustainable development, which means companies do not need continuous social "blood transfusion" to maintain their operation. As an environmental protection project, Cyanobacteria Terminator has a solid foundation and a bright future based on market research and process design in addition to the research and development work of the project itself. It would be a blue sea if cyanobacteria resources were really exploited worldwide and entered the grain and agricultural market as feed proteins.”</TRp>

   <ImageWithShadow src={dd.fig5$jpg} width='20em' caption='Figure 5. Siyu Wu, senior investor, Changlin investment partner' />

   <TRp TRkey='033887c110'>We also received investment intention from Mersen.</TRp>
   <TRp TRkey='3e76538573'>Opinions and approval from investment proves our feasibility and potential in the field of business.</TRp>
   <TRH3 TRkey='4c01184086'>Feasibility study</TRH3>
   <TRp TRkey='8915b567cf'>The feasibility study is the analysis and demonstration of the practicality of a project, which is the essential step before investment decision, and the important foundation for further work. Therefore, we invited authoritative consulting companies and professional venture capital institutions to carry out the feasibility study on our project. The feasibility analysis report was completed on the basis of full research on the market and products. For full text, please refer to <Link href={dd.iGEMFeasibilitystudy2$0$pdf}>this PDF document</Link>.</TRp>
   <TRp TRkey='fcf9519723'>In detail, the report comprehensively evaluates the company's development strategy and future planning from different aspects, including raw materials, instruments and equipment, production process, human resources, implementation plan, market need and size, cost and profit, investment and risk, etc. Based on the original research of the intracellular digestion mechanism in marine organisms (amphioxus), we have developed four high-tech products, namely feed protein raw materials, mixed enzyme preparations, water purification agents and feed additives. Relying on the modern industrial enzyme production technology system, we will cooperate with major companies and university laboratories to jointly develop high-quality products for pilot production and safety evaluation. Domestic and international experts are also invited to demonstrate our project and we will further promote it on multiple platforms, including TV, newspaper, radio and social media. In conclusion, the feasibility study verifies the practicality of our project, which has huge profit space and broad market prospects.</TRp>
   <TRH3 TRkey='13644dfa77'>Patent</TRH3>
   <TRp TRkey='52da18e40a'>As an important supplement of our project demonstration, patent shows approval from intellectual property office, which has certain credibility and professionalism. We have applied for patents for the core technology, namely production and application of a biological preparation for degradation of algae. The effective component is the protein specifically expressed in the epithelial cells of the amphioxus. The invention uses biological agents, which greatly reduces the cost of algae degradation and treatment. </TRp>
   <TRp TRkey='150474c551'>Our project will use this technology as the core, combined with algae-killing wells, algae water separation stations and cyanobacteria digesters and other equipment, to realize the degradation and utilization of blue-green algae all over the world.</TRp>
</>);

export const body = {
   title: 'Demonstrate',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Project', path: '/Description' },
      { text: 'Demonstrate', path: '/Demonstrate' },
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
