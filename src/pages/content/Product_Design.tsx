import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
// import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
// import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';

// import './css/Empty.scss';
// import { ImageWithShadow } from './comps/ImageWithShadow';
// import { Link } from './comps/Link';

const content = (<>
   <TRH2 TRkey='41b9056953'>Review</TRH2>
   <TRp TRkey='21561d0b7a'>In this project, we developed a new mixed enzyme preparation for degrading blue algae in Lake Taihu. Its genetic background is from amphioxus, a special edible algae marine organism. The enzyme preparation is a mixture of 28 highly expressed recombinant proteins based on synthetic biology and genetic engineering. And it can degrade cyanobacteria and other algae in 24 hours according to the ratio of 1:500-1000 (dry-weight ratio), completely remove the algae toxins, and transform cyanobacteria into absorbable nutrients mainly consisting of small peptides, thus solving the worldwide problem from cyanobacteria pollution control to cyanobacteria resource utilization.</TRp>
   <TRp TRkey='4b77c87806'>At present, the main way to control harmful algae bloom is incineration and landfill, which is obviously least environmentally friendly and in low efficiency. Due to that, we aim at converting cleaning algae into using algae as feed protein. We use the mixed enzyme preparation to degrade cyanobacterial algae mud to produce feed protein since cyanobacteria has a protein content over 60%. Through this work, the pollution of the past has become a treasure. We believe with commercial stimulation, the algae treatment progress will be highly accelerated. With our techniques, the cleaning cost can be reduced, and at the same time the producing cost of feed protein will be less than half of the traditional cost. We believe that environmental protection work can also be completed in the business closed-loop, and can also be sustainable, industrialized and efficient.</TRp>


   <TRH2 TRkey='fdf30b7010'>Product Introduction</TRH2>
   <TRp TRkey='41a45df4c8'>Our first product is cyanobacteria feed protein, which is a powerful substitute for traditional soybean feed protein. Because cyanobacteria are high quality protein and the main component of its degradation products is small peptide, the nutritional value and absorbability of cyanobacteria are higher than those of traditional feed protein.</TRp>

   <ImageWithShadow src={assets.pages.ProductDesign.fig1$jpg} width='70%' />

   <TRp TRkey='77184b4424'>The second product is new enzyme preparation, which is used to degrade cyanobacteria and algae toxins in cyanobacteria. Harmless treatment of cyanobacteria after fishing is a worldwide problem. The enzymes of this project group can simultaneously solve the two core problems of cyanobacteria resource utilization, namely, the difficulty of breaking the wall of cyanobacteria and the difficulty of degrading algae toxins. They have broad application prospects and market demands in the development of lakes and marine cyanobacteria resources worldwide.</TRp>
   <TRp TRkey='b90ebe1565'>After the outbreak of cyanobacteria in 2019, we collected the cyanobacteria samples. This picture is the whole process of laboratory treatment of turning cyanobacteria into high quality feed in Taihu Lake. </TRp>
   <ImageWithShadow src={assets.pages.ProductDesign.fig2$jpg} width='70%' />


   <TRH2 TRkey='be5be568ff'>Technology Demonstration</TRH2>
   <TRp TRkey='c1385f67dd'>Our key technology is listed below.</TRp>
   <div className='doc-list'>
      <div className='doc-list-item'>
         <div>1</div>
         <div>
            <TRp TRkey='b962e39fe4'>Pacbio's third generation high throughput sequencing technology and associated bioinformatics analysis technology.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>2</div>
         <div>
            <TRp TRkey='71ba0081f9'>Full-length proteomic library preparation technology based on pYES-DEST52 vector.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>3</div>
         <div>
            <TRp TRkey='6f334f93c9'>Relying on the full-field transcriptome mass expression technology and product extraction technology of INVSC1 Saccharomyces cerevisiae.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>4</div>
         <div>
            <TRp TRkey='233b7f73cd'>Full-length gene synthesis technology.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>5</div>
         <div>
            <TRp TRkey='b247896f95'>Engineering technology of INVSC1 Saccharomyces cerevisiae fermentation.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>6</div>
         <div>
            <TRp TRkey='3c57564b99'>Engineering technology of algae degradation and digestion.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>7</div>
         <div>
            <TRp TRkey='919d6554d0'>2-D-PAGE protein two-dimensional electrophoresis.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>8</div>
         <div>
            <TRp TRkey='8ff02351c1'>Mass spectrometry detection technology, etc.</TRp>
         </div>
      </div>
   </div>

   <TRp TRkey='040e3112d9'>The complete technical route is as follows.</TRp>

   <div className='doc-list'>
      <div className='doc-list-item'>
         <div>1</div>
         <div>
            <TRp TRkey='877f043c88'>Anatomy of the cecum tissue of amphioxus;</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>2</div>
         <div>
            <TRp TRkey='4ee5504333'>Total RNA was extracted.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>3</div>
         <div>
            <TRp TRkey='f8bc76bfe5'>RNA was extracted from total RNA.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>4</div>
         <div>
            <TRp TRkey='83d5b8698a'>The first strand was synthesized from the 3'end, the DNA/RNA heterozygote was digested by Rnase I, the full-length cDNA was captured by 5'end Cap specific antibody and magnetic bead method, the full-length cDNA was washed and the second strand was constructed from the 5'end. The obtained double-stranded DNA was constructed for library construction and high-throughput sequencing, and the full-length cDNA was constructed by pYES-DEST52 vector and Gateway homologous recombination method. Long-function proteomic library, high-throughput sequencing.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>5</div>
         <div>
            <TRp TRkey='8e0a3e2434'>The recombinant vector was introduced into Saccharomyces cerevisiae, and the functional proteome was expressed on a large scale, and the functional proteome expression products were extracted.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>6</div>
         <div>
            <TRp TRkey='a4cb5668bf'>The algae were degraded by mixing 1:1,000 with blue algae in Taihu Lake. After 24 hours of 60 rpm rotation, the degradation state of degradation products was detected.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>7</div>
         <div>
            <TRp TRkey='b43cbfd6b2'>The degradation effect of degradation products was tested by LC-MS. It was found that over 90% of degradation products were oligosaccharides, oligopeptides and amino acids with molecular weight less than 300 Daltons, and no algae toxin was found.</TRp>
         </div>
      </div>
      <div className='doc-list-item'>
         <div>8</div>
         <div>
            <TRp TRkey='30fb25d703'>Extraction of degradation products for feed industry application</TRp>
         </div>
      </div>
   </div>

   <TRp TRkey='59aebebfd4'>The picture is the overall technical process of construction, sequencing, analysis and application of endodigestive proteomic Library. </TRp>
   <TRp TRkey='77086efe67'>This project combines with the demonstration project of algae pollution control in Taihu Lake, integrates algae fishing and treatment equipment such as algae killing well, algae water separation station and algae digestion tank, so that the expression products of endogenous digestive proteomic library can reach the level of Engineering application. Subversive changes will take place in controlling ecological and environmental pollution, feeding industry structure and agricultural industry structure. We have sent the products of this project to the relevant water environment management department of Wuxi for the degradation experiment of cyanobacteria. The feedback from this department is that the degradation has achieved results. At present, we are sending the degradation products to the relevant domestic testing departments, waiting for the test results.</TRp>


   <TRH2 TRkey='3709a3155a'>Social Impact</TRH2>
   <TRp TRkey='f6b923f822'>The frequent occurrence of algae blooms is the result of increasing eutrophication and deteriorating aquatic ecological environment. Its huge biomass will cause secondary pollution of water. Cyanobacteria can cause anoxia, suffocation and death of aquatic animals, and also affect the production of waterworks and the quality of tap water, destroying the water landscape. It is worth noting that the harm caused by cyanobacteria goes far beyond that. Cyanobacteria also produce and secrete secondary metabolites, such as toxins and odor compounds. Toxins can cause poisoning of aquatic and some terrestrial animals, and may endanger human health. Odorants and compounds can seriously affect the quality of drinking water and aquatic products, causing serious economic losses.</TRp>
   <TRp TRkey='0801bcc338'>In recent years, the global water environment has been increasingly affected by cyanobacteria. Many news reports have reported that the waters of different regions in the world are affected by different degrees of odor, which seriously affects people's normal life. If the relevant research results can be successfully transformed, it will have a revolutionary impact on human destiny community from three aspects: ecological and environmental governance, feed industry structure and agricultural industry structure. Not only will the pollution of cyanobacteria be effectively solved, but also the related degradation products of cyanobacteria will be soybean meal, meat and bone meal and fish meal. Powerful, low-cost and high-quality substitutes for ingredients will have a fundamental impact on the proportion of food and cash crops in the agricultural sector, which will help to promote a rapid solution to global hunger.</TRp>
   <TRp TRkey='cbaaa52ca4'>If the effective control of cyanobacteria is still not universal, the consequence of cyanobacteria outbreak is to cause industrial shutdown and water shutdown of residents, which will cause great economic losses. Therefore, the relevant control measures of our project can reduce the government's financial expenditure on cyanobacteria control, and at the same time develop the local tourism industry and tertiary industry rapidly, upgrade the local economy. Clean environment is a welfare for everyone.</TRp>

</>);

export const body = {
   title: 'Product Design',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Product', path: '/Product_Design' },
      { text: 'Product Design', path: '/Product_Design' },
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
