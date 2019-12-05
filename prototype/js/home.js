CanvasRenderingContext2D.prototype.clear = function () {
   this.save();
   this.globalCompositeOperation = 'destination-out';
   this.fillStyle = 'black';
   this.fill();
   this.restore();
};

CanvasRenderingContext2D.prototype.clearArc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
   this.beginPath();
   this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
   this.clear();
};

const home1 = document.getElementById('home-1');

const home1Mask = document.getElementById('home-1-mask');
const maskCtx = home1Mask.getContext('2d');

const home1Logoarea = document.getElementById('home-1-logoarea');
const home1LoadingSpinner = document.getElementById('home-1-loading-spinner');
const home1LoadingSpinnerAni = document.getElementById('home-1-loading-spinner-ani');

const home1Logo = document.getElementById('home-1-logo');

function repaintMask(radius, width, height) {
   home1Mask.setAttribute('width', width);
   home1Mask.setAttribute('height', height);
   maskCtx.fillStyle = '#000';
   maskCtx.fillRect(0, 0, width, height);
   maskCtx.clearArc(width / 2, height / 2, radius, 0, Math.PI * 2, false);
}

function resizeSpinner(radius, width, height) {
   home1Logoarea.style.width = 2 * radius + 'px';
   home1Logoarea.style.height = 2 * radius + 'px';
   home1Logoarea.style.left = (width * 0.5 - radius) + 'px';
   home1Logoarea.style.top = (height * 0.5 - radius) + 'px';
}

function home1Resize() {
   const width = home1.clientWidth;
   const height = home1.clientHeight;
   const radius = height * .23;
   repaintMask(radius, width, height);
   resizeSpinner(radius, width, height);
}

home1Resize();
window.addEventListener('resize', home1Resize);

function spinnerTurnIntoCircle() {
   home1LoadingSpinnerAni.beginElement();
   setTimeout(() => {
      home1.style.background = 'rgb(255, 255, 255)';
      home1Logo.classList.add('home-1-logo-enter');
      home1Logoarea.style.backgroundColor = 'rgb(255, 255, 255)';

   }, 1000);
}

setTimeout(() => {
   spinnerTurnIntoCircle();
}, 2000);