import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
// import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRH3 from './comps/TRH3';
import TRp from './comps/TRp';
// import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

import './css/Model.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Model3D } from './comps/Model3D';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';
import { Link } from './comps/Link';
// import { Link } from './comps/Link';

const rr = assets.pages.Results;

const content = (<>
   <div className='model-3d-container' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   }}>
      <div style={{
         width: '25em',
         height: '20em',
         // background: 'red',
         flex: '0 0 auto',
      }}>
         <Model3D id='cat-b' url={assets.pages.CathepsinB$pdb$txt} />
      </div>
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         marginLeft: '2em',
         marginRight: '2em',
      }}>
         <div className='text' style={{ fontSize: '1.8em', marginLeft: 0, padding: 0, textAlign: 'left', marginBottom: 0 }}>Cathepsin B from amphioxus</div>
         <div className='text' style={{ fontSize: '1.2em', marginLeft: 0, padding: 0, textAlign: 'left' }}>One of our mysterious key to turn cyanobacteria from a pollution to a resource</div>
      </div>
   </div>

   <TRp TRkey='45245e1bf4'>We are always trying to combine computer technology with biological science. Through large database, sharing server resources and new bioinformation software, we can build accurate biological model and analyze it from multiple perspectives. In fact, modern modeling technology has been able to reproduce the central rule on the computer, which is an exciting news for all synthetic biology researchers. Our core idea of modeling is a two-way relationship between sequence, molecule and experiment. Starting from the sequence, we build the molecular model, predict the chemical reaction, and help us design the experiment. Starting from the experimental results, we analyze the molecular model, and finally return to the sequence annotation.</TRp>

   <ImageWithShadow noShadow width='70%' src={assets.pages.Results.ut2$jpg} caption={<><b>Figure 1.</b> Two-way relationship between sequence, molecule and experiment</>} />

   <TRp TRkey='b2f89a8567'>We finally constructed five models at three levels. </TRp>
   <DocOrderedList items={[
      <>
         <TRp TRkey='0f44011c1c'>Sequence level - <i style={{ fontStyle: 'italic' }}>Phylogenetic analysis of amphioxus cathepsin B</i></TRp>
      </>,
      <>
         <TRp TRkey='b37a6e0281'>Structure level - <i style={{ fontStyle: 'italic' }}>homologous 3D structure model for key proteins</i> & <i style={{ fontStyle: 'italic' }}>Molecular docking model</i></TRp>
      </>,
      <>
         <TRp TRkey='003d29036c'>Reaction level - <i style={{ fontStyle: 'italic' }}>Evaluation model of the affinity between proteins and microcystin</i> & <i style={{ fontStyle: 'italic' }}>Kinetic model of cathepsin reaction</i></TRp>
      </>,
   ]} />

   <TRH2 TRkey='fbc6f40d4e' prefix='I'>Phylogenetic analysis of amphioxus cathepsin B - Model at sequence level</TRH2>
   <TRp TRkey='044f9437ba'>In this part, we constructed phylogenetic tree, a molecular evolution model of amphioxus cathepsin B. Its main function is to determine the position of the target protein in the evolutionary tree, to compare the sequence differences between the target protein and other homologous proteins, and to annotate the function of the target protein. In the following models, we will return to this modeling results again, and analyze the actual functions of the protein from the perspective of sequence, as well as the specified advantages of amphioxus cathepsin B in the degradation of algal toxins.</TRp>
   <TRH3 TRkey='ac9f410159'>Principle & Method</TRH3>
   <TRp TRkey='319c21660b'><Link href='https://2019.igem.org/wiki/images/2/2c/T--SEU-Nanjing-China--e0f15584.pdf'>Click here for more details of modelling process.</Link></TRp>
   <TRH3 TRkey='7ad41ef060'>Results</TRH3>

   <div id='model-figure-2'>
      <ImageWithShadow noRadius noShadow src={assets.pages.Results.ut1$jpg}
         caption={<><b>Figure 2.</b>The unrooted phylogenetic tree of cathepsin B from various species constructed by the neighbor-joining method in MEGApackage. Bootstrap majority consensus values on 1000 replicates are indicated at each branch point in percent. Sequence obtained from NCBI are: Human, <i>Homo sapiens</i> (<b>HsCB</b>: NP 001899.1);Mouse, Mus <i>musculus</i> (<b>MmCB</b>: NP 031824.1); Rat, <i>Rattus norvegicus</i> (<b>RnCB</b>: NP 072119.2); African clawed frog, <i>Xenopus laevis</i> (<b>XlCB</b>: NP 001079570.1); Zebrafish, <i>Danio rerio</i> (<b>DrCB</b>: NP 998501.1); Rainbow trout, <i>Oncorhynchus mykiss</i> (<b>OmCB</b>: XP 021441036.1); Elephant shark, <i>Callorhinchus milii</i> (<b>CmCB</b>: XP 007882610.1); Lancelet, <i>Branchiostoma belcheri tsingtauense</i> (<b>BbtCB</b>: AAQ83887.1) Sea Urchin, <i>Strongylocentrotus purpuratus</i> (<b>SpCB</b>: XP_787947.3, XP 011661731.1, undeleted connection)</>}
      />
   </div>

   <TRp TRkey='ff04726f01'><b>Analysis</b></TRp>
   <TRp TRkey='279638703f'>The Location of Lancelet on the Species Evolution Map</TRp>
   <TRp TRkey='b0aef23d0b'>Because there are more kinds of amino acids than bases, the similarity of amino acid sequences can show the relationship between species to a certain extent. For example, the 67 and 68 amino acids in the amino acid sequence are PN in lancelet and sea urchin, and GP in other species. Similarly, the 106 to 109 amino acids are IKEV in cathepsin B sequence of lancelet, which is highly consistent with sea urchin, but has low similarity with other species. Therefore, lancelet has close evolutionary relationship with invertebrates such as sea urchins. On the other hand, at some amino acid sites, such as 60 and 61 amino acids, sea urchins showed ML, but LC in other species; as 204 to 206 amino acids, TKG in sea urchins and SRP in other species. To some extent, this reflects the relationship between lancelet and vertebrates. Therefore, we infer that amphioxus is a transitional animal between invertebrates and invertebrates on the phylogenetic map by sequence alignment of cathepsin B.</TRp>

   <TRH2 TRkey='068e1114fc' prefix='II'>3-D structure model for key proteins - Model at structure level</TRH2>
   <TRp TRkey='cef282c01b'>It is well known that a protein embodies its activity and biological functions only when its linear sequence of amino acids folds into specific spatial conformation, which is crucial for biology research. </TRp>
   <TRp TRkey='06ad1a2a30'>The understanding of structure-function relationship of enzymes requires detailed information of their three-dimensional structure. Protein structure determination by X-ray and NMR methods, the two most frequently used experimental procedures, are often difficult and time-consuming. Thus, computer modeling of protein structures has become an increasingly active and attractive option for obtaining predictive models of three-dimensional protein structures.</TRp>
   <TRp TRkey='1811715b83'>Identification of a protein function involves different approaches in extracting interactions sites, with the resulting accuracy varying to the approach's cost. A right balance of cost and accuracy would provide an alternative to protein's functionality identification. This balance could be found in sequence analysis which is inherently simpler and yet able to yield a considerable accuracy.</TRp>
   <TRp TRkey='fc954ab445'>Nowadays, various large-scale genome sequencing projects have disclosed much more protein linear sequences than protein structures, making the amino acids sequences-based protein 3D-structure prediction become an important research topic in the post-genomic era.</TRp>
   <TRH3 TRkey='e21228aba5'>Principle</TRH3>
   <TRp TRkey='c7d28c54f1'>Template-based modeling is a class of methods for constructing an atomic-resolution model of a protein from its amino acid sequence. All the tools here accept a protein's amino acid sequence as input, search known 3D structures for appropriate template(s) and generate a 3D model containing the coordinates of the atoms of the protein. When sequence similarity between the target sequence and a protein of known structure is significant (above 30% identity), this process is referred to as (close) homology modeling. In homology modeling, relatively simple sequence comparison methods are applied (e.g. BLAST or PSI-BLAST) in order to find a template, and to generate the alignment between target and template. For such cases we can use automated servers such as ModWeb and SWISS-MODEL. When there is no known structure with significant sequence similarity to the target (below 30% identity), more sophisticated methods are needed to find appropriate templates (if any) and to generate more accurate alignments. This process is referred as distant homology modeling, fold recognition or threading. In general, it was shown that in such cases meta-servers that use the results of several servers to produce a consensus prediction, preformed the best.</TRp>

   <ImageWithShadow src={assets.pages.Design.fig2$jpg} width='70%'
      caption={<><b>Figure 3.</b> Overall approach of protein structure prediction</>} />

   <TRp TRkey='494b90551f'>In our project, proteins developed from natural creatures, amphioxus, are shown to have high homology with known protein sequences. Thus, we conduct modeling process mainly using SWISS-MODEL to further predict the three-dimensional structure of our gained proteins.</TRp>


   <TRH3 TRkey='6e21a30d17'>Method</TRH3>
   <TRp TRkey='a6367f0a42'><Link href='https://2019.igem.org/wiki/images/5/5e/T--SEU-Nanjing-China--b7557a57.pdf'>Click here for more details of modelling process.</Link></TRp>
   <TRp TRkey='36a7ccf1b3'>We take the three key proteins of our project, cathepsin B, subtilisin-like protease and carboxypeptidase Z/N, as examples to show our results of molecule 3D structure modelling. </TRp>

   <DocUnorderedList items={[
      <Link href={assets.pages.CathepsinB$pdb$txt}>cathepsin B</Link>,
      <Link href={assets.pages.subtilisinLikeprotease$pdb$txt}>subtilisin-like protease</Link>,
      <Link href={assets.pages.carboxypeptidaseZ_N$pdb$txt}>carboxypeptidase Z/N</Link>,
   ]} />
   <div style={{ width: 'auto', display: 'flex' }}>
      <div style={{ width: '33%', height: '16em' }}>
         <Model3D id='cat-b-2' url={assets.pages.CathepsinB$pdb$txt} />
      </div>
      <div style={{ width: '33%', height: '16em' }}>
         <Model3D id='sub' url={assets.pages.subtilisinLikeprotease$pdb$txt} />
      </div>
      <div style={{ width: '33%', height: '16em' }}>
         <Model3D id='car' url={assets.pages.carboxypeptidaseZ_N$pdb$txt} />
      </div>
   </div>


   <TRp TRkey='3d19f570d2'>The main method of protein structure prediction is homologous modeling. The protein model constructed by this method is better in precision and annotation. Therefore, we only model cathepsin B with initio modelling and compare it with homologous modelling. </TRp>
   <TRp TRkey='227dfe6b98'>The molecule structure built with ab initio modelling is based on energy minimization, so its resulting structure are a series of possible model rather than a single result.</TRp>
   <TRp TRkey='925d5f0fda'><Link href={rr.TASSER$zip}>Ab initio modelling</Link></TRp>
   <TRp TRkey='1f1ae548b6'>Here we take cathepsin B as an example to compare two result.</TRp>

   <ImageWithShadow width='70%' src={rr.fig4$jpg} caption={<><b>Figure 5.</b> Result of 3-D structure prediction<br />Left: Ab initio modelling Right: Homologous modelling</>} />
   <TRp TRkey='62df3ada8c'>The model built with method of homologous modelling show more different loop and clearer domain structure, which means more information about function annotation and prediction.</TRp>
   <TRp TRkey='6a6138b46b'>We also take cathepsin B as an example for further analysis.</TRp>
   <TRH3 TRkey='a66ffb9d59'>Homology modeling of cathepsin B</TRH3>
   <TRp TRkey='599f56e286'>The modeling result of cathepsin B is depicted in Figure 6A and 6B. The Ramachandran plot for cathepsin B showed that 99% residues are in allowed regions, indicating that the 3D structure of the model is reasonable. There are three main alpha helix and multiple beta strands regions. The structural analysis of the cathepsin B modeling results is shown in Figure 7. The cathepsin B structure is basically consistent with the template structure. The average RMSD value of the three-dimensional structure overlap is 1.012Å, and both have the same alpha helix and beta strands regions. The overall identity of the amino acid sequence was 61.86% by BLAST. </TRp>

   <ImageWithShadow src={rr.fig5$jpg} noShadow width='75%' caption={<>
      <b>Figure 6.</b> (A) The homology model of cathepsin B. (B) Ramachandran plot for cathepsin B. Dark green dots represent the residues in favored regions; yellow dots represent the residues in allowed regions, red cross represents the residues in irrational regions.
   </>} />
   <ImageWithShadow src={rr.fig6$jpg} noShadow width='75%' caption={<>
      <b>Figure 7.</b> Structural analysis of cathepsin B modeling results. (A) The result of superposition of the cathepsin B model structure and the template structure. The cathepsin B structure is shown in purple, the template structure is shown in cyan, and the average RMSD value of the overlay is 1.012Å. (B) The structure-based sequence comparison between cathepsin B and the template structure. The same or similar residues are highlighted in blue and dissimilar ones are highlighted in Red, the darker color indicates more similar or dissimilar residues. The sequence corresponding to alpha-helix regions are marked by red line.
   </>} />


   <TRH2 TRkey='8069307f5a' prefix='III'>Molecular Docking - Model at structure level</TRH2>
   <TRH3 TRkey='09936aed65'>Principle</TRH3>
   <TRp TRkey='4c1ada6318'>In the field of molecular modeling, docking is a method which predicts the preferred orientation of one molecule to a second when bound to each other to form a stable complex. Knowledge of the preferred orientation in turn may be used to predict the strength of association or binding affinity between two molecules using, for example, scoring functions.</TRp>
   <TRp TRkey='003a9271db'>Protein-ligand docking is the most commonly used docking technique. It predicts the position of a ligand when it is bound to its receptor molecule, in this case, a protein. It predicts the position of a ligand when it is bound to its receptor molecule, in this case, a protein. The interaction between ligand and receptor is a process of molecular recognition, including electrostatic interaction, hydrogen bonding interaction, hydrophobic interaction, van der Waals interaction and so on. The binding mode and affinity between them can be predicted by calculation. A protein-ligand docking consists of two essential components, sampling and scoring. Sampling searches for possible ligand-binding orientations/conformations (poses) near a binding site of a protein, and scoring predicts the binding tightness for each ligand pose with a physical or empirical energy function.</TRp>

   <ImageWithShadow src={assets.pages.Design.fig3$jpg} noShadow width='70%'
      caption={<><b>Figure 8.</b> Molecular docking</>} />

   <TRp TRkey='67911998c1'>In our project, we use molecular docking to discover ligand-protein interactions, explain biological experiments, discover new active compounds and provide guidance for compound optimization.</TRp>
   <TRH3 TRkey='9b193f2b9e'>Method</TRH3>
   <TRp TRkey='981be66c31'>MOE Dock was used for molecular docking of CTSB with the small molecule and predicting the binding affinity. Small molecule was defined as ligand and CTSB as target. The 2D structures of small molecule were converted to 3D in MOE through energy minimization. Then the protonation state of target and the orientation of the hydrogens were optimized by LigX, at the PH of 7 and temperature of 300 K. Prior to docking, the force field of AMBER10:EHT and the implicit solvation model of Reaction Field (R-field) were selected. The binding site was identified by superpose CTSB with the original template structure, the position where the ligand in template structure was defined as binding site of CTSB. The docking workflow followed the “induced fit” protocol, in which the side chains of the receptor pocket were allowed to move according to ligand conformations, with a constraint on their positions. The weight used for tethering side chain atoms to their original positions was 10. All docked poses of molecules were ranked by London dG scoring first, then a force field refinement was carried out on the top 30 poses followed by a rescoring of GBVI/WSA dG. The best ranked pose was selected as the final binding mode.</TRp>
   <TRp TRkey='58e10bc991'>To investigate the binding affinity of cathepsin B with 101043-37-2 (Microcystin LR), docking simulation studies were carried out. The docking scores are shown in table 4.</TRp>

   <ImageWithShadow noShadow noRadius width='80%' src={rr.tab4$jpg} />

   <TRH3 TRkey='52c9f9604e'>Result</TRH3>
   <TRp TRkey='16e4d4a094'>The binding model between CTSB and 101043-37-2 are shown in Figure 9. The nitrogen atoms of guanidine group of 101043-37-2, regarded as hydrogen bond donor, forms hydrogen bonds with the backbone oxygen atom of Gly90 and Cys92, and with the side-chain chlorine atom of Cys184 in CTSB respectively. The nitrogen atom of 101043-37-2, regarded as hydrogen bond donor, forms a hydrogen bond with the backbone oxygen atom of Leu261 in CTSB.</TRp>

   <ImageWithShadow noShadow src={rr.fig7$jpg} width='80%' caption={
      <>
         <b>Figure 9.</b> Complex of 101043-37-2 and CTSB. (A) The 2D binding mode of Ciprofloxacin and CTSB. (B) The binding model of 101043-37-2 on molecular surface of CTSB. 101043-37-2 is colored in cyan, the molecular surface of CTSB is colored in light blue. (C) The 3D binding mode of 101043-37-2 and CTSB. 101043-37-2 is colored in cyan, the surrounding residues in the binding pockets are colored in yellow, the backbone of the receptor is depicted as white cartoon with transparency.
      </>
   } />

   <TRp TRkey='4b16161236'><b>In general, with the molecule docking model, we screened out the potential microcystin degradation enzymes for simplification of subsequent experiment. We found out the interaction sites between cathepsin B and microcystin LR, GLY-90, CYX-92, CYX-184, and LEU-261. This helped us understand the mechanism of microcystin degradation reaction and further construct the general evaluation model of the affinity between proteins and microcystin.</b></TRp>


   <TRH2 TRkey='764f5b49fd' prefix='IV'>Evaluation model of the affinity between proteins and microcystin - model at reaction level</TRH2>
   <TRp TRkey='8d47536910'>Based on the result of molecule docking, we have developed an evaluation model to judge the affinity between potential protein and microcystin based on the sequence alignment around binding sites. In fact, this model has predicted a new synergism of two enzymes on microcystin degradation and been verified by experiment.</TRp>
   <TRH3 TRkey='9ce24b0933'>Principle & Method</TRH3>


   <TRp TRkey='c1959c7bdb'><b>Specificity of cathepsin B in amphioxus</b></TRp>

   <ImageWithShadow noShadow src={rr.fig8$jpg} width='70%' caption={
      <>
         <b>Figure 10.</b> The results of the sequence alignment used to construct the phylogenetic tree in <Link href='#model-figure-2'>Figure 2</Link>. Because the cathepsin B sequence is too long, the amino acids far from the protein action site are omitted by using brackets and numbers, and the amino acids at the end of the sequence are also omitted. The black letters indicate that the locus is highly conserved, and the letters of different colors represent different kinds of amino acids. The pound sign is used to label the action sites according to the results of molecular docking. The binding loci GLY-90, CYX-92, CYX-184, and LEU-261 in figure 9 are labeled with #.
   </>
   } />

   <TRp TRkey='8aa6fd44d4'><b>Principle</b></TRp>
   <TRp TRkey='44bc8af5c5'>Why only amphioxus cathepsin B can degrade microcystin?</TRp>
   <TRp TRkey='40b64e8211'>The interaction between cathepsin B and microcystin LR is simulated by molecular docking (microcystin LR and microcystin RR are the two main microcystins). The results of molecular docking show that the interaction sites between cathepsin B and microcystin LR were GLY-90, CYX-92, CYX-184, and LEU-261, respectively. The sequence alignment results above were labeled with #. Three of them were highly conserved in the evolution of species, and the amino acid LEU-261 was conserved in the alignment results. Though they were different amino acids, they still belonged to the same class. Although the action sites are highly conserved, the alignment results show that there are differences in the amino acid sequence environment around the action sites. Compared with other species, there are some unique amino acid fragments around the cathepsin B site of lancelet, which are labeled with grey background. We infer that it is these fragments that influence the spatial structure around the action sites that enable cathepsin B in amphioxus to interact with algae toxin, capture and complete the digestion of algae toxin.</TRp>
   <TRp TRkey='755905a5f3'>At the same time, by comparing the structures of microcystin LR and microcystin RR, the structural differences between the two kinds of microcystin are only one branch far from benzene ring. The results of molecular docking show that the amino acid sites of cathepsin B interacting with algae toxin generally concentrate around the common branched chains of the two algae toxins, so we judged that the structural differences between the two algae toxins had no decisive effect on the recognition of enzymes and the two algae toxins. The branches of MC-LR and MC-RR are mainly different in electron giving ability, which may influence the interaction of enzymes and the two algae toxins. It is also consistent with our experimental results that cathepsin B can independently decompose microcystin LR and microcystin RR, and shows better effect on MC-LR degradation.</TRp>
   <ImageWithShadow noShadow width='70%' src={rr.fig9$jpg} caption={<><b>Figure 11.</b> Structure of two kinds of microcystin</>} />

   <TRH3 TRkey='d3d77136ea'>Result</TRH3>
   <TRp TRkey='4a97567a96'>The synergism of two enzymes predicted by this model</TRp>

   <ImageWithShadow noShadow width='70%' src={rr.fig10$jpg} caption={<><b>Figure 12.</b> Three-dimensional modeling of carboxypeptidase Z/N on the left and subtilisin-like protease on the right</>} />
   <TRp TRkey='9020a0fea6'>In the wet lab experiments, we found that carboxypeptidase Z/N and subtilisin-like protein could not decompose microcystin independently, but when the two enzymes were put into the experiment, they could decompose one of the microcystin, microcystin RR. By comparing with the sequence of cathepsin B (Fig. 3), we found that several action sites of cathepsin B could find similar short peptide structures in these two amino acid sequences. GLY-90, CYX-92 and LEU-261 were found in carboxypeptidase Z/N, while CYX-184 was found in subtilisin-like protease. We speculate that both enzymes are involved in the capture and decomposition of microcystin RR at the same time. However, due to the harsh external environment produced by the simultaneous action of the two enzymes, the three-dimensional structure of the acting algal toxin substrates is limited, so the two enzymes can only decompose microcystin RR and cannot interact with microcystin LR.</TRp>

   <TRH2 TRkey='d90f62bf5a' prefix='V'>Kinetic model of cathepsin reaction</TRH2>
   <TRH3 TRkey='24b1c87b72'>Principle</TRH3>
   <TRp TRkey='4a53a90e6a'>In biochemistry, Michaelis-Menten kinetics is one of the best-known models of enzyme kinetics. It is named after German biochemist Leonor Michaelis and Canadian physician Maud Menten. The model takes the form of an equation describing the rate of enzymatic reactions, by relating reaction rate v (rate of formation of product, [P]) to [S], the concentration of a substrate S. Its formula is given by</TRp>
   <TRp TRkey='8f5693857a'>This equation is called the Michaelis-Menten equation. Here, Vmax represents the maximum rate achieved by the system (which happens at saturating substrate concentration). The value of the Michaelis constant KM is numerically equal to the substrate concentration at which the reaction rate is half of Vmax. Biochemical reactions involving a single substrate are often assumed to follow Michaelis-Menten kinetics, without regard to the model's underlying assumptions. [from <Link href='https://en.wikipedia.org/wiki/Michaelis%E2%80%93Menten_kinetics'>Wikipedia.org</Link>]</TRp>


   <TRH3 TRkey='7e18c60df3'>Method</TRH3>
   <TRp TRkey='32fd908541'>We analyzed the enzyme reaction kinetics of protein 1,2 &3, cathepsin L, B & D.</TRp>
   <TRp TRkey='5ea1c7c922'>Full report is list here.</TRp>

   <DocUnorderedList items={[
      <Link href={rr.CathepsinBactivitytest$pdf}>Cathepsin B activity test</Link>,
      <Link href={rr.CathepsinDactivitytest$pdf}>Cathepsin D activity test</Link>,
      <Link href={rr.CathepsinLactivitytest$pdf}>Cathepsin L activity test</Link>,
   ]} />

   <TRH3 TRkey='7e18c60df3'>Result</TRH3>
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
   <TRp TRkey='43dedc552a'>All of the three cathepsin show great fitness to Michaelis equation, so the Km represents affinity between enzyme and substrate well. The kinetic characterization of enzyme reaction was successful.result</TRp>

</>);

export const body = {
   title: 'Model',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab Work', path: '/Experiments' },
      { text: 'Model', path: '/Model' },
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
