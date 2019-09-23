import React from 'react';
import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import { assets } from '../../assets-path.json';

export const body = {
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Project', path: '/Description' },
      { text: 'Description', path: '/Description' },
   ],
   editors: [
      {
         name: 'Chengyu Fu', hash: '#chengyu-fu',
         nameAbbr: 'CF', avatar: assets.avatars.ChengyuFu32x32$png,
      },
   ],
   lastModified: '3 days ago',
   content: (<>
      <TRH2 TRkey='ed17e92169'>Why is it so urgent to deal with algae bloom?</TRH2>
      <TRp TRkey='b23cf444ac'>As a highly reproducible algae, Cyanobacteria (blue-green algae) can reproduce infinitely as long as there is adequate nutrition, which leads to the outbreak of Cyanobacteria all over the world. Under the background of global warming and ocean acidification, large scale of Cyanobacteria bloom-forming is unavoidable. Not only responsible for water quality deterioration, landscape destroy and foul smell emission, Blue-green algae bloom is also accused of blocking gas exchange between water and air, causing serious death of aquatic organisms.</TRp>
      <TRp TRkey='5604ddd0bd'>Although a lot of resources and fund have been put on the treatment of algae bloom, the idea of early prevention and control has no ideal effect at present. On the one hand, there’s no single biological, chemical or physical method can reduce the level of nitrogen and phosphorus nutrients in water effectively. On the other hand, recent records of Great Lakes have proven that there’s no direct positive correlation between outbreaks of Cyanobacteria and the quantity of wastewater effluent, which overturns the conventional idea and makes precautionary measures undependable.</TRp>
      <TRp TRkey='64d1330b01'>That’s why we turn to comprehensive treatment after outbreaks and look for the wisdom from nature itself.</TRp>
      <TRH2 TRkey='2d4a1e3726'>Which places are suffering from the algae bloom?</TRH2>
      <TRp TRkey='a29e54dda3'>People all over the world are facing the severe challenge brought by algae bloom.</TRp>
      <TRH2 TRkey='9fbad80cf7'>Where did our inspiration come from?</TRH2>
      <TRp TRkey='1d15d8ca54'>‘From nature, to nature’, we always believe.</TRp>
      <TRp TRkey='9d63e57a80'>Although the cyanobacteria have already provided us with many environment problems, we believe it is still possible to turn it into something useful. The cyanobacteria are rich in nutrients, but they have not been well used because of their strong cell walls and difficult to remove algae toxins.</TRp>
      <TRp TRkey='30c45f4ee2'>The best choice for nature problem is always hide in nature itself. Recently, we have found that the unique intracellular digestion mechanism of the Branchiostoma can degrade algae into nutrients such as amino acids and polysaccharides, and it can effectively degrade harmful substances such as algal toxins. This discovery provides a new perspective and feasible ideas for the development of algae resources.</TRp>
      <TRH2 TRkey='be539a1c7c'>What’s our core ideas?</TRH2>
      <TRp TRkey='e33d3c8729'>Branchiostoma digest tract epithelial cells through the powerful digestion and immune function gene group, not only can directly degrade algae into amino acids, oligopeptides, oligosaccharides, oligonucleotides, fatty acids, vitamins and trace elements in the cell, and it can effectively degrade harmful substances such as algal toxins and achieve the purpose of directly converting algae into absorbable and non-toxic nutrients. Using is better than abandoning. According to our expectation, we can make cyanobacteria, which we once consider useless, become a huge fortune.</TRp>
      <TRp TRkey='3def8b3456'>The main feature of this project is ‘from nature, to nature’. We are focusing on the existing method in the natural world to solve ecological problems. On the one hand, the mechanism we used is clear, simple and efficient; on the other hand, the ecological security risks are low. Compared with the risk of introducing a foreign genome into the potential of conventional genetic engineering methods, the project adopts the idea of engineering production of functional proteins, which constitutes a high-efficiency reagent, and does not invest any external source into the ecosystem while efficiently treating cyanobacterial pollution.</TRp>
      <TRp TRkey='436f2dc5bf'>From salvage to use, we are moving on.</TRp>
      <TRH2 TRkey='0abc4626ce'>How do we make it true?</TRH2>
      <TRp TRkey='50fcc68c9a'>Because of the rareness of lancelet, genetic engineering is used to amplify the proteome of its internal digestive function.</TRp>
      <TRp TRkey='847eabe853'>The full-field functional proteomic library of lancelet cecum epithelial cells which were constructed in vitro was sequenced with PacBio third-generation sequencing. The main effective components of the library were then annotated and analyzed by databases including Blastn, Blastx, SWISSPROT, KEGG, COG, Interpro and GO.</TRp>
      <TRp TRkey='10ac07e846'>Methods of artificial intelligence and bioinformatics are combined to further analyze and simplify the proteome. Libraries of the main functional genes of internal digestion mechanism are built after redundant genes are removed. Crosswise comparison with the digestive functional proteomes such as external digestion cathepsin of analogous species and analysis of special domains will be carried out to screen specific proteins. We will focus on protein products of genes like ferritin, VCBPs, and Big defensin, including the reaction rate, conditions (temperature, pressure and pH) and mechanism with harmful substances such as algal toxin. These parameters will be input into a model of convolutional neural network to determine several core proteins.</TRp>
      <TRp TRkey='24e30fe1f4'>Gradient experiments will be conducted to explore the optimum reaction ratio and reaction conditions, which can lay the foundation of future industrialization.The processes involved in the digestion of cyanobacteria include cell walls breaking, tissue digestion, oxidation, sugar digestion and algal toxin degradation. Genetic engineering is used to construct plasmin with a positive feedback system to transcribe and translate the chosen genes in large quantities. Ion-mediated promoter and several repeated expression sequence will be inserted into E. coli using CRISPR/Cas9 so the biosynthetic pathway of core internal digestive protein can be built. During this procedure, the previous designing experience and data of BioBrick will be considered to reduce time and expense.</TRp>
      <TRH2 TRkey='1e74264552'>What’s our future plan?</TRH2>
      <TRp TRkey='ab5d5bbaea'>Once the method is proved efficiently in laboratory, We intend to combine with the demonstration project of algae pollution control in Tai Lake, Jiangsu Province and integrate algae fishing and treatment equipment such as algae killing wells, algae-water separation stations and algae digestion ponds, so as to make the degradation liquid reach the level of engineering application. Only by doing so can we achieve the ultimate goal of protecting Earth with our own strength.</TRp>
   </>),
};
