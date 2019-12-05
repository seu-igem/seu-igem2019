import React from 'react';

import TRH2 from './comps/TRH2';
import PdfList from './comps/PdfList';

import { assets } from '../../assets-path.json';
import { MessageBarType, MessageBar } from 'office-ui-fabric-react/lib/MessageBar';

export const body = {
   title: 'Protocols',
   hasAside: true,
   hasInfobar: true,
   hasRating: true,
   translatable: true,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Lab work', path: '/Experiments' },
      { text: 'Protocols', path: '/Protocols' },
   ],
   editors: [
      {
         name: 'Yuhan Luo', hash: '#yuhan-luo',
         nameAbbr: 'YL', avatar: assets.avatars.YuhanLuo32x32$jpg,
      },
   ],
   lastModified: 'September 25, 2019',
   content: (<>
      <MessageBar
         messageBarType={MessageBarType.info}
         isMultiline={false}
         styles={{ root: { marginTop: '.6em', marginBottom: '1em' } }}
      >Double-click to open the PDF file.</MessageBar>
      <TRH2 TRkey='3d837ebaa4' prefix='I'>Genomics and bioinformatics analysis</TRH2>
      <PdfList
         zipName='Genomics and bioinformatics analysis - SEU-Nanjing-China.zip'
         zipLink={assets.protocols.genomics$zip}
         items={[
            {
               name: 'NCBI BLAST',
               author: 'Kaihao Luan',
               size: 156,
               url: assets.protocols.genomics.NCBIBLAST$pdf,
            },
            {
               name: 'Phylogenetc Analysis',
               author: 'Kaihao Luan',
               size: 163,
               url: assets.protocols.genomics.PhylogenetcAnalysis$pdf,
            },
         ]}
      />

      <TRH2 TRkey='f19387f57a' prefix='II'>Molecular cloning and genetic engineering</TRH2>
      <PdfList
         zipName='Molecular cloning and genetic engineering - SEU-Nanjing-China.zip'
         zipLink={assets.protocols.modelling$zip}
         items={[
            {
               name: '3A Assembly',
               author: 'Yuhan Luo',
               size: 168,
               url: assets.protocols.molecular['3AAssembly$pdf'],
            },
            {
               name: 'Colony PCR',
               author: 'Yuhan Luo',
               size: 191,
               url: assets.protocols.molecular.ColonyPCR$pdf,
            },
            {
               name: 'Competent Cell Production',
               author: 'Yuhan Luo',
               size: 160,
               url: assets.protocols.molecular.CompetentCellProduction$pdf,
            },
            {
               name: 'DNA Gel Recovery Kit',
               author: 'Gen Li',
               size: 197,
               url: assets.protocols.molecular.DNAGelRecoveryKit$pdf,
            },
            {
               name: 'DNA Kit Plate',
               author: 'Yuhan Luo',
               size: 158,
               url: assets.protocols.molecular.DNAKitPlate$pdf,
            },
            {
               name: 'Gel Electrophoresis',
               author: 'Yuhan Luo',
               size: 160,
               url: assets.protocols.molecular.Gelelectrophoresis$pdf,
            },
            {
               name: 'Glycerol Stocks',
               author: 'Yuhan Luo',
               size: 154,
               url: assets.protocols.molecular.GlycerolStocks$pdf,
            },
            {
               name: 'Induction of Recombinat Protein',
               author: 'Baihui Shan',
               size: 163,
               url: assets.protocols.molecular.InductionofRecombinatProtein$pdf,
            },
            {
               name: 'Inoculating Bacterial Culture',
               author: 'Baihui Shan',
               size: 164,
               url: assets.protocols.molecular.InoculatingBacterialCulture$pdf,
            },
            {
               name: 'LB media',
               author: 'Baihui Shan',
               size: 169,
               url: assets.protocols.molecular.LBmedia$pdf,
            },
            {
               name: 'Ligation',
               author: 'Yuhan Luo',
               size: 155,
               url: assets.protocols.molecular.Ligation$pdf,
            },
            {
               name: 'Miniprep',
               author: 'Yuhan Luo',
               size: 167,
               url: assets.protocols.molecular.Miniprep$pdf,
            },
            {
               name: 'PCR Purification',
               author: 'Gen Li',
               size: 186,
               url: assets.protocols.molecular.PCRPurification$pdf,
            },
            {
               name: 'Purification of Target Protein in Vitro',
               author: 'Gen Li',
               size: 164,
               url: assets.protocols.molecular.PurificationofTargetProteininVitro$pdf,
            },
            {
               name: 'Restriction Digest',
               author: 'Yuhan Luo',
               size: 156,
               url: assets.protocols.molecular.RestrictionDigest$pdf,
            },
            {
               name: 'SDS-PAGE',
               author: 'Yuhan Luo',
               size: 166,
               url: assets.protocols.molecular.SDSPAGE$pdf,
            },
            {
               name: 'Transformation',
               author: 'Yuhan Luo',
               size: 158,
               url: assets.protocols.molecular.Transformation$pdf,
            },
            {
               name: 'Ultrasonic Crushing',
               author: 'Yuhan Luo',
               size: 162,
               url: assets.protocols.molecular.UltrasonicCrushing$pdf,
            },
         ]}
      />
      <TRH2 TRkey='e376b99aaf' prefix='III'>Modelling</TRH2>
      <PdfList
         zipName='Modelling - SEU-Nanjing-China.zip'
         zipLink={assets.protocols.modelling$zip}
         items={[
            {
               name: 'Cathepsin B Activity Test',
               author: 'Yuhan Luo',
               size: 159,
               url: assets.protocols.modelling.CathepsinBActivityTest$pdf,
            },
            {
               name: 'Cathepsin D Activity Test',
               author: 'Yuhan Luo',
               size: 161,
               url: assets.protocols.modelling.CathepsinDActivityTest$pdf,
            },
            {
               name: 'Cathepsin L Activity Test',
               author: 'Yuhan Luo',
               size: 161,
               url: assets.protocols.modelling.CathepsinLActivityTest$pdf,
            },
            {
               name: 'Lipase Activity Test',
               author: 'Yuhan Luo',
               size: 217,
               url: assets.protocols.modelling.LipaseActivityTest$pdf,
            },
            {
               name: 'Lysozyme Activity Test',
               author: 'Yuhan Luo',
               size: 158,
               url: assets.protocols.modelling.LysozymeActivityTest$pdf,
            },
            {
               name: 'Structure Prediction',
               author: 'Yuhan Luo',
               size: 161,
               url: assets.protocols.modelling.StructurePrediction$pdf,
            },
         ]}
      />

      <TRH2 TRkey='d4fb122d11' prefix='IV'>Degradation of algae and microcystin</TRH2>
      <PdfList
         zipName='Degradation of algae and microcystin - SEU-Nanjing-China.zip'
         zipLink={assets.protocols.degradation$zip}
         items={[
            {
               name: 'Analysis of mircocystin',
               author: 'Yuhan Luo',
               size: 184,
               url: assets.protocols.degradation.Analysisofmircocystin$pdf,
            },
            {
               name: 'Microcystin Degradation',
               author: 'Yuhan Luo',
               size: 241,
               url: assets.protocols.degradation.MicrocystinDegradation$pdf,
            },
         ]}
      />

   </>),
};
