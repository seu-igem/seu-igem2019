import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRp from './comps/TRp';
import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

import './css/Description.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList } from './comps/DocList';

const WorldmapBtn: React.FC<{
   i: string; x: string; y: string;
   onClick: (i: string) => void;
   componentRef: (el: HTMLDivElement) => void;
}> = props => {
   return <div
      ref={props.componentRef}
      className='worldmap-btn'
      style={{
         left: props.x + '%',
         top: props.y + '%',
      }}
      onTouchStart={() => props.onClick(props.i)}
      onMouseDown={() => props.onClick(props.i)}
   >
      <div></div>
      <div></div>
   </div>;
};

class WorldmapItem extends React.PureComponent<{
   i: string; x: string; y: string; headline: string;
}> {
   private $btn: HTMLDivElement;
   public state = {
      isBubbleVisible: false,
   };
   private onClickBtn = (i: string) => {
      this.setState({
         isBubbleVisible: true,
      });
   }
   private onDismiss = () => {
      this.setState({
         isBubbleVisible: false,
      });
   }
   public componentDidMount() {
      const preload = new Image();
      preload.src =
         (assets as any)
            .pages
            .Description['pollutedWater' + this.props.i + '$jpg'];
   }
   public render() {
      const { i, x, y, headline } = this.props;
      return <>
         <WorldmapBtn i={i} x={x} y={y} onClick={this.onClickBtn} componentRef={el => this.$btn = el} />
         {this.state.isBubbleVisible &&
            <TeachingBubble
               illustrationImage={{
                  src: (assets as any).pages.Description['pollutedWater' + i + '$jpg'],
                  alt: '',
                  imageFit: ImageFit.centerCover,
                  width: 364,
                  height: 240,
                  shouldFadeIn: true,
               }}
               primaryButtonProps={{
                  children: 'Got it',
                  onClick: this.onDismiss,
               }}
               headline={headline}
               target={this.$btn}
               onDismiss={this.onDismiss}
               theme={lightTheme}
            >{this.props.children}</TeachingBubble>
         }
      </>;
   }
}

export const body = {
   title: 'Description',
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
   lastModified: 'October 19, 2019',
   content: (<>
      <TRH2 TRkey='01042c3046'>Algae bloom: unavoidable trend</TRH2>
      <TRp TRkey='2cf54e3898'>An algae bloom is a rapid increase or accumulation in the population of algae in freshwater or marine water systems and is often result in serious ecosystem problem. Water eutrophication and global warming make harmful algae bloom (HAB) an unavoidable trend and worldwide pollution, especially in developing countries.</TRp>
      <TRp TRkey='21d8254bdc'>With the population living along the water body increasing, the total amount of domestic sewage cannot get effectively controlled, which makes water eutrophication an irreversible trend. For example, in the Lake Taihu Basin, the population has grown by 15 million and the GDP has tripled during the last decade. Although the local government have taken a series of measures including factory elimination, sewage interception and ecological restoration, the water quality are still between mild and moderate eutrophication. The seasonal outbreak of cyanobacteria is subsequently unavoidable.</TRp>
      <TRp TRkey='cb584235ad'>Furthermore, the reason why algae blooms happen is still unsettling in academic fields. “Climate change is a potent catalyst for the further expansion of these blooms.”, citing Hans W. Paerl from Science. The previous premise believes that P is the limiting factor in freshwater productivity and harmful algal bloom formation. However, reducing P is no longer adequate for many lakes. Recent studies indicate algal proliferation in response to combined nitrogen (N) and P additions, or in some cases, the addition of only N. This shift in the freshwater nutrient management paradigm has important implications. Too many affecting factors make it almost impossible to conduct single variable-controlling method to find out the most significant one and control it to minimum the impact.</TRp>
      <ImageWithShadow src={assets.pages.Description.fig1$jpg} width='65%'
         caption={<><b>Figure 1.</b> Algae bloom in Chao Lake, China, 2015<br />Cited from China Youth Daily</>} />

      <TRH2 TRkey='db3e5f044f'>Harmful algae bloom: a challenge all around the world</TRH2>
      <TRp TRkey='8662c73630'>Harmful algae blooms (HAB) in lakes drives water-quality deterioration. The August 2014 water supply shutdown from Lake Erie to over 500,000 residents in Toledo, Ohio, highlights this problem. The similar situation also happened in Lake Taihu in 2007, posing severe hazard to living conditions. Harmful algae blooms threaten many aquatic ecosystems worldwide, including Lake Victoria in Africa, Lake Erie in North America, Lake Taihu in China, and the Baltic Sea in Europe as shown in <span style={{ color: '#00b0f0' }}>Figure 2</span>.</TRp>

      <div id='dsp-worldmap'>
         <div id='dsp-worldmap-imgcontainer'>
            <img
               src={assets.pages.Description.descWorldMap$png}
               alt='A world map identifying the site of the cyanobacterial outbreak.'
            />
            <div></div>
         </div>
         <div id='dsp-worldmap-btncontainer'>
            <WorldmapItem i='1' x='57' y='58'
               headline='Lake Victoria, Africa'
            >
               <p>
                  In 2004, a toxic algae bloom on Lake Victoria temporarily suspended water supplies for Kisumu, Kenya,
                  home to nearly 500,000 people.
               </p>
               <p>
                  Photo courtesy Nikki McLeod via Flickr Creative Commons.
               </p>
            </WorldmapItem>

            <WorldmapItem i='2' x='23' y='33'
               headline='Lakes Erie, US-Canada'
            >
               <p>
                  Microcystis-dominated bloom on Lake Erie, 2011, covering 67% of the lake area.
               </p>
               <p>
                  Photograph by Peter Essick posted by National Geographic.
               </p>
            </WorldmapItem>

            <WorldmapItem i='4' x='79.8' y='42'
               headline='Lake Taihu, China'
            >
               <p>
                  In 2007, more than 2 million people living in Wuxi, China, went without piped drinking
                  water—some for longer than a week—after a bloom of the algae on Lake Taihu overwhelmed
                  the city’s water plant.
               </p>
               <p>
                  Credit: Hans Paerl, University of North Carolina.
               </p>
            </WorldmapItem>

            <WorldmapItem i='5' x='85' y='39'
               headline='Lake Biwa, Japan'
            >
               <p>
                  The water quality of Lake Biwa started to deteriorate in the 1960's, resulting in
                  algal blooms and red tides. Since then local residents and the local government have
                  strived to improve the water quality, mostly by banning synthetic washing powders and
                  improving the sewerage system.
               </p>
               <p>
                  Photograph posted online.
               </p>
            </WorldmapItem>

            <WorldmapItem i='6' x='53' y='24'
               headline='The Baltic Sea, Northern Europe'
            >
               <p>
                  Vast algal blooms in northern Europe’s Baltic Sea fuel annual aquatic dead zones,
                  where oxygen levels are too low to support most life.
               </p>
               <p>
                  Photo courtesy European Space Agency.
               </p>
            </WorldmapItem>

            <WorldmapItem i='7' x='61.5' y='35'
               headline='The Caspian Sea, west Asia'
            >
               <p>
                  Algal blooms in the south Caspian Sea were first reported in 2005 (station A)
                  when a bloom of Nodulariaspumigena extended over an area of 2 km<sup style={{
                     verticalAlign: 'super',
                     fontSize: 'smaller',
                  }}>2</sup>.
               </p>
               <p>
                  Photograph posted online.
               </p>
            </WorldmapItem>

            <WorldmapItem i='8' x='86' y='77'
               headline='Murray River, Australia'
            >
               <p>
                  A toxic bloom on Australia’s Murray River in 2009 extended for more than 800 kilometers
                  and prompted a “red alert” warning residents not to touch the water or drink untreated
                  water.
               </p>
               <p>
                  Photograph posted online.
               </p>
            </WorldmapItem>

         </div>
      </div>
      <div className='text'
         style={{
            fontSize: '.9em',
            marginBottom: '3em',
            fontFamily: '\'Times New Roman\', Times, serif',
            textAlign: 'center',
         }}
      ><b>Figure 2.</b> Global situation</div>


      <TRp TRkey='bc326ef7ea'>Nutrient over-enrichment increases the turbidity of aquatic ecosystems, smothering aquatic plants and thereby suppressing important invertebrate and fish habitats. Die-off of blooms may deplete oxygen, killing fish, resulting in economic setback and ecosystem crash. Spread over the water surface, the algae blooms caused serious damage to local landscape while the stench emitted from algae bud makes the surrounding residents miserable. Some varieties of cyanobacteria produce toxins, which can cause serious and occasionally fatal human liver, digestive, neurological, and skin diseases. Every year, there are a large number of cases of people and animals poisoned by algal toxins around the world.</TRp>
      <TRp TRkey='da1961dbae'>Although many attempts have been made in the field of resource utilization of blue-green algae, due to the cost and technical problems, the majority of algae treatment in the world is still mainly incineration and landfill. For example, alone in Wuxi, more than one million tons of cyanobacteria were treated in 2017, which means after dehydration， more than 100,000 tons of algae mud were burned with a total cost of more than 30 million dollars. Obviously, this will cause a vicious circle of pollution. Our earth is in an urgent need for a fast, clean and environment-friendly way to deal with the huge amount of algae mud annually salvaged.</TRp>

      <TRH2 TRkey='898033a3e0'>Protein resource: the great potential hides in algae pollution</TRH2>
      <TRp TRkey='42ce141a5e'>Since the trend of algae bloom is inevitable, we can think of ways to make the best utilization of blue-green algae, degrading them into high-quality feed protein. The great potential of doing this lies in the distinguished richness of cyanobacteria in protein. Cyanobacteria has complete amino acid species and its protein content is over 60%, which is higher than most common protein resource. The digestion and absorption of short peptides in gastrointestinal tract are better and faster than that of protein and free amino acids. Therefore, once the cyanobacteria be degraded into short peptides, it will be a perfect substitute and supplement to the existing feed protein resource for many agriculturally important animal species. Research findings have associated blue-green algae to improvements in animal growth, fertility, aesthetic and nutritional product quality. Furthermore, as the abundant nutritive value, cyanobacteria is recommended as “the best food resource of human being for the future” by FAO. Maybe someday it will be a new choice at table for human-beings.</TRp>
      <TRp TRkey='2830f14a7d'>The great potential of cyanobacteria for feed protein is also reflected in reserves. The Great Lakes basin alone can produce more than 100 million tons of cyanobacteria a year. If the cyanobacteria resource gets to be effectively exploited, there will be a large number of land area for economic crops to be planted in grain rations. At the same time, the content of high-quality protein in global grain structure will be greatly increased. In the 21st century, there are still more than one billion hungry people in the world. Therefore, the development of cyanobacteria resource not only brings about the revolution of feed industry, but also contributes to solving the problem of global hunger to some extent. Cyanobacteria, as one of the oldest nitrogen-fixing plants on the earth, is actually a huge protein treasure house waiting for us to dig.</TRp>

      <ImageWithShadow noShadow src={assets.pages.Description.exp$png} width='90%'
         caption={<><b>Figure 3.</b> Turning waste into treasure</>} />

      <TRH2 TRkey='74d66d8a54'>Microcystin: The stumbling block to cyanobacteria resources exploitation</TRH2>
      <TRp TRkey='523f2b6745'>So far, there exists some major obstacles in the utilization of cyanobacteria. Cyanobacteria not only has hard cell walls, which make it difficult to be directly absorbed, digested and utilized, but also contain microcystin which is daunting. There also exists gelatinous sheath consists of peptidoglycan outside their cell walls, making the algae more stable.</TRp>
      <TRp TRkey='ca44cedf7e'>The chemical properties of microcystin is quite stable that its natural degradation process in water is very slow. It has high heat resistance, so the toxin cannot be destroyed by boiling.</TRp>
      <TRp TRkey='4579c3444d'>Microcystin is a kind of hepatotoxin, which has strong carcinogenic effect and is harmful to human health. Skin contact with water containing microcystin can cause allergies to sensitive areas (such as eyes) and skin; a small amount of drinking can cause acute gastroenteritis; long-term drinking can cause non-alcoholic fatty liver by interfering with fat metabolism and further induce liver cancer. At present, the main methods of removing cyanobacterial toxins, such as activated carbon adsorption, chemical degradation (e.g. ozone, ferrate, lanthanum nitrate, ultraviolet) and microbial degradation, are either ineffective or too expensive to be widely used in commerce.</TRp>

      <ImageWithShadow noShadow src={assets.pages.Description.fig4$jpg} width='70%'
         caption={<><b>Figure 4.</b> Molecular structure of microcystin (MC-LR)<br />Cited from https://baike.baidu.com/item/%E8%97%BB%E6%AF%92%E7%B4%A0#ref_[2]_2783938</>} />

      <TRp TRkey='9d4e8e91a8'>Therefore, cyanobacteria cannot be directly used as animal feed. At present, there is a lack of a simple and efficient way to degrade cyanobacteria on a large scale. The degradation of cyanobacteria, especially microcystin, has attracted the interest of many scientists worldwide. Our team, Algae Terminator, also worked on this topic actively and put forward our own solutions to this problem.</TRp>
      <TRH2 TRkey='63598fcfea'>Intracellular digestion: Unique mechanism found in amphioxus</TRH2>
      <TRp TRkey='5484e21af3'>The digestive methods employed by amphioxus - both intracellular phagocytic digestion and extracellular digestion - have been discussed since 1937. Zuhong Lu, our principle instructor, and Chunpeng He, had unexpectedly found in their research that amphioxus, a model animal used to study the origin of vertebrate evolution, whose digestive tract epithelial cells can directly phagocytize algae by using intracellular digestive mechanism, so as to achieve the goal of digesting, absorbing and utilizing the algae effectively. That is to say, these diverticulum epithelial cells can phagocytize algal cells into their phagosomes. The phagocytized algal cells are transported to the inner cytoplasm away from the apical side by phagosomes, waiting for further degradation. Importantly, the phagocytic function occurs in almost all of these cells. These cells produce large numbers of lysosomes to support their intracellular digestive function, especially after 24 h of starvation.</TRp>
      <TRp TRkey='a3080de430'>Diverticulum epithelial cells of amphioxus can not only directly degrade algae, mainly cyanobacteria, into nutrients like amino acids, oligopeptides, oligosaccharides, oligonucleotides, fatty acids, vitamins and trace elements, but also reduce harmful substances such as microcystin by the powerful digestion and immune function gene group, which can directly make alga cells absorbable, non-toxic and harmless to other species.</TRp>

      <ImageWithShadow noShadow src={assets.pages.Description.fig5$jpg} width='70%'
         caption={<><b>Figure 5.</b> Phagocytic epithelia of amphioxus digestive tract</>} />


      <TRp TRkey='8079d0571d'>This discover is the first time to directly proved the existence of intracellular digestion mechanism in multicellular animals. Proceedings of the Royal Society B reported this research with the longest history (10 pages), in the paper "pharmaceutical intractable division in ammonia (Branchiostoma)". The paper was also commented on in highlight by Nature.</TRp>
      <TRp TRkey='0f4991283d'>Paper: <Link href='http://rspb.royalsocietypublishing.org/content/285/1880/20180438'>http://rspb.royalsocietypublishing.org/content/285/1880/20180438</Link></TRp>
      <TRp TRkey='e506dff7d8'>Nature comment: <Link href='https://www.nature.com/articles/d41586-018-05396-3'>https://www.nature.com/articles/d41586-018-05396-3</Link></TRp>
      <TRH2 TRkey='784416242f'>Algae Terminator: Earth intelligence against earth cancer</TRH2>
      <TRp TRkey='d2f58b68f3'>The unique mechanism found by our PI has inspired us to seek for proteins that is capable to digest cyanobacteria along with microcystin outside amphioxus. Once the specific proteins can be expressed and take effect on a large scale in vitro, the massive exploitation of cyanobacteria is possible, thus promote economy and benefit our environment.</TRp>
      <TRp TRkey='4816a3c6ab'>We have already learned that amphioxus is tend to activate intracellular mechanism when it is starved, so we analyzed and compared the transcriptome between satiation and starvation. Eventually 28 high-expression proteins are selected to conduct further experiments in order to screen the main functional ones. Because intracellular digestion mechanism is commonly seen in prokaryotes, the idea came to our mind that these proteins may be easier to express and maintain activity in prokaryotes. By means of bioinformatics methods such as codon optimization, we have successfully achieved the large-scale and efficient expression of certain proteins existed in amphioxus, a multicellular eukaryote, inside E. coli via genetic engineering. Subsequent experiments show that these proteins have successfully digested cyanobacteria into several small molecules, and can completely degrade five common microcystins. We also make further characterization and modification to the main function enzymes we produce, and 3 biobrick parts have been registered for worldwide iGEMers in future use.</TRp>
      <TRp TRkey='1e2f194996'>The main feature of our project is that it originates from nature and finally returns to nature. We solve the problems of the earth by means directly learned from the earth, which reduces the probability and hidden hazard of ecological risk. Since the outbreak of algae such as cyanobacteria has become an irreversible ecological phenomenon under the circumstances of global warming and ocean acidification, it is a must to utilize them effectively with appropriate means. Our project solves the difficulty of algal cell wall breaking and microcystins by amplifying amphioxus intracellular digestion, and turn cyanobacteria into nutritious, bio-safe and low-cost feed ingredients for livestock, poultry and aquatic animals. Earth intelligence against earth cancer, we are moving. We believe that with the joint efforts of human beings, HAB, like other kinds of pollution problems, will be effectively and completely solved. And ultimately, we will create a better future for our planet.</TRp>

      <ImageWithShadow src={assets.pages.Description.fig6$jpg} width='70%'
         caption={<><b>Figure 6.</b> Beauty of nature<br />Location: Crveni Vrh; Cited from https://www.pexels.com/photo/scenic-view-of-the-sea-722687/</>} />

      <div className='doc-refer'>
         <div className='text'>Reference</div>
         <div className='text'>
            1. Paerl, Hans W. , and J. Huisman . "Climate change: a catalyst for global expansion of harmful cyanobacterial blooms." Environmental Microbiology Reports 1.1(2009):27-37.<br />
            2. Paerl, Hans W , et al. "It Takes Two to Tango: When and Where Dual Nutrient (N & P) Reductions Are Needed to Protect Lakes and Downstream Ecosystems." Environmental Science and Technology 50(2017):10805-10813.<br />
            3. "Harmful Algal Blooms: Red Tide: Home". www.cdc.gov.<br />
            4. "Cyanobacteria blooms and non-alcoholic liver disease: evidence from a county level ecological study in the United States." Environmental Health 14.1(2015):41.<br />
            5. Christaki, E, P. Floroupaneri, and E. Bonos. "Micro algae: a novel ingredient in nutrition. " International Journal of Food Sciences & Nutrition 62.8(2011):794-799.<br />
            6. He, Chunpeng, et al. "Phagocytic intracellular digestion in amphioxus (Branchiostoma)." Proceedings of the Royal Society B: Biological Sciences 285.1880 (2018): 20180438.<br />
         </div>
      </div>
   </>),
};
