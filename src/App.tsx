import React from 'react';

import './css/reset.css';
import './css/fonts.scss';
import './css/root.css';

import { assets } from './assets-path.json';
import Cover from './comps/Cover';
import Header from './comps/Header';
import DocPage from './pages/DocPage';
import { initTheme } from './pages/theme';
import H2 from './comps/H2';

export default class App extends React.Component<{}, {}> {
   public componentDidMount() {
      initTheme();
   }
   public render() {
      const content = (<>
         <H2>Why is it so urgent to deal with algae bloom?</H2>
         <p>
            As a highly reproducible algae, Cyanobacteria (blue-green algae) can reproduce infinitely as long as
            there is adequate nutrition, which leads to the outbreak of Cyanobacteria all over the world.
            Under the background of global warming and ocean acidification, large scale of Cyanobacteria bloom-forming
            is unavoidable. Not only responsible for water quality deterioration, landscape destroy and foul smell
            emission, Blue-green algae bloom is also accused of blocking gas exchange between water and air, causing
            serious death of aquatic organisms.
         </p>
         <p>
            Although a lot of resources and fund have been put on the treatment of algae bloom, the idea of early
            prevention and control has no ideal effect at present. On the one hand, there’s no single biological,
            chemical or physical method can reduce the level of nitrogen and phosphorus nutrients in water effectively.
            On the other hand, recent records of Great Lakes have proven that there’s no direct positive correlation
            between outbreaks of Cyanobacteria and the quantity of wastewater effluent, which overturns the conventional
            idea and makes precautionary measures undependable.
         </p>
         <p>
            That’s why we turn to comprehensive treatment after outbreaks and look for the wisdom from nature itself.
         </p>

         <H2>Where did our inspiration come from?</H2>
         <p>
            ‘From nature, to nature’, we always believe.
         </p>
         <p>
            Although the cyanobacteria have already provided us with many environment problems, we believe it is still
            possible to turn it into something useful. The cyanobacteria are rich in nutrients, but they have not been
            well used because of their strong cell walls and difficult to remove algae toxins.
         </p>
         <p>
            The best choice for nature problem is always hide in nature itself. Recently, we have found that the unique
            intracellular digestion mechanism of the Branchiostoma can degrade algae into nutrients such as amino acids
            and polysaccharides, and it can effectively degrade harmful substances such as algal toxins. This discovery
            provides a new perspective and feasible ideas for the development of algae resources.
         </p>

         <H2>What’s our core ideas?</H2>
         <p>
            Branchiostoma digest tract epithelial cells through the powerful digestion and immune function gene group, not
            only can directly degrade algae into amino acids, oligopeptides, oligosaccharides, oligonucleotides, fatty acids,
            vitamins and trace elements in the cell, and it can effectively degrade harmful substances such as algal toxins
            and achieve the purpose of directly converting algae into absorbable and non-toxic nutrients. Using is better
            than abandoning. According to our expectation, we can make cyanobacteria, which we once consider useless, become
            a huge fortune.
         </p>
         <p>
            The main feature of this project is ‘from nature, to nature’. We are focusing on the existing method in the natural world to solve ecological problems. On the one hand, the mechanism we used is clear, simple and efficient; on the other hand, the ecological security risks are low. Compared with the risk of introducing a foreign genome into the potential of conventional genetic engineering methods, the project adopts the idea of engineering production of functional proteins, which constitutes a high-efficiency reagent, and does not invest any external source into the ecosystem while efficiently treating cyanobacterial pollution.
         </p>
         <p>
            From salvage to use, we are moving on.
         </p>
      </>);
      return (
         <div id='App'>
            <Cover
               imgUrl={assets.cover.saplings3$jpg}
               tbimgUrl={assets.cover.tnSaplings3$jpg}
               title='Description'
            />

            <Header />
            <DocPage
               hasAside
               hasInfobar
               hasRating
               pageLocation={[
                  { text: 'Home', path: '/' },
                  { text: 'Project', path: '/Description' },
                  { text: 'Description', path: '/Description' },
               ]}
               editors={[
                  {
                     name: 'Chengyu Fu', hash: '#chengyu-fu',
                     nameAbbr: 'CF', avatar: assets.avatars.ChengyuFu32x32$png,
                  },
               ]}
               lastModified='3 days ago'
               content={content}
            />
         </div>
      );
   }
}
