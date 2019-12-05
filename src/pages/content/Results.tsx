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
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
import { Link } from './comps/Link';
import { Parafolding } from './comps/Parafolding';
// import { Link } from './comps/Link';

const rr = assets.pages.Results;

const content = (<>
   <TRp TRkey='8733239d39'>Our experiment has got some exciting results. We analyzed them carefully and listed them as follows.</TRp>


   <TRH2 TRkey='7e587a8268' prefix='I'>Bioinformatics analysis</TRH2>
   <TRH3 TRkey='acf7336539'>Key achievements</TRH3>
   <DocOrderedList items={[
      <>
         <TRp TRkey='d87e0a85ef'><b>28 kinds of proteins were annotated and analyzed, and the composition of enzyme preparation was screened out.</b></TRp>
      </>,
      <>
         <TRp TRkey='eb04da582f'><b>The phylogenetic tree of cathepsin B was obtained.</b></TRp>
      </>,
   ]} />
   <TRH3 TRkey='a2584c508c'>Enzymic preparation</TRH3>

   <ImageWithShadow noRadius noShadow src={rr.tab1$jpg}
      caption={<><b>Table 1.</b> Final components of our enzymic preparation</>}
   />

   <TRp TRkey='33c9a4731e'>We can see that the reagent is mainly composed of protease with different functions and action sites, which is used to degrade the main structure of cyanobacteria; in addition, it includes lipase and enzyme used to degrade cell wall tissue such as fiber and peptidoglycan.</TRp>
   <TRH3 TRkey='9e86596584'>Phylogenetic tree of cathepsin B</TRH3>
   <div id='results-figure-1'>
      <ImageWithShadow noRadius noShadow src={rr.ut1$jpg}
         caption={<><b>Figure 1.</b>The unrooted phylogenetic tree of cathepsin B from various species constructed by the neighbor-joining method in MEGApackage. Bootstrap majority consensus values on 1000 replicates are indicated at each branch point in percent. Sequence obtained from NCBI are: Human, <i>Homo sapiens</i> (<b>HsCB</b>: NP 001899.1);Mouse, Mus <i>musculus</i> (<b>MmCB</b>: NP 031824.1); Rat, <i>Rattus norvegicus</i> (<b>RnCB</b>: NP 072119.2); African clawed frog, <i>Xenopus laevis</i> (<b>XlCB</b>: NP 001079570.1); Zebrafish, <i>Danio rerio</i> (<b>DrCB</b>: NP 998501.1); Rainbow trout, <i>Oncorhynchus mykiss</i> (<b>OmCB</b>: XP 021441036.1); Elephant shark, <i>Callorhinchus milii</i> (<b>CmCB</b>: XP 007882610.1); Lancelet, <i>Branchiostoma belcheri tsingtauense</i> (<b>BbtCB</b>: AAQ83887.1) Sea Urchin, <i>Strongylocentrotus purpuratus</i> (<b>SpCB</b>: XP_787947.3, XP 011661731.1, undeleted connection)</>}
      />
   </div>

   <TRp TRkey='f9d066bbb0'>Result:</TRp>
   <TRp TRkey='279638703f'>The Location of Lancelet on the Species Evolution Map</TRp>
   <TRp TRkey='b0aef23d0b'>Because there are more kinds of amino acids than bases, the similarity of amino acid sequences can show the relationship between species to a certain extent. For example, the 67 and 68 amino acids in the amino acid sequence are PN in lancelet and sea urchin, and GP in other species. Similarly, the 106 to 109 amino acids are IKEV in cathepsin B sequence of lancelet, which is highly consistent with sea urchin, but has low similarity with other species. Therefore, lancelet has close evolutionary relationship with invertebrates such as sea urchins. On the other hand, at some amino acid sites, such as 60 and 61 amino acids, sea urchins showed ML, but LC in other species; as 204 to 206 amino acids, TKG in sea urchins and SRP in other species. To some extent, this reflects the relationship between lancelet and vertebrates. Therefore, we infer that amphioxus is a transitional animal between invertebrates and invertebrates on the phylogenetic map by sequence alignment of cathepsin B.</TRp>


   <TRH2 TRkey='9cd8a3fe64' prefix='II'>Molecular cloning and genetic engineering</TRH2>
   <TRH3 TRkey='2163efb553'>Key achievements</TRH3>
   <DocOrderedList items={[
      <>   <TRp TRkey='02416756a8'><b>Complete expression and purification of 28 target proteins</b></TRp>
      </>,
      <>   <TRp TRkey='c91e41cc72'><b>Determine the best expression scheme of each protein</b></TRp>
      </>,
   ]} />

   <TRH3 TRkey='6ab2907f85'>Enzyme production</TRH3>
   <div id='results-table-2'>
      <ImageWithShadow noRadius noShadow src={rr.tab2$jpg} width='80%'
         caption={<><b>Table 2.</b> Expression summary of enzymes production</>}
      />
   </div>

   <TRp TRkey='6a5cff8db9'>In order to maintain page continuity, we continue to use cathepsin B as an example to illustrate the results of this part of the experiment. In fact, we have constructed expression plasmids for all enzymes. Click on the following links for other experimental results.</TRp>
   <DocUnorderedList items={[
      <TRp TRkey='df038d7806'><Link href={rr.ExpressionresultsofcathepsinB$pdf}>Expression results of cathepsin B</Link></TRp>,
      <TRp TRkey='d4aff33568'><Link href={rr.ExpressionresultsofTrypsinLikeserineprotease$pdf}>Expression results of Trypsin-like serine protease</Link></TRp>,
      <TRp TRkey='8867045470'><Link href={rr.ExpressionresultsofsubtilisinLikeprotease$pdf}>Expression results of subtilisin-like protease</Link></TRp>,
      <TRp TRkey='89b8729191'><Link href={rr.ExpressionresultsofendoBeta14Glucanase$pdf}>Expression results of endo-beta-1,4-glucanase</Link></TRp>,
      <TRp TRkey='73ef0b58a5'><Link href={rr.ExpressionresultsofpancreaticlipaseLikeprotein$pdf}>Expression results of pancreatic lipase-like protein</Link></TRp>,
      <TRp TRkey='104bc52eed'><Link href={rr.Expressionresultsofcarboxypeptidase$pdf}>Expression results of carboxypeptidase</Link></TRp>,
   ]}
   />
   <TRp TRkey='d9228f069e'>For all the protein in the preparation list, we had tried to optimize its sequence and construct expression plasmid, and all of them had expressed. Some of them show great activity and high expression yield in E-Coli system, as we list above. For the rest 4 proteins, we are trying to use other expression strategy to get better efficiency. And these 4 proteins we used in the subsequent experiments are expressed in Eukaryotes completed by our consultant Chunpeng He.</TRp>
   <TRH3 TRkey='2b4e5613d5'>cathepsin B</TRH3>
   <Parafolding left paras={[
      {
         title: '1. Gene coding for the target protein',
         body: <>
            <TRp TRkey='15a6a160e6'>The cDNA coding for the target protein was chemically-synthesized with optimization for expression in E.coli and described as below.</TRp>
            <TRp TRkey='e3f7efac9d'><i style={{ fontStyle: 'italic' }}>> 2_cathepsin_B-986bp</i></TRp>
            <div style={{
               fontFamily: '"Consolas", "Courier New"',
               width: '90%',
               wordBreak: 'break-all',
            }}>
               CCATGGCCAAGGAGTTCCCGATCCACCAGCCGCTGACCCAAGAAATCATTGATTACGTGAACACCATTGACACCACCTGGAAGGCGGGTTGGAACTTTCAGGGCGCGACCGTGAGCTATGTTAAAGGTCTGTGCGGCGTTATCCGTGACCCGAACAACCACAAGCTGCCGCTGAAACTGCACGAGCTGAACGCGCAGGACATCCCGGATACCTTCGACAGCCGTACCCAATGGGCGAACTGCCCGACCATTAAAGAGGTGCGCGATCAAGGTAGCTGCGGTAGCTGCTGGGCGCTGGCGGCGGTGGAAGCGATGAGCGACCGTATCTGCGTTGCGAGCAAGGGTAGCACGATGGCGCACATTAGCGCGGAAGATCTGAACAGCTGCTGCAAAAGCTGCGGTAACGGTTGCAACGGTGGCTTCCCGGAGGCGGCGTGGGAATACTGGAAACGTGATGGTCTGGTTACCGGTGGCCCGTATGGTAGCCACCAGGGCTGCCAACCGTATGAGATCAAGCCGTGCGAACACCACATTAACGGTAGCCGTCCGGCGTGCGGTAAACTGGAGCCGACCCCGCGTTGCAAGAAAAGCTGCGAAAGCGGTTATAACGTTACCTTTGCGAAGGACAAACACTACGCGAAGACCGCGTATAGCGTGAGCAGCAAAGTTCAGCAAATCCAGATGGAGATTATGACCAACGGTCCGGTGGAAGCGGCGTTCACCGTTTACGCGGATTTTCCGCACTACAAGAGCGGTGTGTATCAACATGAGAGCGGTGCGGAACTGGGTGGCCACGCGGTTAAAATGATCGGTTGGGGCACCGAGGGTAGCACCCCGTATTGGCTGATTGCGAACAGCTGGAACACCGACTGGGGTAACATGGGCTTCTTTAAGATCCTGCGTGGTCAGGATGAGTGCGGCATCGAACGTGACATTGTTGCGGGTGAACCGAAACTGGATCTCGAGcaccaccaccaccaccactga
               </div>
         </>,
      },
      {
         title: '2. Expression vector',
         body: <>
            <TRp TRkey='6131b45035'>The cDNA sequence described in the §2.1 was cloned in pET28b expression vector. </TRp>

            <TRp TRkey='70492c16f0'><i style={{ fontStyle: 'italic' }}>> 2_cathepsin_B(327AAs,36.2kDa,pI:6.17)</i></TRp>
            <div style={{
               fontFamily: '"Consolas", "Courier New"',
               width: '90%',
               wordBreak: 'break-all',
            }}>
               MAKEFPIHQPLTQEIIDYVNTIDTTWKAGWNFQGATVSYVKGLCGVIRDPNNHKLPLKLHELNAQDIPDTFDSRTQWANCPTIKEVRDQGSCGSCWALAAVEAMSDRICVASKGSTMAHISAEDLNSCCKSCGNGCNGGFPEAAWEYWKRDGLVTGGPYGSHQGCQPYEIKPCEHHINGSRPACGKLEPTPRCKKSCESGYNVTFAKDKHYAKTAYSVSSKVQQIQMEIMTNGPVEAAFTVYADFPHYKSGVYQHESGAELGGHAVKMIGWGTEGSTPYWLIANSWNTDWGNMGFFKILRGQDECGIERDIVAGEPKLD<span style={{ color: '#00b050' }}>LEHHHHHH</span><br />
               <span style={{ color: '#00b050' }}>Features:</span><br />
               <span style={{ color: '#00b050' }}>His-tag with linker:[320:327]</span>
            </div>
         </>,
      },
      {
         title: '3. Expression Tests',
         body: <>
            <TRp TRkey='ecb6d4fda8'>Determination of optimal conditions for protein expression by evaluation of:</TRp>
            <DocUnorderedList items={[
               <TRp TRkey='5e8ebc0fd0'>Induction strategy</TRp>,
               <TRp TRkey='20a7714bd9'>Temperature and time for induction </TRp>,
               <TRp TRkey='2e109cefb9'>E.coli strain used for protein production</TRp>,
            ]} />
            <TRp TRkey='8d7146de87'>Identification of best extraction condition: native or denatured (NPE/DPE)</TRp>

            <ImageWithShadow noShadow src={rr.fig2$jpg} width='60%'
               caption={<><b>Figure 2.</b> Expression tests of the target protein.
                  Analysis of NPE and DPE prepared as above
                  MW. Molecular weight marker. Ø. Non-induced bacteria culture (negative control).
                  16 and 37. Incubation temperature (°C) during induction with IPTG.
      Induction with IPTG 1mM during 16h at 16°C, or during 4h for other temperatures.</>} />
            <TRp TRkey='fbfe83a8fb'><b>Conclusion:</b></TRp>
            <TRp TRkey='fd9a4c5e76' style={{ fontStyle: 'italic' }}><b>Note:</b> E.coli strains tested are intended to overcome one or several expression issues such as (but not limited to) expression level, solubility or toxicity.</TRp>
            <TRp TRkey='e72a584b60'>The protein had expressed, optimal expression condition was described as below.</TRp>


            <ImageWithShadow noRadius noShadow src={rr.tab3$jpg} width='80%'
               caption={<><b>Table 3.</b> Optimal denatured expression conditions of target protein.</>} />

         </>,
      },
      {
         title: '4. Small-scale purification tests',
         body: <>
            <TRp TRkey='aa63364e7c'>1L purification tests in DPE conditions for target protein. Starting material: DPE prepared after production in optimal denatured expression conditions described in the Table 1.</TRp>
            <TRp TRkey='432e24711a'>Results:</TRp>
            <ImageWithShadow noShadow src={rr.fig3$jpg} width='40%'
               caption={<><b>Figure 3. Final sample QC of denatured condition.</b> Coomassie blue staining.
                  Reducing-PAGE analysis. 2µg of sample loaded.1. Before dialysis 2. After dialysis</>} />
         </>,
      },
   ]} />


   <TRH2 TRkey='6e4e7001c6' prefix='III'>Modelling</TRH2>
   <TRp TRkey='97106fe247'><b>Key achievements:</b></TRp>


   <DocOrderedList items={[
      <>
         <TRp TRkey='a805541ad4'>Get the 3-D model of 28 target proteins</TRp>
      </>,
      <>
         <TRp TRkey='5d52c4cb60'>Use molecular docking to analyze the reaction mechanism between cathepsin B and Microcystin LR</TRp>
      </>,
      <>
         <TRp TRkey='ff66693729'>Combine the result of molecular docking and phylogenic tree to confirm the functional specificity of cathepsin B in amphioxus</TRp>
      </>,
      <>
         <TRp TRkey='794f8aff4a'>Provide a conjecture about the synergism of two enzymes to degrade Microcystin RR based on the mechanism above and gene sequences</TRp>
      </>,
   ]} />

   <TRH3 TRkey='54258f436a'>1. 3-D Structure Prediction</TRH3>
   <TRp TRkey='4a8c44a507'>We used homologous modelling and ab initio modelling to predict the 3D models of 28 proteins. The results are listed as follows.</TRp>
   <TRp TRkey='940f6d4393'><Link href={rr.HomologousModelling$zip}>Homologous modelling Results (Software PhyRe2)</Link></TRp>
   <TRp TRkey='3d19f570d2'>The main method of protein structure prediction is homologous modeling. The protein model constructed by this method is better in precision and annotation. Therefore, we only model cathepsin B with initio modelling and compare it with homologous modelling. </TRp>
   <TRp TRkey='227dfe6b98'>The molecule structure built with ab initio modelling is based on energy minimization, so its resulting structure are a series of possible model rather than a single result.</TRp>
   <TRp TRkey='925d5f0fda'><Link href={rr.TASSER$zip}>Ab initio modelling</Link></TRp>
   <TRp TRkey='1f1ae548b6'>Here we take cathepsin B as an example to compare two result.</TRp>

   <ImageWithShadow width='70%' src={rr.fig4$jpg} caption={<><b>Figure 4.</b> Result of 3-D structure prediction<br />Left: Ab initio modelling Right: Homologous modelling</>} />
   <TRp TRkey='62df3ada8c'>The model built with method of homologous modelling show more different loop and clearer domain structure, which means more information about function annotation and prediction.</TRp>
   <TRp TRkey='6a6138b46b'>We also take cathepsin B as an example for further analysis.</TRp>
   <TRp TRkey='a66ffb9d59'><b>Homology modeling of cathepsin B</b></TRp>
   <TRp TRkey='599f56e286'>The modeling result of cathepsin B is depicted in Figure 5A and 5B. The Ramachandran plot for cathepsin B showed that 99% residues are in allowed regions, indicating that the 3D structure of the model is reasonable. There are three main alpha helix and multiple beta strands regions. The structural analysis of the cathepsin B modeling results is shown in Figure 6. The cathepsin B structure is basically consistent with the template structure. The average RMSD value of the three-dimensional structure overlap is 1.012Å, and both have the same alpha helix and beta strands regions. The overall identity of the amino acid sequence was 61.86% by BLAST. </TRp>

   <ImageWithShadow src={rr.fig5$jpg} noShadow width='75%' caption={<>
      <b>Figure 5.</b> (A) The homology model of cathepsin B. (B) Ramachandran plot for cathepsin B. Dark green dots represent the residues in favored regions; yellow dots represent the residues in allowed regions, red cross represents the residues in irrational regions.
   </>} />
   <ImageWithShadow src={rr.fig6$jpg} noShadow width='75%' caption={<>
      <b>Figure 6.</b> Structural analysis of cathepsin B modeling results. (A) The result of superposition of the cathepsin B model structure and the template structure. The cathepsin B structure is shown in purple, the template structure is shown in cyan, and the average RMSD value of the overlay is 1.012Å. (B) The structure-based sequence comparison between cathepsin B and the template structure. The same or similar residues are highlighted in blue and dissimilar ones are highlighted in Red, the darker color indicates more similar or dissimilar residues. The sequence corresponding to alpha-helix regions are marked by red line.
   </>} />
   <TRH3 TRkey='543a5f2947'>2. Molecular docking</TRH3>
   <TRp TRkey='981be66c31'>MOE Dock was used for molecular docking of CTSB with the small molecule and predicting the binding affinity. Small molecule was defined as ligand and CTSB as target. The 2D structures of small molecule were converted to 3D in MOE through energy minimization. Then the protonation state of target and the orientation of the hydrogens were optimized by LigX, at the PH of 7 and temperature of 300 K. Prior to docking, the force field of AMBER10:EHT and the implicit solvation model of Reaction Field (R-field) were selected. The binding site was identified by superpose CTSB with the original template structure, the position where the ligand in template structure was defined as binding site of CTSB. The docking workflow followed the “induced fit” protocol, in which the side chains of the receptor pocket were allowed to move according to ligand conformations, with a constraint on their positions. The weight used for tethering side chain atoms to their original positions was 10. All docked poses of molecules were ranked by London dG scoring first, then a force field refinement was carried out on the top 30 poses followed by a rescoring of GBVI/WSA dG. The best ranked pose was selected as the final binding mode.</TRp>
   <TRp TRkey='58e10bc991'>To investigate the binding affinity of cathepsin B with 101043-37-2 (Microcystin LR), docking simulation studies were carried out. The docking scores are shown in table 4.</TRp>

   <ImageWithShadow noShadow noRadius width='80%' src={rr.tab4$jpg} />

   <TRp TRkey='16e4d4a094'>The binding model between CTSB and 101043-37-2 are shown in Figure 7. The nitrogen atoms of guanidine group of 101043-37-2, regarded as hydrogen bond donor, forms hydrogen bonds with the backbone oxygen atom of Gly90 and Cys92, and with the side-chain chlorine atom of Cys184 in CTSB respectively. The nitrogen atom of 101043-37-2, regarded as hydrogen bond donor, forms a hydrogen bond with the backbone oxygen atom of Leu261 in CTSB.</TRp>

   <ImageWithShadow noShadow src={rr.fig7$jpg} width='80%' caption={
      <>
         <b>Figure 7.</b> Complex of 101043-37-2 and CTSB. (A) The 2D binding mode of Ciprofloxacin and CTSB. (B) The binding model of 101043-37-2 on molecular surface of CTSB. 101043-37-2 is colored in cyan, the molecular surface of CTSB is colored in light blue. (C) The 3D binding mode of 101043-37-2 and CTSB. 101043-37-2 is colored in cyan, the surrounding residues in the binding pockets are colored in yellow, the backbone of the receptor is depicted as white cartoon with transparency.
      </>
   } />


   <TRH3 TRkey='c1959c7bdb'>3. Specificity of cathepsin B in amphioxus</TRH3>

   <ImageWithShadow noShadow src={rr.fig8$jpg} width='70%' caption={
      <>
         <b>Figure 8.</b> The results of the sequence alignment used to construct the phylogenetic tree in <Link href='#results-figure-1'>Figure 1</Link>. Because the cathepsin B sequence is too long, the amino acids far from the protein action site are omitted by using brackets and numbers, and the amino acids at the end of the sequence are also omitted. The black letters indicate that the locus is highly conserved, and the letters of different colors represent different kinds of amino acids. The pound sign is used to label the action sites according to the results of molecular docking. The binding loci GLY-90, CYX-92, CYX-184, and LEU-261 in figure 7 are labeled with #.
      </>
   } />

   <TRp TRkey='8aa6fd44d4'>Results:</TRp>
   <TRp TRkey='44bc8af5c5'>Why only amphioxus cathepsin B can degrade microcystin?</TRp>
   <TRp TRkey='40b64e8211'>The interaction between cathepsin B and microcystin LR is simulated by molecular docking (microcystin LR and microcystin RR are the two main microcystins). The results of molecular docking show that the interaction sites between cathepsin B and microcystin LR were GLY-90, CYX-92, CYX-184, and LEU-261, respectively. The sequence alignment results above were labeled with #. Three of them were highly conserved in the evolution of species, and the amino acid LEU-261 was conserved in the alignment results. Though they were different amino acids, they still belonged to the same class. Although the action sites are highly conserved, the alignment results show that there are differences in the amino acid sequence environment around the action sites. Compared with other species, there are some unique amino acid fragments around the cathepsin B site of lancelet, which are labeled with grey background. We infer that it is these fragments that influence the spatial structure around the action sites that enable cathepsin B in amphioxus to interact with algae toxin, capture and complete the digestion of algae toxin.</TRp>
   <TRp TRkey='755905a5f3'>At the same time, by comparing the structures of microcystin LR and microcystin RR, the structural differences between the two kinds of microcystin are only one branch far from benzene ring. The results of molecular docking show that the amino acid sites of cathepsin B interacting with algae toxin generally concentrate around the common branched chains of the two algae toxins, so we judged that the structural differences between the two algae toxins had no decisive effect on the recognition of enzymes and the two algae toxins. The branches of MC-LR and MC-RR are mainly different in electron giving ability, which may influence the interaction of enzymes and the two algae toxins. It is also consistent with our experimental results that cathepsin B can independently decompose microcystin LR and microcystin RR, and shows better effect on MC-LR degradation.</TRp>
   <ImageWithShadow noShadow width='70%' src={rr.fig9$jpg} caption={<><b>Figure 9.</b> Structure of two kinds of microcystin</>} />
   <TRH3 TRkey='601d1062ae'>4. Conjecture about the synergism of two enzymes</TRH3>
   <ImageWithShadow noShadow width='70%' src={rr.fig10$jpg} caption={<><b>Figure 10.</b> Three-dimensional modeling of carboxypeptidase Z/N on the left and subtilisin-like protease on the right</>} />
   <TRp TRkey='9020a0fea6'>In the wet lab experiments, we found that carboxypeptidase Z/N and subtilisin-like protein could not decompose microcystin independently, but when the two enzymes were put into the experiment, they could decompose one of the microcystin, microcystin RR. By comparing with the sequence of cathepsin B (Fig. 3), we found that several action sites of cathepsin B could find similar short peptide structures in these two amino acid sequences. GLY-90, CYX-92 and LEU-261 were found in carboxypeptidase Z/N, while CYX-184 was found in subtilisin-like protease. We speculate that both enzymes are involved in the capture and decomposition of microcystin RR at the same time. However, due to the harsh external environment produced by the simultaneous action of the two enzymes, the three-dimensional structure of the acting algal toxin substrates is limited, so the two enzymes can only decompose microcystin RR and cannot interact with microcystin LR.</TRp>


   <TRH2 TRkey='b65c1aa030' prefix='IV'>Degradation of algae and microcystin</TRH2>
   <TRH3 TRkey='ca54f208ea'>1. Inverted microscope observation of algae samples</TRH3>
   <TRp TRkey='7e56337ff5'>We observed cyanobacterial samples in laboratory with an inverted microscope. The samples of cyanobacteria are from different Sampling point in Taihu Lake. These multiple kinds of algae samples in different growth stage give us a deeper understanding of the diversity and morphological characteristics of cyanobacteria in Taihu Lake.</TRp>

   <ImageWithShadow src={rr.fig11$jpg} width='70%' caption='Figure 11. (A) Different kinds of algae; (B)(C) typical cyanobacteria;(D) The algae split vigorously, suggesting that algae bloom may occur soon' />

   <TRH3 TRkey='0f840ea095'>2. Degradation of algae with enzymic preparation</TRH3>

   <ImageWithShadow src={rr.fig12$jpg} noShadow width='70%' caption={<>Figure 12. Cyanobacteria 1g/tube; From left to right: Enzymic preparation mixed with cyanobacteria at 1:500 & 1:1000 (by weight) and control group<br />(A) 0h (B) 6h (C) 12h</>} />
   <TRp TRkey='b981385dd2'>The degradation effect showed obvious time and concentration gradient. After 12 hours, tube 1 (1:500) has basically been degraded and turned into milky white liquid. According to analysis, its main component is small peptide.</TRp>

   <ImageWithShadow src={rr.fig13$jpg} noShadow noRadius width='70%' caption='Figure 13. Mass spectrometry result of control group, 24h' />
   <ImageWithShadow src={rr.fig14$jpg} noShadow noRadius width='70%' caption='Figure 14. Mass spectrometry result of tube 2, 1:500 (e/c), 24h' />

   <TRp TRkey='215878fcae'>Compared Figure. 13 and Figure. 14, it can be found that the small molecular weight increases significantly, indicating that most algae are degraded into small molecular nutrients. The degradation effect is obvious.</TRp>

   <TRp TRkey='8eeaa531fb'>In addition, the content of algal toxin was detected by HPLC. After 6 hours, the content of algal toxin in the sample was lower than 10 ug/L, which means no toxic. </TRp>
   <TRH3 TRkey='fc381e2e5d'>3. Degradation of algae with GM E-Coli</TRH3>
   <ImageWithShadow src={rr.fig15$jpg} width='70%' caption={<>Figure 15. Crude solution: algae sample collected from TaiHu Lake. (2g/50mL)<br />
      Genetically modified E.Coli for each protein. (500mg/protein)<br />
      Induction: IPTG (2mg/mL)</>} />

   <TRp TRkey='ff69a002cf'>The purpose of this part of the experiment is to verify whether the living engineering bacteria can realize the degradation of algae, so as to show the stability of the expression system we constructed and the efficiency of the induced expression means. It can be seen from the picture that the degradation effect of engineering bacteria is similar to that of enzyme preparation in figure 12, with the solution in the tube turned into milky white suspension. The degradation effect is obvious and our engineered bacteria are effective.</TRp>
   <TRH3 TRkey='ce138b4363'>4. Screening proteins for algal toxin degradation</TRH3>
   <TRp TRkey='0450a9f447'>High-performance liquid chromatography (HPLC; formerly referred to as high-pressure liquid chromatography) is a technique in analytical chemistry used to separate, identify, and quantify each component in a mixture. We use HPLC to test the content of microcystin in all the 110 samples.</TRp>
   <TRp TRkey='dc988b0fc1'>The 28 proteins list and their order numbers are shown in <Link href='#results-table-2'>Table 2</Link>.</TRp>
   <TRp TRkey='d7f7f67322'>We decided to screen microcystin degrading enzymes from 28 proteins instead of 12, because for the degradation of microcystin, in addition to digestion, immune function may also play a role. Therefore, we directly selected 28 related proteins which expressed the most in the expression profile of amphioxus.</TRp>
   <TRp TRkey='a7f3edff85'>In general, our reaction system are enzymes and microcystin mixed at 1:1 (by weight) in PBS buffer, including protein 1,2, ... 28 + MC-LR/MC-RR, and (1+8), (2+8), ... (28+8) + MC-LR/MC-RR. <Link href={rr.HPLC$zip}>The HPLC of all this sample are list here.</Link></TRp>
   <TRp TRkey='d296374b27'>To illustrate the specific analysis process, we use cathepsin B (2+MCLR) as an example.</TRp>
   <ImageWithShadow width='70%' src={rr.fig16$jpg} noRadius noShadow caption='Figure 16. HPLC result of 2 LR' />
   <ImageWithShadow width='70%' src={rr.fig17$jpg} noRadius noShadow caption='Figure 17. HPLC result of 1 LR' />
   <TRp TRkey='af8fcdab36'>Peak area is directly proportional to the concentration of Microcystin. Compared figure 16 and figure 17, the degradation effect of protein 2 (cathepsin B) to MC-LR is significant，whose final microcystin concentration is 1/10 of protein 1 (cathepsin D).</TRp>
   <TRp TRkey='526335689d'>The specific relationship between the peak area and the concentration of microcystin can be obtained by preparing the standard solution with concentration gradient. We have calculated the final microcystin concentration of all the 110 samples and <Link href={rr.HPLCCON$xlsx}>list here</Link>.</TRp>


   <ImageWithShadow width='70%' src={rr.fig18$jpg} noRadius noShadow caption='Figure 18. Residual concentration of microcystin 1' />
   <ImageWithShadow width='70%' src={rr.fig19$jpg} noRadius noShadow caption='Figure 19. Residual concentration of microcystin 2' />

   <TRp TRkey='bfcf958def'>Analysis of the above data shows that:</TRp>
   <DocOrderedList items={[
      <TRp TRkey='696e44bb75'>MC-LR degradation enzyme: protein 2 (amphioxus cathepsin B), degradation rate: 0.35mg/L/h;</TRp>,
      <TRp TRkey='7e5bc57ce7'>MC-RR degradation enzyme: protein 12+8 (amphioxus subtilisin-like protease + amphioxus carboxypeptidase Z/N), degradation rate 0.2mg/L/h); We believe there is a synergistic effect between these two enzymes.</TRp>,
   ]} />
   <TRp TRkey='ed8dba1e7a'>All of these results have been partially explained by our molecular docking model. Four binding loci between protein 2 and MC-LR have been found and located. We found that protein 12 and 8 separately have part of the binding loci in protein 2. That explains they need synergistic mechanism to take effect. <Link href='/Model'>Click here to get more.</Link></TRp>

   <ImageWithShadow noShadow src={rr.ut2$jpg} width='70%' />

   <TRp TRkey='f8c8938f1e'>In addition to screening the degradation enzymes, we also analyzed the reaction mechanism as much as possible. We calculate the structure through the sequence, and predict the function through the structure. After experimental verification, we explain the reaction mechanism through structure, and finally return to sequence specificity. We think that's the core attraction of synthetic biology, and that’s iGEMer’s pleasure - to practice central rule in our own project.</TRp>

   <TRH3 TRkey='0ba59c7f31'>5. Characterization of key protein</TRH3>
   <TRp TRkey='d7c183d729'>We further characterized the key proteins in our enzymatic preparation. The main characterization method is enzyme activity test kit.</TRp>
   <TRp TRkey='cfe9a876f9'>In fact, the enzyme activity kit itself is a test of our annotation effect. For example, we think that part of the sequence of protein 2 is similar to the main domain of cathepsin B, so we name it amphioxus cathepsin B. But whether it is really a kind of cathepsin B should be determined by its reaction with the standard substrate.</TRp>
   <TRp TRkey='75dcc82b73'>This also tests whether our expression system is effective, which means these eukaryotic enzymes, after our optimization, can be expressed and remain active in prokaryotic system.</TRp>
   <TRp TRkey='188bdadd02'>Finally, enzyme activity and enzyme kinetic characterization are also important parts of the whole experimental process. It represents the quality of our part and our protein to some extent.</TRp>
   <TRp TRkey='f2e4792b13'>Results:</TRp>

   <Parafolding left paras={[
      {
         title: 'Lipase activity test',
         body: <>
            <TRp TRkey='8df230d8e8'>We calculate the enzyme activity of our protein 16, pancreatic lipase.</TRp>
            <TRp TRkey='024a145cfa'><Link href={rr.Lipaseactivitytest$pdf}>Full report is list here.</Link></TRp>
            <ImageWithShadow noRadius noShadow width='70%' src={rr.fig20$jpg} caption='Figure 20. Glycerol standard curve' />
            <TRp TRkey='858b7f7277'>Lipase activity is reported as nmole/min/mL = milliunit/mL. One unit of Lipase is the amount of enzyme that will generate 1.0 μmole of glycerol from triglycerides per minute at 37 ℃. Our lipase activity is 6.88 milliunits/L</TRp>

         </>,
      },
      {
         title: 'lysozyme C & G',
         body: <>
            <TRp TRkey='c99021c379'>Neither of our lysozymes responds to the kit bacteria substrate. According to the analysis, we think there may be two reasons. First of all, lysozyme needs more stringent reaction conditions, which may cause unsuitable in buffer. Secondly, lysozyme has a strong specificity and a precise classification. Maybe our two enzymes and kit substrate bacteria don’t match.</TRp>

         </>,
      },
      {
         title: 'Cathepsin B, D & L',
         body: <>
            <TRp TRkey='32fd908541'>We analyzed the enzyme reaction kinetics of protein 1,2 &3, cathepsin L, B & D.</TRp>
            <TRp TRkey='5ea1c7c922'>Full report is list here.</TRp>
            <DocUnorderedList items={[
               <Link href={rr.CathepsinBactivitytest$pdf}>Cathepsin B activity test</Link>,
               <Link href={rr.CathepsinDactivitytest$pdf}>Cathepsin D activity test</Link>,
               <Link href={rr.CathepsinLactivitytest$pdf}>Cathepsin L activity test</Link>,
            ]} />
            <TRp TRkey='f4343a73ee'>Michaelis equation represents a velocity equation of the relationship between the initial rate of enzymatic reaction and the concentration of substrate. The formula is as follows</TRp>
            <ImageWithShadow noRadius noShadow src={rr.ut3$jpg} width='auto' />
            <TRp TRkey='9efe74bc7f'>V<sub style={{ verticalAlign: 'sub', fontSize: 'smaller' }}>0</sub> represents the initial reaction velocity, V<sub style={{ verticalAlign: 'sub', fontSize: 'smaller' }}>max</sub> is the reaction rate of enzymes saturated by substrates, and [S] is the concentration of substrate. </TRp>
            <TRp TRkey='be7da35f21'>We determined Km and Vmax for our proteins by performing non-linear regression using Michaelis-Menten model.</TRp>
            <TRp TRkey='5c6c3883ee'><b>Cathepsin L</b></TRp>
            <TRp TRkey='a2ea817770'>Initial speed:</TRp>
            <ImageWithShadow noRadius noShadow src={rr.speed1$jpg} width='auto' />
            <TRp TRkey='54e7e3a172'>Michaelis model:</TRp>
            <ImageWithShadow noRadius noShadow src={rr.speed2$jpg} width='auto' />
            <TRp TRkey='9f12582092'><b>Cathepsin B</b></TRp>
            <TRp TRkey='d86d3f2435'>Initial speed</TRp>
            <ImageWithShadow noRadius noShadow src={rr.speed3$jpg} width='auto' />
            <TRp TRkey='55e14ea5dd'>Michaelis model</TRp>
            <ImageWithShadow noRadius noShadow src={rr.speed4$jpg} width='auto' />
            <TRp TRkey='69273f09f1'><b>Cathepsin D</b></TRp>
            <TRp TRkey='7776db961e'>Initial speed</TRp>
            <ImageWithShadow noRadius noShadow src={rr.speed5$jpg} width='auto' />
            <TRp TRkey='215d4bfc0e'>Michaelis model</TRp>
            <ImageWithShadow noRadius noShadow src={rr.speed6$jpg} width='auto' />
            <TRp TRkey='43dedc552a'>All of the three cathepsin show great fitness to Michaelis equation, so the Km represents affinity between enzyme and substrate well. The kinetic characterization of enzyme reaction was successful.</TRp>
         </>,
      },
   ]} />
</>);

export const body = {
   title: 'Results',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab Work', path: '/Experiments' },
      { text: 'Results', path: '/Results' },
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
