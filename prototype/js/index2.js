'use strict';

function resizeCoverImg() {
   const container = $('#front-cover-bg');
   const img = document.querySelector('#front-cover-bg>img');
   const containerWidth = container.width();
   const containerHeight = container.height();
   const imgWidth = img.naturalWidth;
   const imgHeight = img.naturalHeight;
   if ((imgWidth / imgHeight) > (containerWidth / containerHeight)) {
      img.style.height = '100%';
      img.style.width = imgWidth / imgHeight * containerHeight + 'px';
   } else {
      img.style.width = '100%';
      img.style.height = imgHeight / imgWidth * containerWidth + 'px';
   }
}

const coverImgOnload = function () {
   setTimeout(() => {
      resizeCoverImg();
      window.addEventListener('resize', resizeCoverImg);
      this.style.opacity = '1';
      this.style.transform = 'translate(-50%, -50%) translateZ(0px)';
   }, 2000);
}

const coverImg = document.querySelector('#front-cover-bg>img');
if (coverImg.complete) coverImgOnload.call(coverImg);
else coverImg.addEventListener('load', coverImgOnload);


document.getElementById('root').style.background = 'black';

const elHeaderContainer = document.getElementById('header-container');
const elHeader = document.getElementById('header');
let isHeaderFixed = false;

document.getElementById('root').addEventListener('scroll', () => {
   if (elHeaderContainer.getBoundingClientRect().top <= 18) {
      if (!isHeaderFixed) {
         elHeaderContainer.classList.add('fixed-header');
         isHeaderFixed = true;
      }
   } else if (isHeaderFixed) {
      elHeaderContainer.classList.remove('fixed-header');
      isHeaderFixed = false;
   }
});