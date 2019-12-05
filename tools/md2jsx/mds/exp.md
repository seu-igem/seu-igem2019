## Overview

Based on the result of high throughput sequencing and bioinformatics analysis, we designed five groups of experiments to realize a series of works including the key protein screening, structure analysis and prediction, degradation effect test, and characterization of key enzymes. Click on each group to learn more about our experiment.

## I. Bioinformatics analysis

### 1. Screening and annotation of key genes

According to the work of our Instructor professor Lu, in order to explore how the diverticulum epithelial cells deal with the phagocytized food particles, a full-length cDNA transcriptome library (abbreviation: Full; GenBank Accession Number: LIBEST_028542) was constructed to investigate the gene expression profile of these cells in a natural sated state. Next, to reveal the spatiotemporal pattern of gene expression of diverticulum epithelial cells, the differences in gene expression between cells in empty (after 3 days of starvation) and sated states were compared using qRT-PCR assays.

This gives us great inspiration, but how to further screen the key genes degrading algae from gene expression profiles is the first challenge we face up with. In starved Branchiostoma, these cells accumulate endogenous digestive and hydrolytic enzymes, whereas, when sated, they express many kinds of immune genes in response to stimulation by phagocytized food particles. First, we further compare the gene expression of amphioxus in two different states in order to further elucidate the key genes in intracellular phagocytic digestion. In this way, we selected highly expressed genes with significant differences in empty and sated states, the protein products of which have potential to degrade or neutralize the harmful substances such as algal toxins.

Next, we conducted bioinformatics analysis and functional annotation of the screened proteins. Many properties of proteins can be obtained by sequence, so we compared the similarities between unknown protein sequences and known protein sequences by searching database, and predict the function of proteins. Basic Local Alignment Search Tool (BLAST) is a computer algorithm that is available for use online at the National Center for Biotechnology Information (NCBI) website and many other sites. We use BLAST to find regions of local similarity between sequences. The program compares protein sequences to sequence databases and calculates the statistical significance of matches. A significant match should have at least 25% of the same sequence and more than 80 amino acid segments.

img-1

### 2. Phylogenetic analysis

Based on our sequenced proteins and combined with relevant literature, we use nucleic acid (NCBI, EMBL, DDBJ) and protein (SWISSPROT) databases to identify homologous genes or proteins of the corresponding proteins and analyze their evolutionary history. In the process of database mining, we analyze the potential information in other people's data, find out the characteristic sequences of homologous proteins, and assist the experimental design.

Steps of experiment：

1)Obtain homologous sequence data. In the process of sequence similarity alignment, we use the BLAST tool of web page version.

a)	Generally speaking, we prefer the general blastp program as the retrieval algorithm. Since our query sequence and the target sequence of the database are all proteins, the protein blast function is preferred.

b)	According to our pre-designed tree-building idea, we chose the non-redundant protein sequence database as the search set. Species were limited to the landmark species in the evolutionary history, such as human, mouse, chicken, zebrafish, shark, sea urchin and etc.

c)	In the case of poor blastp comparison results, we use the PSI-BLAST program depending on PSSM matrix for iterative comparison. Normally, the statistical significance threshold is 0.05. The comparison results after each iteration conform to the significance threshold sequence, not more than 500 items, participating in the matrix construction and the next iteration. The number of iterations is set as 5 rounds.

d)	Select the genes with high similarity and download the gene sequence in Fasta format.

2) Multiple sequence alignment. ClustalW in Mega is selected for multi-sequence alignment, and the alignment results are saved in MEG format.

a)	In the Mega program, select ALIGN-Edit/Build Alignment to create a new alignment, select protein as sequence type, and open an Alignment Explorer.

b)	Import the downloaded Fasta format file and target protein sequence file through Edit-Insert Sequence From File.

c)	Select all the sequences, click Alignment-Align By ClustW or W, select Multiple Alignment to set the penalty parameters for comparison under the subdirectory, and then point OK to confirm.

d)	Click Data-Phylogenetic Analysis to proceed Phylogenetic analysis. Close the window and save it.

e)	Select Analysis-Phylogeny and confirm the analysis method to construct the evolutionary tree. Usually, NJ tree is used, verification method is set to Bootstrap, Replications is set to 1000, and other default parameters are used to calculate and generate phylogenetic tree.
 
Design-fig-1

## II. Molecular cloning and genetic engineering

Escherichia coli expression system is characterized by clear genetic background, high level of target gene expression, short culture cycle and strong anti-pollution ability. It is an important tool for molecular biology research and the industrialization of biotechnology. Therefore, we use E. coli system to express and purify recombinant protein.

The vector we used is pET28b expression vector. The plasmid map and polyclonal site information are shown below. Target gene was cloned E.coli DH5 α and expressed in E. coli BL21 (DE3). In the experiment, isopropyl galactosyl thioglycoside (IPTG) was used as inducer. IPTG is a powerful inducer, which is not metabolized by bacteria and is very stable, so it is widely used in laboratory. A special sequence, His-Tag, was added to the end of the target protein to achieve rapid affinity purification in subsequent experimental steps. His tag has a small molecular weight and fuses to the end of the target protein. It does not affect the activity of the target protein, so it does not need to be removed in the purification process.

Considering the codon and preference of E. coli, we optimized the sequence of target protein. For example, we replaced the terminator codon on the premise of ensuring that the encoded amino acid sequence remains unchanged. In addition, in order to facilitate the subsequent purification operation, maintain the activity of the target protein and improve the yield of the protein, we determined the optimal expression conditions of the target protein before large-scale preparation. When determining the expression conditions, more effort was devoted to ensuring the soluble expression of target proteins than just stable expression of exogenous proteins. We found that in the case of exogenous genes expression in E. coli, it was easy to form incompatible inclusion bodies if the expression of genes was too high or the synthesis of protein was too fast. Thus, by optimizing the expression conditions, we improved the solubility of the target protein.

SDS-PAGE was used to detect the expression of protein (i.e. expression level, expression distribution, etc.) and to analyze the purity of the purified target protein. The last and most important step was to purify the target protein. The expression vector pET28b (+) we used to contain a sequence encoding polyhistidine, that is, His-Tag. Therefore, a recombinant target protein with His-Tag will be obtained. His-Tag can bind to metal Ni2+ ions, which is beneficial to the purification of target protein. The protein added with His-Tag can be purified by Ni2+ affinity chromatography column under non-denaturing conditions.

fig-2

We expressed and purified the ten proteins involved in the project. Limited in space, here we take Cathepsin B as the representative to explain the specific experimental process.

Short protocol(放文件Cathepsin B)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

## III Modelling

### 1. 3-D Structure Prediction
To predict the three- dimensional structure of our gained proteins, we conducted modeling process using SWISS-MODEL.

SWISS-MODEL, the Molecular Modeling Server developed by the Geneva Biomedical Research Institute, is the most widely used server in predicting the three-dimensional structure of unknown proteins. Its principle is to extract the simulated structure information of the known protein similar to the query protein from the classical database Brookhaven PDB with the aid of sequence alignment, and to establish the structure of the unknown protein based on the similarity of the protein.

Homologous modeling method to predict protein structure generally includes the following four steps: 

1) Template selection
2) Alignment of target sequence template sequence
3) Model building
4) Evaluation

By repeating the above steps, a satisfactory protein structure model is established. 

The SWISS-MODEL use the "rigid fragment assembly" based on alpha-helices and beta-folds for structural prediction.

### 1.1 Template selection

Swiss-model server template database ExPDB is taken from PDB. By dividing the PDB file into certain template chain and uncertain template chain, the deterministic template chain with better data quality is retained. Swiss-model added additional useful information, such as possible quatric structural information, clear identification information (empirical field energy, ANOLEA average potential energy score). For a target sequence, SWISS-MODEL first searches the template database ExPDB for a suitable template. As for a target sequence cannot match the appropriate template, the program will find a few template sequences to overlap the target sequence. Then the modeling process splits the protein into several parts that are processed in batches.

### 1.2 Comparison & Alignment

With the least repetitive square algorithm, the mismatched templates (i.e., those with a high alpha carbon mean square deviation from the first template) were removed to produce a structural alignment. Pairwise alignment of the target sequence and template sequence is performed locally and then the alignment is improved through an empirical step. The overall structure of the template determines the insertion and deletion positions, that is, the movement of an isolated residue to an adjacent random curl structure.

### 1.3 Modeling

The core of the prediction model is formed by averaging the positions of multiple template structure backbone atoms. First, the position of significantly deviated atoms was removed. The sequence similarity between the template and the target protein determined the template importance weight. As to inserted or missing areas, a "Constraint Space Programming CSP" is used to coordinate the fragment as a whole with the adjacent trunk. The optimal ring structure is determined by force field energy, space obstacle, hydrogen bond, etc. If a suitable ring structure is absent, adjacent residues are incorporated into fragment reconstruction for greater flexibility. When the CSP fails to give a satisfactory answer and there are more than 10 residues, the program automatically searches the "loop library" of experimental data for an acceptable loop structure.

Side chain modeling

The reconstruction of the side chain of the model is carried out according to the best position of the corresponding residue in the template structure. The possible side chain configurations were selected from rotamer library. The scoring function focuses on hydrogen bond, disulfide bond and avoiding adverse contact.

Minimize energy

The geometric adjustment of protein structure is the last step in modeling. When connecting rigid segments, the program adjusts the structure according to the GROMOS96 force field algorithm of the energy minimum principle. Generally speaking, the use of energy minimization in SWISS-MODEL only makes the molecular structure more standardized but does not improve the accuracy of the MODEL.

### 1.4 Evaluation

The server takes about five steps to get the returned results.

(1) BLASTP2 program was used to search the ExNRL3D database for proteins with known tertiary structure as modeling templates.

(2) SIM program was used to select all sequences whose similarity with the query sequence is greater than 25% and sequence length was greater than 20 amino acids

(3) Generate the input file of Generate ProModII format

(4) according to the tertiary structure of the template, the ProModII program and ExPDB database were used to generate the three-dimensional structure model of the target protein

(5) minimize the energy of the model with Gromos96

### 2. Molecular docking

MOE Dock was used for molecular docking of CTS with the small molecule and predicting the binding affinity. Small molecule was defined as ligand and CTS as target. The 2D structures of small molecule were converted to 3D in MOE through energy minimization. Then the protonation state of target and the orientation of the hydrogens were optimized by LigX, at the PH of 7 and temperature of 300 K. Prior to docking, the force field of AMBER10:EHT and the implicit solvation model of Reaction Field (R-field) were selected. The binding site was identified by superpose CTS with the original template structure, the position where the ligand in template structure was defined as binding site of CTS. The docking workflow followed the “induced fit” protocol, in which the side chains of the receptor pocket were allowed to move according to ligand conformations, with a constraint on their positions. The weight used for tethering side chain atoms to their original positions was 10. All docked poses of molecules were ranked by London dG scoring first, then a force field refinement was carried out on the top 30 poses followed by a rescoring of GBVI/WSA dG. The best ranked pose was selected as the final binding mode.

fig-3

## IV. Degradation of algae and microcystin

### 1. Inverted microscope observation of algae samples

During the project, we were honored to share our ideas with Zhang Junyi, an expert from Taihu Lake Water Environment Monitoring Bureau, was very interested in the ideas of our team. He provided us with samples of cyanobacteria from different Sampling point in Taihu Lake. These multiple kinds of algae samples in different growth stage give us a deeper understanding of the diversity and morphological characteristics of cyanobacteria in Taihu Lake. We observed cyanobacterial samples in laboratory with an inverted microscope.

### 2. Degradation of algae with enzymic preparation

Based on the bioinformatics approach, we screened 28 potentially viable proteins from the genome of amphioxus. Based on our experimental ideas, we need to mix these 28 proteins with fresh algae in Taihu Lake to get preliminary results. This result will be used to determine whether the 28 proteins we screened have activity in degrading algae. If the experiment is not successful, we will repeat the bioinformatics screening method, re-select a batch of protein, and repeat the experiment.

To achieve the best experimental results, we have the ratio of each enzyme equal to the true ratio of amphioxus. Such a system is an optimum degradation condition for the enzyme. And finally we make the composition of our enzyme preparation fixed to 10 proteins.

Experimental procedure:

The experimental conditions are as follows:

Buffer: PBS buffer (0.02M PH=8.2)

Temperature: room temperature (25 ° C)

Reaction time: 24h

Instrument: Rotary Mixer (40rpm)

After the reaction is over, we have performed the mass spectrometry on the sample.

fig-4

### 3. Degradation of algae with GM E-Coli

In order to verify the activity of our constructed E.coli Expression System, we put 10 kinds of E.coli strains which have been genetically engineered to express different proteins into the lake water samples containing cyanobacteria for culture, and induced expression with IPTG. 

fig-5

The crude solution is the algae sample collected from TaiHu Lake. (2g/50mL)

Genetically modified E.Coli for each protein. (1g/protein)
 
### 4. Screening proteins for algal toxin degradation 

The biggest obstacle currently hindering the utilization of cyanobacteria is the microcystin. The 28 enzymes initially screened by our team proved to be effective for the degradation of cyanobacteria. Next we want to study how these 28 enzymes degrade the algae toxins. Which of these enzymes are capable of degrading microcystin single or combined with other protein? In order to explore the degradation effects of the 28 proteins screened by our team on microcystin, we designed an algae toxin degradation experiment.

Experimental design:

According to the pH of the marine organism cell environment, we used 0.02M PBS buffer (pH 8.2) to form the main reaction system. We formulated the microcystin and the enzyme into a final concentration system of 50 mg/mL, respectively. We decided to first enlarge the amount of enzyme, and hope to get the experimental results with relatively large discrimination. The reaction system we used was: 30 μL of enzyme (50 mg/mL) + 30 μL of microcystin (50 mg/mL) + 140 μL of PBS buffer = 200 μL

Experimental procedure:

1)	Dilution of microcystin samples:

There are many different types of microcystin. In our group, we mainly used two kinds of microcystin, LR and RR. The microcystin samples purchased by our group are solid powders. We need to first dissolve the microcystin into the concentration we need (50mg/mL). We used methanol (analytical grade) to solubilize microcystin. All operations are carried out in a fume hood.

1.1) Pipette 1000 μL of methanol (analytical grade), add to the tube containing 50 μg of microcystin, and mix well by pipetting; (The two microcystin are treated the same way)

1.2) Transfer the 1000 μL solution into a 1.5 mL centrifuge tube;

tab-1

Table 1. Microcystin preparation

2) Diluting of the enzyme:

According to the experimental ideas of our group, we need to dilute the 28 enzymes to be measured to the same concentration as the microcystin (50mg/L). In order to avoid the effects of repeated freezing and thawing on enzyme activity, the remaining enzymes were stored at 4 °C for next use. The corresponding dilution ratios of the 28 enzymes used are shown in the figure below.

2.1 Pipette the corresponding amount of PBS buffer (0.02M pH = 8.2) into a 1.5mL centrifuge tube;
2.2 Pipette the corresponding amount of enzyme into the same 1.5mL centrifuge tube;
2.3 Instantaneous centrifugation to mix the sample;

The result of this part is test with LC-MS/MS in microcystin test center in Nanjing University, where is also the official MC test center of Jiangsu Province. The MS results of standard samples are list here:

tab-2

### 5. Characterization of key protein
After we completed the basic functional verification and screening, we used the methods of bioinformatics and biochemistry to characterize the properties of key proteins. 

First, we used enzyme activity kit to test Cathepsin L, B&D, lysozyme C&G, and pancreatic lipase-like protein, and calculated their enzyme activity. In fact, this kind of activity kit can also help us to confirm these proteins’ function to some extent. Secondly, for some enzymes that can continuously observe the reaction effect, we analyzed their reaction kinetics and calculated their Michaelis constant. 

At last, we use MOE Dock, which is designed for molecular docking of CTS with the small molecule and predicting the binding affinity based on energy minimization and structure constrain. Then we further explored the mechanism of the combined action of the two enzymes, and found out the possible basis in sequence level. Our work will continue in the future to explore on this mechanism with experimental verification and structural observation.
