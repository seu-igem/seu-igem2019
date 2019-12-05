import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
// import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRH3 from './comps/TRH3';
import TRp from './comps/TRp';
// import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';
import { Link } from './comps/Link';

import { Timeline, Icon } from 'antd/es';
import 'antd/es/timeline/style/css';
import 'antd/es/icon/style/css';
import { ImageWithShadow } from './comps/ImageWithShadow';

// import './css/Empty.scss';

const content = (<>
   <TRH2 TRkey='370ecc0fda'>Executive summary</TRH2>
   <TRp TRkey='d47418d034'>This project is based on Professor Lu's 12-year research experience. After years of research, Professor Lu's team has discovered the mechanism of intracellular digestion in amphioxus. We are deeply inspired by this study. Therefore, based on the research results of teachers on the mechanism of intracellular digestion, we applied this mechanism to the degradation of cyanobacteria and sublimate it into an excellent means of environmental management. This project developed a new mixed enzyme preparation, which can degrade cyanobacteria into small nutrients that can be absorbed efficiently. By producing cyanobacteria feed protein ingredients, the effective substitution of feed soybean protein raw materials can be realized, the water environment of cyanobacteria outbreak can be controlled and the global food crisis can be solved at the same time.</TRp>
   <TRp TRkey='82bf3a252c'>In this project, we developed a new mixed enzyme preparation for degrading blue algae in Lake Taihu. Its genetic background is from amphioxus, a special edible algae marine organism. The enzyme preparation is a mixture of 28 highly expressed recombinant proteins based on synthetic biology and genetic engineering. And it can degrade cyanobacteria and other algae in 24 hours according to the ratio of 1:500-1000 (dry-weight ratio), completely remove the algae toxins, and transform cyanobacteria into absorbable nutrients mainly consisting of small peptides, thus solving the worldwide problem from cyanobacteria pollution control to cyanobacteria resource utilization.</TRp>
   <TRp TRkey='1eae451cbc'>We use the mixed enzyme preparation to degrade cyanobacterial algae mud to produce feed protein ingredients to protect the environment and kill the earth cancer at the same time. We believe through commercial stimulation, the eliminating progress will be highly accelerated, so the cleaning cost can be reduced, and at the same time the producing cost will be less than half of the traditional cost. We also wish that trough our project, relevant enterprises for cyanobacteria control can achieve maximum economic benefits at the lowest possible cost.</TRp>
   <TRH2 TRkey='8948db2bb6'>Product overview</TRH2>
   <TRp TRkey='829bc8ef05'>After years of research, Professor Lu's team has discovered the mechanism of intracellular digestion in amphioxus. They found that the digestive epithelial cells of amphioxus digestive tract (mainly the cecum) can directly phagocytize algae by using the intracellular digestive mechanism, and effectively digest, absorb and utilize the algae, such as cyanobacteria, to achieve the purpose of using algae as food source. Amphioxus cecum epithelial cells can not only degrade algae directly into amino acids, oligopeptides, oligosaccharides, oligonucleotides, fatty acids, vitamins and trace elements, but also degrade harmful substances such as algae toxins through powerful digestive and immune function gene groups, so that algae can be directly transformed into algae. For the purpose of absorbable, non-toxic nutrients. Details are given in the following paper.</TRp>
   <TRp TRkey='68f84b8ce8'><Link href='https://royalsocietypublishing.org/doi/10.1098/rspb.2018.0438'>https://royalsocietypublishing.org/doi/10.1098/rspb.2018.0438</Link></TRp>
   <TRp TRkey='881f00166b'>Deeply inspired by Professor Lu's discovery in the mechanism of intracellular digestion in amphioxus and based on the article mentioned above, we applied this mechanism to the degradation of cyanobacteria and sublimate it into an excellent means of environmental management. We developed a new mixed enzyme preparation, which can degrade cyanobacteria into small nutrients that can be absorbed efficiently. Our products are listed below.</TRp>
   <TRp TRkey='bc09a6659d'>Our first product is cyanobacteria feed protein ingredients, which is a powerful substitute for traditional soybean feed protein ingredients. Because cyanobacteria are high quality protein ingredients and the main component of its degradation products is small peptide, the nutritional value and absorbability of cyanobacteria are higher than those of traditional feed protein ingredients. The second product is new enzyme preparation, which is used to degrade cyanobacteria and algae toxins in cyanobacteria. Harmless treatment of cyanobacteria after fishing is a worldwide problem. The enzymes of this project group can simultaneously solve the two core problems of cyanobacteria resource utilization, namely, the difficulty of breaking the wall of cyanobacteria and the difficulty of degrading algae toxins. They have broad application prospects and market demands in the development of lakes and marine cyanobacteria resources worldwide.</TRp>
   <TRp TRkey='c4ad656e77'>After the outbreak of cyanobacteria in 2019, we collected the cyanobacteria samples. This picture is the whole process of laboratory treatment of turning cyanobacteria into high quality feed in Taihu Lake. </TRp>
   <TRp TRkey='0b7eb6b9ce'>The complete technical route is as follows.</TRp>

   <div className='doc-list'>
      <div className='doc-list-item'>
         <div>1</div>
         <div>
            <TRp TRkey='3e397e00ad'>Anatomy of the cecum tissue of amphioxus.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>2</div>
         <div>
            <TRp TRkey='73d76b9d74'>Total RNA was extracted.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>3</div>
         <div>
            <TRp TRkey='3e8bcddefc'>RNA was extracted from total RNA.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>4</div>
         <div>
            <TRp TRkey='68c8bf5d47'>The first strand was synthesized from the 3'end, the DNA/RNA heterozygote was digested by RNase I, the full-length cDNA was captured by 5'end Cap specific antibody and magnetic bead method, the full-length cDNA was washed and the second strand was constructed from the 5'end. The obtained double-stranded DNA was constructed for library construction and high-throughput sequencing, and the full-length cDNA was constructed by pYES-DEST52 vector and Gateway homologous recombination method. Long-function proteomic library, high-throughput sequencing.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>5</div>
         <div>
            <TRp TRkey='2d537ea4df'>The recombinant vector was introduced into Saccharomyces cerevisiae, and the functional proteome was expressed on a large scale, and the functional proteome expression products were extracted.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>6</div>
         <div>
            <TRp TRkey='285e4ec436'>The algae were degraded by mixing 1:1,000 with blue algae in Taihu Lake. After 24 hours of 60 rpm rotation, the degradation state of degradation products was detected.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>7</div>
         <div>
            <TRp TRkey='53d99bdcaf'>The degradation effect of degradation products was tested by LC-MS. It was found that over 90% of degradation products were oligosaccharides, oligopeptides and amino acids with molecular weight less than 300 Daltons, and no algae toxin was found.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>8</div>
         <div>
            <TRp TRkey='d419714cb3'>Extraction of degradation products for feed industry application</TRp>
         </div>
      </div>
   </div>

   <TRp TRkey='3855bdfb06'>This project combines with the demonstration project of algae pollution control in Taihu Lake, integrates algae fishing and treatment equipment such as algae killing well, algae water separation station and algae digestion tank, so that the expression products of endogenous digestive proteomic library can reach the level of Engineering application. Subversive changes will take place in controlling ecological and environmental pollution, feeding industry structure and agricultural industry structure. We have sent the products of this project to the relevant water environment management department of Wuxi for the degradation experiment of cyanobacteria. The feedback from this department is that the degradation has achieved results. At present, we are sending the degradation products to the relevant domestic testing departments, waiting for the test results.</TRp>
   <TRH2 TRkey='78bd0e3e23'>Business Model</TRH2>
   <TRH3 TRkey='b54b51f318'>Target Customer</TRH3>
   <TRp TRkey='f801889eed'>The target customer service of this project is divided into upstream and downstream ones. The upstream target customers are mainly public administration departments such as environmental protection departments in the government. Provide them the service of harmless treatment of cyanobacteria and algal sludge and charge the service fee. Downstream target customers mainly for the world's major feed enterprises, to sell cyanobacteria feed protein or new enzyme preparation.</TRp>
   <TRp TRkey='fdc0a39d76'>The target market areas are the areas around large freshwater bodies of water affected by cyanobacteria blooms. This project will combine algae ecological treatment equipment such as algal decomposition well, algal water separation station and cyanobacteria digester to produce the practical application of high-quality feed substitutes.</TRp>
   <TRH3 TRkey='00d50975e9'>Target Market</TRH3>
   <TRp TRkey='59c29bbd63'>The target market is positioned as the algae sludge harmless treatment conversion service provider and cyanobacteria feed protein raw material manufacturers. Cyanobacteria related degradation products will be low-cost and high-quality substitutes for soybean, meat and bone meal, fish meal and other feed ingredients, which will have a huge impact on the proportion of ration and cash crops in the agricultural industry with large-scale promotion and application. Cyanobacteria and other algae were directly degraded into amino acids, oligopeptides, oligosaccharides, oligonucleotides, fatty acids, vitamins and trace elements. This kind of feed has the following advantages: 1. High biological value 2. High energy 3. High calcium and phosphorus 4. High microelement content 5. Rich in vitamin B group 6. Contain unknown promote growth factor 7. Digestibility 8. Rich salt content. Therefore, it can be considered that cyanobacteria is an excellent animal protein feed rich in protein, amino acid and trace elements.</TRp>
   <TRH3 TRkey='dba1321760'>Competition Analysis</TRH3>
   <TRp TRkey='f9991fe658'>The competitive advantages of this project are as follows. There has never been a similar efficient while low-cost pure natural product in the market. The market position of this project is high-tech upstream products. The applicant hope that through push, with the help of collaborative innovation model, the project can completely solve the problem of algae pollution of the environment over the next 3 to 5 years and effectively reduce the feed industry raw material costs and the dependence on the economic crops such as soybeans. The food planting proportion in the agricultural industry will be further improved.</TRp>
   <TRH3 TRkey='8a9e27dfc5'>Control of cyanobacteria pollution and subsequent treatment</TRH3>
   <TRp TRkey='ac2e3badd2'>This project has epoch-making market competition potential in algae environmental pollution control. At present, there is no good market case about the solution of algae bloom treatment and algae utilization.</TRp>
   <TRp TRkey='b80d04312d'>Taking the environmental pollution control of Taihu lake in Wuxi as an example, the government of Wuxi spends a lot of manpower, material resources and financial resources to recover blooms during the outbreak of cyanobacteria in Taihu lake every year. By 2015, 18 algal water separation stations had been built or configured around the Taihu lake. From 2007 to 2015, a total of 8.5 million m<sup>3</sup> of algal water (containing 0.5% algal) was recovered from the surrounding cities of Taihu lake, which was equivalent to the removal of cyanobacteria dry weight (dw) of 42.5 kt. The content of N, P and organic matter in Taihu lake was determined to be 6.7%, 0.68% and 76.7%, respectively. The corresponding removal was 2850 t, 290 t and 32.6 kt, respectively. The algal mud obtained from algal water separation has been used as raw material for biogas and organic fertilizer production or dried and sold to the United States for bioplastics production, but the processing capacity is very limited. The rapid decay caused by the accumulation of remaining cyanobacteria often leads to new environmental pollution.</TRp>
   <TRp TRkey='5b59ea97c5'>According to the head of the Yangwan algae water separation station, by 2018, due to the adjustment of national policies and the impact of cost and market factors, biogas conversion, organic fertilizer production, plastic raw materials and other subsequent treatment methods have been banned. Wuxi municipal government had to carry out cyanobacterial sludge treatment through uniformly mixing with waste incineration. This method is disadvantageous for its high cost and serious secondary pollution.</TRp>
   <TRp TRkey='a73fb976ad'>Increasing efforts to remove cyanobacteria is one of the main measures to reduce the number of cyanobacteria and control the outbreak of cyanobacteria in the future. The algal water separation capacity was increased by 50,000-100,000 m<sup>3</sup>/d (containing 0.5% algal rate) in Meiliang Lake in the northern bay of Taihu lake and Yixing in the west. The algae collecting and blocking system was built in different zones and the blue algae were removed in different areas.</TRp>
   <TRp TRkey='036cc0f316'>If the project is carried out smoothly, it is estimated that 10 million tons of algal mud can be treated every year and 1 million tons of effective degradation products can be produced to effectively replace 1 million tons of high-quality feed. Therefore, the dependence of feed on existing crops can be effectively reduced while the cost of feed can be reduced. More importantly, the environmental pollution of algae can be effectively treated.</TRp>
   <TRH3 TRkey='0dcfe034f8'>Feed Protein</TRH3>
   <TRp TRkey='5aae235919'>The cyanobacterial feed protein produced in this project is a powerful substitute for traditional feed protein such as soybean and fish meal.</TRp>
   <TRp TRkey='e34cba8ec2'>Cyanobacteria is an internationally recognized protein source of high quality. Most cyanobacteria have protein levels above 55%, higher than soy or even lean pork. The protein content of spirulina is as high as 68%, and it is rich in various trace elements, which is called by the United Nations food and agriculture organization as "the best food resource and future food for mankind". Moreover, the main components of the degradation products of cyanobacteria in this project are small peptides, which are more conducive to animal absorption and have higher nutritional value.</TRp>
   <TRp TRkey='0d7561af04'>In terms of raw material supply, take Taihu Lake as an example, the reserves of cyanobacteria are more than 100 million tons, that is, the dry weight of cyanobacteria can reach more than 10 million tons. In Wuxi alone, more than 1.5 million tons of cyanobacteria were recovered in 2018, according to the cyanobacteria control office of the Wuxi water resources bureau. The main limiting factor of fishing amount is not the capacity and the total amount of cyanobacteria in the lake, but the lack of subsequent garbage incineration treatment capacity. There are actually far more cyanobacteria in the lake. Therefore, the supply of cyanobacteria sludge, the raw material of cyanobacteria feed protein ingredients produced by this project group, is stable, and directly helps solve the current difficulty of cyanobacteria pollution control - cyanobacteria harmless treatment.</TRp>
   <TRH3 TRkey='6eb6cffb1b'>Enzyme preparation for cyanobacteria treatment</TRH3>
   <TRp TRkey='13eee75978'>At present, the international market has no such type of products. The relevant biological agents on sale are mainly cyanobacteria growth inhibitors, such as microbial preparations, enzyme preparations and algophage (algal virus).</TRp>
   <TRp TRkey='e68b7bef80'>Effective microbial preparations mainly include photosynthetic bacteria, yeast, and environmental effective microbial agents (EM) (composed of bacillus, yeast, lactic acid bacteria, actinomycetes, and pseudomonas bog). In recent years, many domestic scholars used EM bacteria, lactic acid bacteria and photosynthetic bacteria to control cyanobacteria bloom and obtained good experimental results. Effective microbial agents work mainly by inhibiting the growth of cyanobacteria or breaking up cyanobacteria cells through special microorganisms. However, this method cannot effectively degrade algal toxins, so it cannot be used continuously on a large scale.</TRp>
   <TRp TRkey='f1679b4643'>The main component of the enzyme preparation is cyanobacteria lytic enzyme, which has the characteristics of specificity (killing cyanobacteria only), high efficiency (effective in two or three days), non-toxic and low damage (killing cyanobacteria in the whole pond causes hypoxia), low recurrence rate, and long duration of effect (at least 20 days, basically no recurrence after high temperature). But because of its high cost and inability to break down algal toxins, it cannot be used widely.</TRp>
   <TRp TRkey='2338bdd1cf'>Algophage (algal virus) is a planktonic virus group with cyanobacteria as its host. It has an important ecological status because it can specifically infect cyanobacteria and is a potential control factor of cyanobacteria "bloom". However, the research on phage is still in its infancy. It is necessary for researchers to make continuous efforts to gradually raise the research of algae virology to the international level. At present, the related products on the international market cannot effectively remove algal toxins from water bodies.</TRp>
   <TRp TRkey='36e90e7871'>Among the three types of products, microbial preparations account for the largest market share, followed by enzyme preparations, and finally, algophage. However, as the cost of biological agents is higher than the original production cost of the algae removal industry, they cannot be widely marketed and the industry competitiveness is weak.</TRp>
   <TRH2 TRkey='a7e90252ff'>Time Plan</TRH2>

   <Timeline style={{ paddingLeft: '2em', paddingRight: '2em' }} mode='alternate'>
      <Timeline.Item dot={<Icon type='clock-circle-o' />} style={{ fontSize: '20px' }}>
         <span style={{ fontSize: '24px' }}>2019</span>
      </Timeline.Item>
      <Timeline.Item color='red'><span style={{ fontSize: '16px' }}>To complete the preparation work of the enterprise, and establish the corresponding rules and regulations on personnel and salary.</span></Timeline.Item>
      <Timeline.Item color='green'><span style={{ fontSize: '16px' }}>Complete the hardware equipment and materials preparation of the laboratory, and realize the phased experimental deployment of r&d technology; Fully grasp the principles, signal pathways and digestive mechanism of proteome digestion in amphioxus.</span></Timeline.Item>
      <Timeline.Item color='blue'><span style={{ fontSize: '16px' }}>The expected sales revenue of the equipment is 1.5 million yuan.</span></Timeline.Item>
      <Timeline.Item><span style={{ fontSize: '16px' }}>R&D and main functional team size: 6 people.</span></Timeline.Item>

      <Timeline.Item dot={<Icon type='clock-circle-o' />} style={{ fontSize: '20px' }}>
         <span style={{ fontSize: '24px' }}>2020</span>
      </Timeline.Item>
      <Timeline.Item color='red'><span style={{ fontSize: '16px' }}>Complete the establishment of demonstration projects in Taihu Lake through cooperation with relevant environmental regulatory authorities. The cyanobacteria degradation plant is to be first put in use in Taihu lake.</span></Timeline.Item>
      <Timeline.Item color='green'><span style={{ fontSize: '16px' }}>The high-protein nutrients obtained from the degradation of cyanobacteria are sold to animal farms and fisheries.</span></Timeline.Item>
      <Timeline.Item color='blue'><span style={{ fontSize: '16px' }}>It is estimated that the amount of blue-green algae gained from Taihu lake will reach 10 million tons. A million tons of finished biological agents are needed.</span></Timeline.Item>
      <Timeline.Item><span style={{ fontSize: '16px' }}>Sales revenue of 10 million yuan and profit of 9 million yuan.</span></Timeline.Item>
      <Timeline.Item><span style={{ fontSize: '16px' }}>R&D and main functional team size: 10 people.</span></Timeline.Item>


      <Timeline.Item dot={<Icon type='clock-circle-o' />} style={{ fontSize: '20px' }}>
         <span style={{ fontSize: '24px' }}>2021</span>
      </Timeline.Item>
      <Timeline.Item color='red'><span style={{ fontSize: '16px' }}>After the successful test at Taihu lake, the industrial application of the project will be promoted. Cooperate with several environmental protection technology companies around Taihu lake to innovate basic equipment technology and produce biological agents; Promote the project in Jiangsu province.</span></Timeline.Item>
      <Timeline.Item color='green'><span style={{ fontSize: '16px' }}>It is expected that the amount of cyanobacteria gained from Jiangsu waters will reach 30 million tons, and the finished products of biological agents will reach 3 million tons. The sales income of equipment is to reach 50 million yuan. The income of process improvement is to reach 1.5 million yuan, and the profit is predicted to exceed 55 million yuan.</span></Timeline.Item>
      <Timeline.Item color='blue'><span style={{ fontSize: '16px' }}>The size of scientific research and main functional teams is 20 people.</span></Timeline.Item>


      <Timeline.Item dot={<Icon type='clock-circle-o' />} style={{ fontSize: '20px' }}>
         <span style={{ fontSize: '24px' }}>2022-2023</span>
      </Timeline.Item>
      <Timeline.Item color='red'><span style={{ fontSize: '16px' }}>Strengthen the construction of R&D team. Enhance the degradation effect of biological agents.</span></Timeline.Item>
      <Timeline.Item color='green'><span style={{ fontSize: '16px' }}>Promote projects in major waters around the world. Open up the market of cyanobacterial biodegradable animal feed in various regions.</span></Timeline.Item>
      <Timeline.Item color='blue'><span style={{ fontSize: '16px' }}>Formulate industry standards and norms.</span></Timeline.Item>
      <Timeline.Item color='blue'><span style={{ fontSize: '16px' }}>The estimated annual sales revenue is 115.5 million yuan and the profit exceeds 113.5 million yuan.</span></Timeline.Item>
      <Timeline.Item color='blue'><span style={{ fontSize: '16px' }}>The team size reaches 30 people.</span></Timeline.Item>
   </Timeline>

   <TRH2 TRkey='82bcfafc2a'>Team</TRH2>
   <ImageWithShadow noShadow src={assets.pages.Entrepreneurship.fig1$png} width='70%' />

   <TRp TRkey='77f9d06675'><i>Senior Professional Consultant</i> - <b>Zuhong Lu</b></TRp>
   <div style={{ paddingLeft: '1em' }}>
      <TRp TRkey='22ffb5d641'>Southeast university, School of Biological Science and Medical Engineering, director and researcher of State Key Laboratory of Bioelectronics, research field is bioelectronics.</TRp>
      <TRp TRkey='5bf0d20995'>9/1984-10/1988, department of biological science and medical engineering, southeast university, Doctor, supervisor: Yu Wei.</TRp>
      <TRp TRkey='06377b538b'>1982/3-1984/7, Nanjing Institute of Technology (Southeast University), Department of Electronic Engineering, Master, supervisor: Zhengqing Tang.</TRp>
      <TRp TRkey='caba3fa351'>1978/2-1982/1, Department of Electronic Engineering, Nanjing Institute of Technology (Southeast University), Bachelor's degree, supervisor: Baosong Ruan.</TRp>
   </div>

   <TRp TRkey='a3416457db'><i>General Manager</i> - <b>Ruijing Zhang</b></TRp>
   <div style={{ paddingLeft: '1em' }}>
      <TRp TRkey='c24fa496fb'>Responsible for the operation direction and decision making of the whole company, responsible for the company.</TRp>
   </div>

   <TRp TRkey='a3416457db'><i>Professional Adviser</i> - <b>Chunpeng He</b></TRp>
   <div style={{ paddingLeft: '1em' }}>
      <TRp TRkey='c24fa496fb'>Responsible for technical support and technical improvement, provide technical guidance for the research and development of the project.</TRp>
   </div>

   <TRp TRkey='c3b983b283'><i>R&D Department</i></TRp>
   <div style={{ paddingLeft: '1em' }}>
      <TRp TRkey='c01615f97d'>Responsible for the r&d and production of biological agents and the design and promotion of enterprise process improvement.</TRp>
   </div>

   <TRp TRkey='5a844fa8e4'><i>Finance Department</i></TRp>
   <div style={{ paddingLeft: '1em' }}>
      <TRp TRkey='02ad4f951e'>Responsible for the financial status of the company's assets and daily operating income.</TRp>
   </div>

   <TRp TRkey='72594d81e0'><i>Operation Department</i></TRp>
   <div style={{ paddingLeft: '1em' }}>
      <TRp TRkey='aa31bd1cd1'>Responsible for the laying of sales channels and the development of sales markets.</TRp>
   </div>

   <TRH2 TRkey='86673b4c39'>Partners</TRH2>
   <TRp TRkey='831e3e45d1'>At present, Wuxi Delinghai Environmental Protection Technology co., LTD. uses physical water separation and integration technology and mechanical treatment of cyanobacteria on the basis of a number of mature technologies for integrated improvement and innovation, mature, advanced, effective, low consumption, efficient, safe and practical. It is a major breakthrough in the field of cyanobacteria control, which has broad application prospects and achieves three effects: large-scale removal of cyanobacteria, rapid and effective emergency removal of large areas of high concentration bloom formed by cyanobacteria outbreak, and prevention of damage to water ecology and water environment caused by the decay of cyanobacteria, with the removal rate of algae >95%; A large amount of nitrogen and phosphorus away, reduce the nutrient load in the water body and improve the water quality. The removal and reuse of algal water can improve the transparency of water body, improve the landscape of water body and create preconditions for the restoration of lake ecology.</TRp>
</>);

export const body = {
   title: 'Entrepreneurship',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Product', path: '/Product_Design' },
      { text: 'Entrepreneurship', path: '/Entrepreneurship' },
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
