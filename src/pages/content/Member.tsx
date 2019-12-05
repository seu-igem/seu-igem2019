import React from 'react';

import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
// import { ImageFit, Image as MsImage } from 'office-ui-fabric-react/lib/Image';
import TRH2 from './comps/TRH2';
import TRH3 from './comps/TRH3';
import TRp from './comps/TRp';
// import { lightTheme } from '../../theme';
import { assets } from '../../assets-path.json';

import './css/Member.scss';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
// import { Link } from './comps/Link';

// import lu from '@/doc-lu.jpg';
const pp = assets.photos;

const content = (<>
   <div className='m-1'>
      <div className='m-2'>

         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.docLu$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>ZUHONG LU</div>
               <div className='pr2'>Principle Investigator, Professor of School of Biological Science and medical Engineering, Southeast University</div>
               {/* <div className='pr3'>Abcde test test</div> */}
            </div>
         </div>


         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.docHe$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>CHUNPENG HE</div>
               <div className='pr2'>Instructor, Principle Investigator, Associate Researcher of School of Biological Science and medical Engineering, Southeast University</div>
               {/* <div className='pr3'>Abcde test test</div> */}
            </div>
         </div>


         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.zhang$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>RUIJING ZHANG</div>
               <div className='pr2'>YEAR 4, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>Born leader, with rich experience in project management. In scientific work, my motto is ‘Always be keen in thoughts and always be motivated in action’. I attach great importance to the application of logical thinking in biological research and sincerely believe biology will meet a technological big bang in the near future, with amount of exciting practical applications. In life I am a football fan. I enjoy reading, music and debate very much.</div>
            </div>
         </div>


         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.sun$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>QING SUN</div>
               <div className='pr2'>21, YEAR 4, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>I am a high motivated and creative student with multiple background. I am interested in biology and medicine and have a strong desire to improve people’s wellbeing and impact their lives. This is why I chose biomedical engineering as my major and would like to devote myself to the cutting-edge research in the field of cancer diagnosis and treatment. I have great curiosity and passion for everything new and interesting and this is how the story between iGEM and me starts. Thanks to iGEM, I have experienced tangles, pain and pressure, and fortunately I finally persevered, reaping a full sense of achievement and happiness. As a team leader, what always engraves on my mind is ‘fighting as a team for a better world’. I am really looking forward to the upcoming Giant Jamboree!</div>
            </div>
         </div>


         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.luoMa$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>YUHAN LUO</div>
               <div className='pr2'>21, YEAR 4, BIOINFORMATICS</div>
               <div className='pr3'>My first name means the lotus flower in the rain. It originates from an ancient Chinese poetry. In traditional Chinese concept, lotus flower represents integrity and the indomitable quality. These two short words contain my parents' expectations on me. They hope that I can keep firm and indomitable even in difficult times and keep my dream. I think I have become such a person…probably. Born in May, I am a pragmatic and modest Taurus, who is patient, persistent, hard-working, diligent, thrifty……OK, I now stop praising myself (Believe me I am really excellent as I describe, haha). Sincerely, I am a college student, finding some fun in day to day life. I like cartoon, writing novels in my spare time. Hope to meet more interesting people on this trip!</div>

               <div className='pr1'>JINGYUAN MA</div>
               <div className='pr2'>21, YEAR 4, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>Mature, steady, is my synonym. I was born in Shenzhen, an emerging city in southern China. Shenzhen's emerging culture and high technology have made me full of yearning for all new technologies. Planning first, then acting, this has always been my motto. In my spare time, I like to participate in a variety of sports. Exercise makes me happy, just as I love scientific research. The combination of the two can do more with less. Although I am still an undergraduate student, I am young, energetic and capable of doing any work. Although I still lack some experience, I will use time and sweat to make up for it.</div>
            </div>
         </div>


         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.shanYang$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>BAIHUI SHAN</div>
               <div className='pr2'>20, YEAR 3, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>I'm an undergraduate student from Southeast University. I' m an energetic person and I'm powered by sports and sunlight. Outdoor activities are always sound exciting to me. Tennis, hiking and orienteering are my favorite. In my spare time, I also like to read popular science books for fun or find some place to look far into distance during the sunset. I major at Biomedical Engineering. Though my major seems to focus more on the 'Engineering' part, I am always attracted by the 'Bio' part. I'm very glad to get a quick view of the synthetic biology, a rising field in the biomedical engineering, through the iGEM. I always want to experience new exciting things when I still have enough time to make 'mistakes' and I believe that every experience count. So, I 'pushed' myself here, in the iGEM competition.</div>
               <div className='pr1'>LANGXIN YANG</div>
               <div className='pr2'>20，YEAR 4, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>A daydreamer seeking to not only building the castles in the air but also objectifying the daydream and realizing own innovations spired. However, always sleepy and hungry.<br />
                  Inspired by the synthetic biology concept, and acquired a lot knowledge during the IGEM competition. Nothing is more interesting than turning off the uncanny yarn of genetics and applying it to engineering. To make something a little bit different from the traditional machine with the genetics method and gain better effect just like the combination of creature innate gift with what we human discovered postnatally.</div>
            </div>
         </div>

         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.liujingyuan$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>JINGYUAN LIU</div>
               <div className='pr2'>20, YEAR 3, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>Hi, I’m Jingyuan Liu, a lively, lovely and sometimes shy college student. Chasing the sunset, flying in the sky and diving in the peaceful ocean are fantastic dreams of my whimsical youth. I’m addicted to the beauty of nature and wish one day I could visit every corner of our precious and fragile nature world. I’m very concerned about the destruction of wildlife’ habitats and human habitats caused by ourselves.  And I want to solve environment problems both for ourselves and wildlife. As for hobbies, I like playing the guitar and swimming. Every guitarist wants to perform on stage, so do I. In my dream, one day I will play the guitar from street to street and sing my songs from sunup to sunset. Oh, and I wish to make more friends like you.</div>
            </div>
         </div>

         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.bai$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>YILE BAI</div>
               <div className='pr2'>20, YEAR 4, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>Born in 1998, I have been a student for 16 years and now it's my last year in university. While my direction is medical electronics, my courses are among computer science, bioscience and electronics. (Although I can't guarantee that I'm good at any one of them). My academic dream is to become more expertise in the field of cognitive systems. To be more specific, language, learning and memory of machine. I can speak Chinese, English and German, also trying hard to learn French. As you can imagine, my dream is travelling around the world. (Now it maybe 6% finished )</div>
            </div>
         </div>

         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.liujiahuan$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>JIAHUAN LIU</div>
               <div className='pr2'>21, YEAR 4, BIOMEDICAL ENGINEERING</div>
               <div className='pr3'>My name is Lawrence. I was born in Suzhou, Jiangsu. The mystery of genes has always been attractive to me. Figuring out how four kinds of nucleotides create countless life forms is like deciphering a mysterious code. So, I decided to learn about bioinformatics, which is a fantastic combination of modern technique and analysis thoughts. This competition offers a great opportunity of testing and learning. After months of working and learning, I am now more aware of my own shortcomings and have acquired precious knowledge and experience. This is the first time that I work with so many friends as a research group. It is always a fortune to have so many reliable friends who are always willing to give a hand.</div>
            </div>
         </div>

         <div className='p-1'>
            <div className='p-l'>
               <Image src={pp.xue$jpg}
                  imageFit={ImageFit.cover}
                  styles={{ root: { width: '100%', height: '100%' } }} />
            </div>
            <div className='p-r'>
               <div className='pr1'>JING XUE</div>
               <div className='pr2'>20, YEAR 3, CHEMISTRY</div>
               <div className='pr3'>It's so hard to describe my character in a few words. I am keen on making friends. Everyone will tell you that I’m really easy-going if he knows me a lot. Although I’m pretty gentle while making new friends, don't be confused by my seemingly demure and sweet face. Actually, I'm pretty tough when doing experiments. Giving up is the last thing I will think of whenever facing difficulties in the lab. I believe in science all the time just like I believe in myself. I just love the color of chemical reactions, the smell of alcohol and the feeling of the polybutyronitrile gloves without reasons. Maybe I was born to science.</div>
            </div>
         </div>

      </div>
   </div>
</>);

export const body = {
   title: 'Member',
   hasAside: false,
   hasInfobar: false,
   hasRating: false,
   translatable: false,
   pageLocation: [
      { text: 'Home', path: '/' },
      { text: 'Team', path: '/Member' },
      { text: 'Member', path: '/Member' },
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
