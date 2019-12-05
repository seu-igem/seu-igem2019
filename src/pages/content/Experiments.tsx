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
import { Parafolding } from './comps/Parafolding';
import { DocOrderedList } from './comps/DocList';
import { Link } from './comps/Link';
// import { Link } from './comps/Link';

const content = (<>
   <TRH2 TRkey='3c221b5fb4'>Overview</TRH2>
   <TRp TRkey='c1f3a41f81'>Based on the result of high throughput sequencing and bioinformatics analysis, we designed five groups of experiments to realize a series of works including the key protein screening, structure analysis and prediction, degradation effect test, and characterization of key enzymes. Click on each group to learn more about our experiment.</TRp>


   <TRH2 TRkey='5ca81ef1da' prefix='I'>Bioinformatics analysis</TRH2>
   <TRH3 TRkey='50af256c9c'>1. Screening and annotation of key genes</TRH3>
   <TRp TRkey='b762f80d81'>According to the work of our Instructor professor Lu, in order to explore how the diverticulum epithelial cells deal with the phagocytized food particles, a full-length cDNA transcriptome library (abbreviation: Full; GenBank Accession Number: LIBEST_028542) was constructed to investigate the gene expression profile of these cells in a natural sated state. Next, to reveal the spatiotemporal pattern of gene expression of diverticulum epithelial cells, the differences in gene expression between cells in empty (after 3 days of starvation) and sated states were compared using qRT-PCR assays.</TRp>
   <TRp TRkey='6af1a08ff5'>This gives us great inspiration, but how to further screen the key genes degrading algae from gene expression profiles is the first challenge we face up with. In starved Branchiostoma, these cells accumulate endogenous digestive and hydrolytic enzymes, whereas, when sated, they express many kinds of immune genes in response to stimulation by phagocytized food particles. First, we further compare the gene expression of amphioxus in two different states in order to further elucidate the key genes in intracellular phagocytic digestion. In this way, we selected highly expressed genes with significant differences in empty and sated states, the protein products of which have potential to degrade or neutralize the harmful substances such as algal toxins.</TRp>
   <TRp TRkey='1a2026fd7b'>Next, we conducted bioinformatics analysis and functional annotation of the screened proteins. Many properties of proteins can be obtained by sequence, so we compared the similarities between unknown protein sequences and known protein sequences by searching database, and predict the function of proteins. Basic Local Alignment Search Tool (BLAST) is a computer algorithm that is available for use online at the National Center for Biotechnology Information (NCBI) website and many other sites. We use BLAST to find regions of local similarity between sequences. The program compares protein sequences to sequence databases and calculates the statistical significance of matches. A significant match should have at least 25% of the same sequence and more than 80 amino acid segments.</TRp>
   <ImageWithShadow noRadius noShadow src={assets.pages.Experiment.fig1$jpg} width='65%' caption={<><b>Figure 1.</b> NCBI BLAST.<br />Cited from https://www.slideshare.net/error007/chapter-84-data-mining-concepts-and-techniques-2nd-ed-slides-han-kamber</>} />
   <TRH3 TRkey='76bfece589'>2. Phylogenetic analysis</TRH3>
   <TRp TRkey='aa4c48f3fe'>Based on our sequenced proteins and combined with relevant literature, we use nucleic acid (NCBI, EMBL, DDBJ) and protein (SWISSPROT) databases to identify homologous genes or proteins of the corresponding proteins and analyze their evolutionary history. In the process of database mining, we analyze the potential information in other people's data, find out the characteristic sequences of homologous proteins, and assist the experimental design.</TRp>
   <TRp TRkey='ca0545588f'>Steps of experiment：</TRp>

   <DocOrderedList items={[
      <>
         <TRp TRkey='3c75ccc1f9'>Obtain homologous sequence data. In the process of sequence similarity alignment, we use the BLAST tool of web page version.</TRp>

         <DocOrderedList abc items={[
            <>
               <TRp TRkey='f9e4f95fdc'>Generally speaking, we prefer the general blastp program as the retrieval algorithm. Since our query sequence and the target sequence of the database are all proteins, the protein blast function is preferred.</TRp>
            </>,
            <>
               <TRp TRkey='2d3523a79f'>According to our pre-designed tree-building idea, we chose the non-redundant protein sequence database as the search set. Species were limited to the landmark species in the evolutionary history, such as human, mouse, chicken, zebrafish, shark, sea urchin and etc.</TRp>
            </>,
            <>
               <TRp TRkey='f1ccfe8279'>In the case of poor blastp comparison results, we use the PSI-BLAST program depending on PSSM matrix for iterative comparison. Normally, the statistical significance threshold is 0.05. The comparison results after each iteration conform to the significance threshold sequence, not more than 500 items, participating in the matrix construction and the next iteration. The number of iterations is set as 5 rounds.</TRp>
            </>,
            <>
               <TRp TRkey='596bd64ea7'>Select the genes with high similarity and download the gene sequence in Fasta format.</TRp>
            </>,
         ]} />
      </>,
      <>
         <TRp TRkey='d8207fee14'>Multiple sequence alignment. ClustalW in Mega is selected for multi-sequence alignment, and the alignment results are saved in MEG format.</TRp>

         <DocOrderedList abc items={[
            <>
               <TRp TRkey='bc537e8a08'>In the Mega program, select ALIGN-Edit/Build Alignment to create a new alignment, select protein as sequence type, and open an Alignment Explorer.</TRp>
            </>,
            <>
               <TRp TRkey='0c05f61b76'>Import the downloaded Fasta format file and target protein sequence file through Edit-Insert Sequence From File.</TRp>
            </>,
            <>
               <TRp TRkey='ff39bbd703'>Select all the sequences, click Alignment-Align By ClustW or W, select Multiple Alignment to set the penalty parameters for comparison under the subdirectory, and then point OK to confirm.</TRp>
            </>,
            <>
               <TRp TRkey='85efc53276'>Click Data-Phylogenetic Analysis to proceed Phylogenetic analysis. Close the window and save it.</TRp>
            </>,
            <>
               <TRp TRkey='b1c277880a'>Select Analysis-Phylogeny and confirm the analysis method to construct the evolutionary tree. Usually, NJ tree is used, verification method is set to Bootstrap, Replications is set to 1000, and other default parameters are used to calculate and generate phylogenetic tree.</TRp>
            </>,
         ]} />

      </>,
   ]} />

   <ImageWithShadow src={assets.pages.Design.fig1$jpg} noShadow width='70%' caption={<><b>Figure 2.</b> The unrooted phylogenetic tree of cathepsin B from various species</>} />

   <TRH2 TRkey='ab24eb7210' prefix='II'>Molecular cloning and genetic engineering</TRH2>
   <TRp TRkey='e8088cf3c0'>Escherichia coli expression system is characterized by clear genetic background, high level of target gene expression, short culture cycle and strong anti-pollution ability. It is an important tool for molecular biology research and the industrialization of biotechnology. Therefore, we use E. coli system to express and purify recombinant protein.</TRp>
   <TRp TRkey='cee5b9bcd4'>The vector we used is pET28b expression vector. The plasmid map and polyclonal site information are shown below. Target gene was cloned E.coli DH5 α and expressed in E. coli BL21 (DE3). In the experiment, isopropyl galactosyl thioglycoside (IPTG) was used as inducer. IPTG is a powerful inducer, which is not metabolized by bacteria and is very stable, so it is widely used in laboratory. A special sequence, His-Tag, was added to the end of the target protein to achieve rapid affinity purification in subsequent experimental steps. His tag has a small molecular weight and fuses to the end of the target protein. It does not affect the activity of the target protein, so it does not need to be removed in the purification process.</TRp>
   <TRp TRkey='57b3a796b8'>Considering the codon and preference of E. coli, we optimized the sequence of target protein. For example, we replaced the terminator codon on the premise of ensuring that the encoded amino acid sequence remains unchanged. In addition, in order to facilitate the subsequent purification operation, maintain the activity of the target protein and improve the yield of the protein, we determined the optimal expression conditions of the target protein before large-scale preparation. When determining the expression conditions, more effort was devoted to ensuring the soluble expression of target proteins than just stable expression of exogenous proteins. We found that in the case of exogenous genes expression in E. coli, it was easy to form incompatible inclusion bodies if the expression of genes was too high or the synthesis of protein was too fast. Thus, by optimizing the expression conditions, we improved the solubility of the target protein.</TRp>
   <TRp TRkey='f0f0cdc825'>SDS-PAGE was used to detect the expression of protein (i.e. expression level, expression distribution, etc.) and to analyze the purity of the purified target protein. The last and most important step was to purify the target protein. The expression vector pET28b (+) we used to contain a sequence encoding polyhistidine, that is, His-Tag. Therefore, a recombinant target protein with His-Tag will be obtained. His-Tag can bind to metal Ni2+ ions, which is beneficial to the purification of target protein. The protein added with His-Tag can be purified by Ni2+ affinity chromatography column under non-denaturing conditions.</TRp>
   <ImageWithShadow src={assets.pages.Experiment.fig2$jpg} noShadow width='70%' caption={<><b>Figure 3. </b>A vector model of pET32a. Cited from http://www.youbio.cn/product/vt1216</>} />
   <TRp TRkey='7702fe5f63'>We expressed and purified the ten proteins involved in the project. Limited in space, here we take Cathepsin B as the representative to explain the specific experimental process.</TRp>
   <TRp TRkey='b21d725ea0'><Link href={assets.pages.Experiment.cathepsinB$pdf}>Short protocol</Link></TRp>


   <TRH2 TRkey='8bc7d6c586' prefix='III'>Modelling</TRH2>
   <TRH3 TRkey='b3134f0c9c'>1. 3-D Structure Prediction</TRH3>
   <TRp TRkey='395e2ce56d'>To predict the three- dimensional structure of our gained proteins, we conducted modeling process using SWISS-MODEL.</TRp>
   <TRp TRkey='d8ff34c781'>SWISS-MODEL, the Molecular Modeling Server developed by the Geneva Biomedical Research Institute, is the most widely used server in predicting the three-dimensional structure of unknown proteins. Its principle is to extract the simulated structure information of the known protein similar to the query protein from the classical database Brookhaven PDB with the aid of sequence alignment, and to establish the structure of the unknown protein based on the similarity of the protein.</TRp>
   <TRp TRkey='f6187ec8f7'>Homologous modeling method to predict protein structure generally includes the following four steps: </TRp>

   <Parafolding left paras={[
      {
         title: '1. Template selection',
         body: <>
            <TRp TRkey='e3af3ea68b'>Swiss-model server template database ExPDB is taken from PDB. By dividing the PDB file into certain template chain and uncertain template chain, the deterministic template chain with better data quality is retained. Swiss-model added additional useful information, such as possible quatric structural information, clear identification information (empirical field energy, ANOLEA average potential energy score). For a target sequence, SWISS-MODEL first searches the template database ExPDB for a suitable template. As for a target sequence cannot match the appropriate template, the program will find a few template sequences to overlap the target sequence. Then the modeling process splits the protein into several parts that are processed in batches.</TRp>
         </>,
      },
      {
         title: '2. Alignment of target sequence template sequence',
         body: <>
            <TRp TRkey='cf5226dab3'>With the least repetitive square algorithm, the mismatched templates (i.e., those with a high alpha carbon mean square deviation from the first template) were removed to produce a structural alignment. Pairwise alignment of the target sequence and template sequence is performed locally and then the alignment is improved through an empirical step. The overall structure of the template determines the insertion and deletion positions, that is, the movement of an isolated residue to an adjacent random curl structure.</TRp>

         </>,
      },
      {
         title: '3. Model building',
         body: <>
            <TRp TRkey='a01eddd3ad'>The core of the prediction model is formed by averaging the positions of multiple template structure backbone atoms. First, the position of significantly deviated atoms was removed. The sequence similarity between the template and the target protein determined the template importance weight. As to inserted or missing areas, a "Constraint Space Programming CSP" is used to coordinate the fragment as a whole with the adjacent trunk. The optimal ring structure is determined by force field energy, space obstacle, hydrogen bond, etc. If a suitable ring structure is absent, adjacent residues are incorporated into fragment reconstruction for greater flexibility. When the CSP fails to give a satisfactory answer and there are more than 10 residues, the program automatically searches the "loop library" of experimental data for an acceptable loop structure.</TRp>
            <TRH3 TRkey='50535069fb'>Side chain modeling</TRH3>
            <TRp TRkey='bc48944fe0'>The reconstruction of the side chain of the model is carried out according to the best position of the corresponding residue in the template structure. The possible side chain configurations were selected from rotamer library. The scoring function focuses on hydrogen bond, disulfide bond and avoiding adverse contact.</TRp>
            <TRH3 TRkey='661142b261'>Minimize energy</TRH3>
            <TRp TRkey='1b66973bf0'>The geometric adjustment of protein structure is the last step in modeling. When connecting rigid segments, the program adjusts the structure according to the GROMOS96 force field algorithm of the energy minimum principle. Generally speaking, the use of energy minimization in SWISS-MODEL only makes the molecular structure more standardized but does not improve the accuracy of the MODEL.</TRp>

         </>,
      },
      {
         title: '4. Evaluation',
         body: <>
            <TRp TRkey='5e2e601b4b'>The server takes about five steps to get the returned results.</TRp>
            <DocOrderedList items={[
               <TRp TRkey='7bcee3a577'>BLASTP2 program was used to search the ExNRL3D database for proteins with known tertiary structure as modeling templates.</TRp>
               , <TRp TRkey='2d90bfb7a6'>SIM program was used to select all sequences whose similarity with the query sequence is greater than 25% and sequence length was greater than 20 amino acids</TRp>
               , <TRp TRkey='1ecec6e4be'>Generate the input file of Generate ProModII format</TRp>
               , <TRp TRkey='20011c3505'>according to the tertiary structure of the template, the ProModII program and ExPDB database were used to generate the three-dimensional structure model of the target protein</TRp>
               , <TRp TRkey='c0dac232cd'>minimize the energy of the model with Gromos96</TRp>,

            ]} />
         </>,
      },
   ]} />

   <TRp TRkey='ef16b32376'>By repeating the above steps, a satisfactory protein structure model is established. </TRp>
   <TRp TRkey='84263bbfc6'>The SWISS-MODEL use the "rigid fragment assembly" based on alpha-helices and beta-folds for structural prediction.</TRp>
   <TRH3 TRkey='288ac7ce43'>2. Molecular docking</TRH3>
   <TRp TRkey='55e4a333d5'>MOE Dock was used for molecular docking of CTS with the small molecule and predicting the binding affinity. Small molecule was defined as ligand and CTS as target. The 2D structures of small molecule were converted to 3D in MOE through energy minimization. Then the protonation state of target and the orientation of the hydrogens were optimized by LigX, at the PH of 7 and temperature of 300 K. Prior to docking, the force field of AMBER10:EHT and the implicit solvation model of Reaction Field (R-field) were selected. The binding site was identified by superpose CTS with the original template structure, the position where the ligand in template structure was defined as binding site of CTS. The docking workflow followed the “induced fit” protocol, in which the side chains of the receptor pocket were allowed to move according to ligand conformations, with a constraint on their positions. The weight used for tethering side chain atoms to their original positions was 10. All docked poses of molecules were ranked by London dG scoring first, then a force field refinement was carried out on the top 30 poses followed by a rescoring of GBVI/WSA dG. The best ranked pose was selected as the final binding mode.</TRp>
   <ImageWithShadow noShadow width='75%' src={assets.pages.Experiment.fig3$jpg} caption={<><b>Figure 4.</b> The 3D binding mode of MC-LR and cathepsin B.</>} />

   <TRH2 TRkey='53e85d732d' prefix='IV'>Degradation of algae and microcystin</TRH2>
   <TRH3 TRkey='15e66d5adb'>1. Inverted microscope observation of algae samples</TRH3>
   <TRp TRkey='82c14ebc94'>During the project, we were honored to share our ideas with Zhang Junyi, an expert from Taihu Lake Water Environment Monitoring Bureau, was very interested in the ideas of our team. He provided us with samples of cyanobacteria from different Sampling point in Taihu Lake. These multiple kinds of algae samples in different growth stage give us a deeper understanding of the diversity and morphological characteristics of cyanobacteria in Taihu Lake. We observed cyanobacterial samples in laboratory with an inverted microscope.</TRp>
   <TRH3 TRkey='c12db81ede'>2. Degradation of algae with enzymic preparation</TRH3>
   <TRp TRkey='e51f0f26bd'>Based on the bioinformatics approach, we screened 28 potentially viable proteins from the genome of amphioxus. Based on our experimental ideas, we need to mix these 28 proteins with fresh algae in Taihu Lake to get preliminary results. This result will be used to determine whether the 28 proteins we screened have activity in degrading algae. If the experiment is not successful, we will repeat the bioinformatics screening method, re-select a batch of protein, and repeat the experiment.</TRp>
   <TRp TRkey='61839c8f5b'>To achieve the best experimental results, we have the ratio of each enzyme equal to the true ratio of amphioxus. Such a system is an optimum degradation condition for the enzyme. And finally we make the composition of our enzyme preparation fixed to 10 proteins.</TRp>
   <TRp TRkey='414c4bf034'>Experimental procedure:</TRp>
   <TRp TRkey='7725197acd'>The experimental conditions are as follows:</TRp>
   <TRp TRkey='109c0a9873'>Buffer: PBS buffer (0.02M PH=8.2)</TRp>
   <TRp TRkey='3c77302651'>Temperature: room temperature (25 ° C)</TRp>
   <TRp TRkey='c11d12554d'>Reaction time: 24h</TRp>
   <TRp TRkey='d95c14f059'>Instrument: Rotary Mixer (40rpm)</TRp>
   <TRp TRkey='bc849b6dd0'>After the reaction is over, we have performed the mass spectrometry on the sample.</TRp>
   <ImageWithShadow width='80%' src={assets.pages.Experiment.fig4$jpg} caption={<><b>Figure 5.</b> Degradation of algae with enzymic preparation</>} />


   <TRH3 TRkey='a6a3780453'>3. Degradation of algae with GM E-Coli</TRH3>
   <TRp TRkey='abe0b7b8ae'>In order to verify the activity of our constructed E.coli Expression System, we put 10 kinds of E.coli strains which have been genetically engineered to express different proteins into the lake water samples containing cyanobacteria for culture, and induced expression with IPTG. </TRp>
   <ImageWithShadow width='80%' src={assets.pages.Experiment.fig5$jpg} caption={<><b>Figure 6.</b> Degradation of algae with GM E-Coli </>} />
   <TRp TRkey='71a1ef2bcf'>The crude solution is the algae sample collected from TaiHu Lake. (2g/50mL)</TRp>
   <TRp TRkey='61e0e5d6f4'>Genetically modified E.Coli for each protein. (1g/protein)</TRp>
   <TRH3 TRkey='f777d82f28'>4. Screening proteins for algal toxin degradation</TRH3>
   <TRp TRkey='0956850e1c'>The biggest obstacle currently hindering the utilization of cyanobacteria is the microcystin. The 28 enzymes initially screened by our team proved to be effective for the degradation of cyanobacteria. Next we want to study how these 28 enzymes degrade the algae toxins. Which of these enzymes are capable of degrading microcystin single or combined with other protein? In order to explore the degradation effects of the 28 proteins screened by our team on microcystin, we designed an algae toxin degradation experiment.</TRp>
   <TRp TRkey='d3791b0082'>Experimental design:</TRp>
   <TRp TRkey='2b4b2f24db'>According to the pH of the marine organism cell environment, we used 0.02M PBS buffer (pH 8.2) to form the main reaction system. We formulated the microcystin and the enzyme into a final concentration system of 50 mg/mL, respectively. We decided to first enlarge the amount of enzyme, and hope to get the experimental results with relatively large discrimination. The reaction system we used was: 30 μL of enzyme (50 mg/mL) + 30 μL of microcystin (50 mg/mL) + 140 μL of PBS buffer = 200 μL</TRp>
   <TRp TRkey='d3e356274b'>Experimental procedure:</TRp>

   <DocOrderedList items={[
      <>
         <TRp TRkey='87ae33d08d'>Dilution of microcystin samples:</TRp>

         <TRp TRkey='2abb527497'>There are many different types of microcystin. In our group, we mainly used two kinds of microcystin, LR and RR. The microcystin samples purchased by our group are solid powders. We need to first dissolve the microcystin into the concentration we need (50mg/mL). We used methanol (analytical grade) to solubilize microcystin. All operations are carried out in a fume hood.</TRp>
         <TRp TRkey='9def52e77b'>1.1&nbsp;&nbsp;&nbsp;Pipette 1000 μL of methanol (analytical grade), add to the tube containing 50 μg of microcystin, and mix well by pipetting; (The two microcystin are treated the same way)</TRp>
         <TRp TRkey='b54647dbf5'>1.2&nbsp;&nbsp;&nbsp;Transfer the 1000 μL solution into a 1.5 mL centrifuge tube;</TRp>
         <ImageWithShadow noRadius noShadow width='80%' src={assets.pages.Experiment.tab1$jpg} caption={<><b>Table 1.</b> Microcystin preparation</>} />

      </>,
      <>
         <TRp TRkey='f4a18c6d23'>Diluting of the enzyme:</TRp>
         <TRp TRkey='c45ffb8e6a'>According to the experimental ideas of our group, we need to dilute the 28 enzymes to be measured to the same concentration as the microcystin (50mg/L). In order to avoid the effects of repeated freezing and thawing on enzyme activity, the remaining enzymes were stored at 4 °C for next use. The corresponding dilution ratios of the 28 enzymes used are shown in the figure below.</TRp>
         <TRp TRkey='a8e8d59945'>
            2.1&nbsp;&nbsp;&nbsp;Pipette the corresponding amount of PBS buffer (0.02M pH = 8.2) into a 1.5mL centrifuge tube;
         </TRp>
         <TRp TRkey='aa4d378c84'>
            2.2&nbsp;&nbsp;&nbsp;Pipette the corresponding amount of enzyme into the same 1.5mL centrifuge tube;
         </TRp>
         <TRp TRkey='bc89ae2812'>
            2.3&nbsp;&nbsp;&nbsp;Instantaneous centrifugation to mix the sample;
         </TRp>
         <TRp TRkey='bcb79eee4b'>The result of this part is test with LC-MS/MS in microcystin test center in Nanjing University, where is also the official MC test center of Jiangsu Province. The MS results of standard samples are list here:</TRp>
         <ImageWithShadow noRadius noShadow width='90%' src={assets.pages.Experiment.tab2$jpg} />
      </>,
   ]} />

   <TRH3 TRkey='28e9351b28'>5. Characterization of key protein</TRH3>
   <TRp TRkey='164893079b'>After we completed the basic functional verification and screening, we used the methods of bioinformatics and biochemistry to characterize the properties of key proteins. </TRp>
   <TRp TRkey='ab893695a7'>First, we used enzyme activity kit to test Cathepsin L, B&D, lysozyme C&G, and pancreatic lipase-like protein, and calculated their enzyme activity. In fact, this kind of activity kit can also help us to confirm these proteins’ function to some extent. Secondly, for some enzymes that can continuously observe the reaction effect, we analyzed their reaction kinetics and calculated their Michaelis constant. </TRp>
   <TRp TRkey='eb9d9b7d18'>At last, we use MOE Dock, which is designed for molecular docking of CTS with the small molecule and predicting the binding affinity based on energy minimization and structure constrain. Then we further explored the mechanism of the combined action of the two enzymes, and found out the possible basis in sequence level. Our work will continue in the future to explore on this mechanism with experimental verification and structural observation.</TRp>

</>);

export const body = {
   title: 'Experiments',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab work', path: '/Experiments' },
      { text: 'Experiments', path: '/Experiments' },
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
