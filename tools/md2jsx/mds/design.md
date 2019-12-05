## Overview

Algae Terminator are a group of young active people who consistently focus on harmful algae blooms (HAB), a serious environment problem threatening water quality all over the world. During our brainstorm before 2019 iGEM, we read our instructor, professor Lu’s paper, which describe a newly found mechanisms that amphioxus takes to intracellularly digest food particles, mainly algae. This discover give us direct inspiration that if we can in vitro express these proteins used in intracellular digestion at scale, it may turn cyanobacteria, a troublesome pollution into a protein resource with great potential. What’s more, since intracellular digestion is usually a mechanism of prokaryotes, related proteins are highly possible to be expressed and remain active in prokaryotic carriers. From that point, our story began.

## Screen and annotation of key genes

First of all, we need to know which proteins are able to degrade cyanobacteria. The full-length cDNA transcriptome library has already been constructed. After being sequenced by Pacbio third generation sequencing technology, the main active ingredients of the library were analyzed using Blastn, Blastx, SWISSPROT, KEGG, COG, Interpro and GO. The results of the analysis showed that the main active components of the library were composed of the following proteins.

table 1. Gene expression profile of diverticulum phagocytic epithelial cells 

Among these proteins, we think most of them may be useless while the rest are effective for degrading cyanobacteria. In industrial applications, each new protein means more than one fermentation line, so optimizing and simplifying the natural proteome is necessary. Before performing experimental tests on each protein, we need to predict which proteins are functionally useful. Since in starved Branchiostoma, diverticulum epithelial cells show more activity in intracellular digestion, we first analyze the comparison of gene expression between cells in empty (after 3 days of starvation) and sated states. Furthermore, many properties of proteins can be obtained by sequence, so we compared the similarities between unknown protein sequences and known protein sequences by searching database, and predict the function of proteins. Basic Local Alignment Search Tool (BLAST) is a computer algorithm that is available for use online at the National Center for Biotechnology Information (NCBI) website and many other sites. We use BLAST to align these proteins with other proteins in databases to find out their function. Finally, integrated the analysis of time and function, we finally selected 10 proteins as the final enzyme composition. They are Cathepsin L/B/D, trypsin-like serine protease, saposin B, pancreatic lipase-like protein, carboxypeptidase Z/N, subtilisin-like protease, endo-beta-1,4-glucanasea, and plasminogen.

## Phylogenetic analysis of amphioxus

In order to better annotate the function of the target protein and analyze the specificity of amphioxus sequence, we carried out phylogenetic analysis of amphioxus.

Based on our sequenced proteins and combined with relevant literature, we use nucleic acid (NCBI, EMBL, DDBJ) and protein (SWISSPROT) databases to identify homologous genes or proteins of the corresponding proteins and analyze their evolutionary history. In the process of database mining, we analyze the potential information in other people's data, find out the characteristic sequences of homologous proteins, and assist the experimental design.

Phylogenetic analysis is generally based on molecular clocks. Molecular clock theory is that the evolution of molecular sequence is carried out at a constant rate, so the number of accumulated mutations is proportional to the evolution time. It can be concluded that: 1) with the evolution of species, the closer the species with similar evolutionary level are, the closer their sequence is; 2) if evolved from the same species, the differentiated species will retain the mark of common ancestor, which is different from other ancestors. Based on this hypothesis, phylogenetic trees can be constructed according to the sequence or structure differences of proteins. Phylogenetic trees are usually represented by branching hierarchies or topological graphs, which can reflect the divergent time or evolutionary distance of each species or protein molecule through the length of the tree branches.
 
Figure 1: The unrooted phylogenetic tree of cathepsin B from various species

In addition to the traditional phylogenetic tree analysis, that is, to determine the position of amphioxus in the evolutionary system between invertebrates and invertebrates, our team also made interesting exploration on the specificity of cathepsin B of amphioxus, its structure, and the reaction mechanism between it and algal toxins. To learn more, click here.（链接到文件夹中的Sequence analysis of Cathepsin B）

## Computer modeling of protein structures

It is well known that a protein embodies its activity and biological functions only when its linear sequence of amino acids folds into specific spatial conformation, which is crucial for biology research. The understanding of structure-function relationship of enzymes requires detailed information of their three-dimensional structure. Protein structure determination by X-ray and NMR methods, the two most frequently used experimental procedures, are often difficult and time-consuming. Thus, computer modeling of protein structures has become an increasingly active and attractive option for obtaining predictive models of three-dimensional protein structures. Identification of a protein function involves different approaches in extracting interactions sites, with the resulting accuracy varying to the approach's cost. A right balance of cost and accuracy would provide an alternative to protein's functionality identification. This balance could be found in sequence analysis which is inherently simpler and yet able to yield a considerable accuracy.
We mainly built two models to better analyze the sequence of target protein. 

## 1. 3-D Structure Prediction

Nowadays, various large-scale genome sequencing projects have disclosed much more protein linear sequences than protein structures, making the amino acids sequences-based protein 3D-structure prediction become an important research topic in the post- genomic era. There are three approaches for protein 3D-structure modeling in the recent literature, homology modeling, threading, and ab initio prediction.

Template-based modeling is a class of methods for constructing an atomic-resolution model of a protein from its amino acid sequence. All the tools here accept a protein's amino acid sequence as input, search known 3D structures for appropriate template(s) and generate a 3D model containing the coordinates of the atoms of the protein. When sequence similarity between the target sequence and a protein of known structure is significant (above 30% identity), this process is referred to as (close) homology modeling. In homology modeling, relatively simple sequence comparison methods are applied (e.g. BLAST or PSI-BLAST) in order to find a template, and to generate the alignment between target and template. For such cases we can use automated servers such as ModWeb and SWISS-MODEL. When there is no known structure with significant sequence similarity to the target (below 30% identity), more sophisticated methods are needed to find appropriate templates (if any) and to generate more accurate alignments. This process is referred as distant homology modeling, fold recognition or threading. In general, it was shown that in such cases meta-servers that use the results of several servers to produce a consensus prediction, preformed the best.

Figure 2: Overall approach of protein structure prediction

In our project, proteins developed from natural creatures, amphioxus, are shown to have high homology with known protein sequences. Thus, we conduct modeling process mainly using SWISS-MODEL to further predict the three-dimensional structure of our gained proteins.

## 2. Molecular docking

In the field of molecular modeling, docking is a method which predicts the preferred orientation of one molecule to a second when bound to each other to form a stable complex. Knowledge of the preferred orientation in turn may be used to predict the strength of association or binding affinity between two molecules using, for example, scoring functions.

Protein–ligand docking is the most commonly used docking technique. It predicts the position of a ligand when it is bound to its receptor molecule, in this case, a protein. It predicts the position of a ligand when it is bound to its receptor molecule, in this case, a protein. The interaction between ligand and receptor is a process of molecular recognition, including electrostatic interaction, hydrogen bonding interaction, hydrophobic interaction, van der Waals interaction and so on. The binding mode and affinity between them can be predicted by calculation. A protein–ligand docking consists of two essential components, sampling and scoring. Sampling searches for possible ligand-binding orientations/conformations (poses) near a binding site of a protein, and scoring predicts the binding tightness for each ligand pose with a physical or empirical energy function.

Figure 3: Molecular docking

In our project, we use molecular docking to discover ligand-protein interactions, explain biological experiments, discover new active compounds and provide guidance for compound optimization.

## In Vitro Protein Expression In E.coli system

Usually, there are many problems in expression of eukaryotic genes in prokaryote. Due to to lack of Golgi, E.coli cannot modify the structure of protein, such as promoting the formation of the sulfur bond between two cysteine, cutting off the signal peptide. In addition, most foreign proteins were expressed as inclusion bodies in cells making it difficult to extract proteins. E.coli and eukaryotes tend to use different codons, which makes protein expression inefficient.

After careful consideration, in order to amplify the expressed protein efficiently, we decide to do five respect of work. The first one is to optimize the codons. We decide to use professional software to help our optimization to find the best codons for each of our sequences in prokaryotic expression. The second one is to attach some tags on the protein tails, such as 6XHistidines, which is widely used in protein purification. The third one is to confirm the best expression vector. Fusion expression vector is to add special sequences at the N or C ends of the target protein to improve the solubility of the protein, promote the correct folding of the protein, achieve rapid affinity purification of the target protein, or achieve the expression and localization of the target protein. he fourth one is to detect the expression of protein (expression level, expression distribution, etc.) and to analyze the purity of the purified target protein. In order to achieve this aim, we decide to use polyacrylamide gel electrophoresis (SDS-PAGE). The last one is to establish appropriate expression conditions.

For more information of this part, please click this protocol. （连接到文件protein expression）
 
Figure 4: a vector model of pET32a

## Degradation of algae and microcystin

To prove the function of the enzymes, we design 4 group of experiments.

## 1. Degradation of algae with enzymic preparation

The first group was used to explore the effect of enzymic preparation on algae degradation. We configured the preparation with the selected 10 proteins according to the expression ratio of amphioxus gene expression profile. Then we mixed them with algae sample in the dry weight ratio of 1:500 and 1:1000 respectively, and finally tested the results with HPLC-MSMS. We found that the degradation effect of enzyme preparation was very good, and there was no algal toxin in the product. The cyanobacteria samples used in the experiment are directly salvaged from Taihu Lake, which are provided from our partner, Dr. Zhang Junyi from the cyanobacteria monitoring center of Taihu Lake. We also observed cyanobacterial samples in an laboratory using an inverted microscope before experiments.

Figure 5: Degradation of algae with enzymic preparation

## 2. Degradation of algae with GM E-Coli

In order to verify the activity of our constructed E.coli Expression System, we put 10 kinds of E.coli strains which have been genetically engineered to express different proteins into the lake water samples containing cyanobacteria for culture, and induced expression with IPTG. At 48 hours, we observed that the lake water samples became clear obviously, which confirmed the activity and function of our constructed engineering bacteria.

Figure 6: Degradation of algae with GM E-Coli

## 3. Degradation of microcystin

The purpose of the third group of experiments is to explore the enzyme and reaction environment needed for degradation of different kinds of algal toxins (mainly MC-LR and MC-RR). First of all, we configured the reaction system with 28 enzymes and two algal toxins respectively. Secondly, because No. 8 enzyme (carboxypeptidase Z/N) has the property of degrading protein from carboxyfetal end, we set up a reaction system of 27 enzymes mixed with No. 8 enzyme, and then used them to degrade algal toxins; (3) finally, after the preliminary screening, we modified the buffer system and temperature, and finally determined the best algal toxin degrading enzyme. All the degradation result are characterized with HPLC.

Figure 7: Partial samples in microcystin degradation experiments

Finally, we discovered that Cathepsin B can single degrade MC-LR, while MC-RR needs combination of carboxypeptidase Z/N and subtilisin-like protease to be degraded. This result aroused our interest and we will continue to make further analysis on this topic.

## 4. Characterization of key protein

After we completed the basic functional verification and screening, we used the methods of bioinformatics and biochemistry to characterize the properties of key proteins. First, we used enzyme activity kit to test Cathepsin L, B&D, lysozyme C&G, and pancreatic lipase-like protein, and calculated their enzyme activity. Secondly, for some enzymes that can continuously observe the reaction effect, we analyzed their reaction kinetics and calculated their Michaelis constant. At last, we use MOE Dock, which is designed for molecular docking of CTS with the small molecule and predicting the binding affinity based on energy minimization and structure constrain. Then we further explored the mechanism of the combined action of the two enzymes, and found out the possible basis in sequence level. Our work will continue in the future to explore on this mechanism with experimental verification and structural observation.

Figure 8: one of the 96-well plate we used in enzyme activity test

Figure 9: Analysis of reaction mechanism
