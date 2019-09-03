const d = document;
const w = window;

// const rootDiv = d.createElement('div');
// rootDiv.setAttribute('id', 'root');
// d.getElementsByTagName('body')[0].appendChild(rootDiv);

function randomInt(from, to) {
   to++;
   return Math.floor(Math.random() * (to - from)) + from;
}

function randomPointInCircle(x, y, radius) {
   const theta = Math.random() * 2 * Math.PI;
   const r2 = Math.random() * radius * radius;
   const r = Math.sqrt(r2);
   return [x + r * Math.cos(theta), y + r * Math.sin(theta)];
}

class BgPoint {
   constructor(x, y, gridX, gridY) {
      this.x = x;
      this.y = y;
      this.gridX = gridX;
      this.gridY = gridY;
   }
}

const BgTriangleSideLen = 80;
const BgTriangleHeight = BgTriangleSideLen * 0.8660254; // * (√3 / 2)
const BgPointStddev = BgTriangleSideLen;

function getColor(blueLevel) {
   blueLevel = blueLevel > 1 ? 2 - blueLevel : blueLevel;
   let r = (192 - 50) * blueLevel + 50;
   let g = 220;
   let b = 230;
   r += randomInt(-5, 5);
   g += randomInt(-3, 3);
   b += randomInt(-2, 2);
   return `rgb(${r},${g},${b})`;
}
class BgPainter {
   constructor() {
      this.paintedArea = {
         x: -BgTriangleSideLen,
         y: -BgTriangleSideLen,
      };
      this.grid = [];
      this.grid.width = 0;
      this.grid.height = 0;
      this.triangles = new Set();
   }

   repaint() {
      const canvasWidth = $('#bg-svg').width() + 4 * BgTriangleSideLen;
      const canvasHeight = $('#bg-svg').height() + 4 * BgTriangleHeight;
      const newGridWidth = Math.floor(canvasWidth / BgTriangleSideLen);
      const newGridHeight = Math.floor(canvasHeight / BgTriangleHeight);
      if (newGridWidth <= this.grid.width && newGridHeight <= this.grid.height) return;
      if (this.grid.width < newGridWidth) this.grid.width = newGridWidth;
      if (this.grid.height < newGridHeight) this.grid.height = newGridHeight;

      const newPoints = [
         // { girdX: , girdY: , x: , y: }
      ];
      const newTriangles = [];

      for (let row = 0; row < newGridHeight; ++row) {
         if (!this.grid[row]) this.grid[row] = [];
         const thisRow = this.grid[row];
         for (let col = 0; col < newGridWidth; ++col) {
            if (thisRow[col]) continue;
            const [x, y] = randomPointInCircle(
               col * BgTriangleSideLen + (row % 2 ? 0 : 0.5 * BgTriangleSideLen) - BgTriangleSideLen,
               row * BgTriangleHeight - BgTriangleHeight,
               0.45 * BgTriangleSideLen,
            );
            const p = new BgPoint(x, y, col, row);
            newPoints.push(p);
            thisRow[col] = p;
         }
      }

      for (const p of newPoints) {
         const { x, y, gridX, gridY } = p;
         const p1 = this.grid[gridY] && this.grid[gridY][gridX - 1];
         const shift = gridY % 2 ? -1 : 0;
         const p2 = this.grid[gridY - 1] && this.grid[gridY - 1][gridX + shift];
         const p3 = this.grid[gridY - 1] && this.grid[gridY - 1][gridX + shift + 1];
         const p4 = this.grid[gridY + 1] && this.grid[gridY + 1][gridX + shift];
         if (p1 && p2) {
            newTriangles.push([p, p1, p2]);
            this.triangles.add(`${p.gridX} ${p.gridY} ${p1.gridX} ${p1.gridY} ${p2.gridX} ${p2.gridY}`);
         }
         if (p2 && p3) {
            const key23 = `${p.gridX} ${p.gridY} ${p2.gridX} ${p2.gridY} ${p3.gridX} ${p3.gridY}`;
            if (!this.triangles.has(key23)) {
               newTriangles.push([p, p2, p3]);
               this.triangles.add(key23);
            }
         }
         if (p1 && p4) {
            const key14 = `${p4.gridX} ${p4.gridY} ${p1.gridX} ${p1.gridY} ${p.gridX} ${p.gridY}`;
            if (!this.triangles.has(key14)) {
               newTriangles.push([p, p1, p4]);
               this.triangles.add(key14);
            }
         }
      }
      const svgGroup = document.getElementById('bg-svg-g');
      let beginTime = 0;
      for (const tri of newTriangles) {
         const t = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
         t.setAttribute('points', `${tri[0].x},${tri[0].y} ${tri[1].x},${tri[1].y} ${tri[2].x},${tri[2].y}`);
         t.setAttribute('fill', getColor((tri[0].gridY / 8) % 2));
         t.setAttribute('fill-opacity', '0');
         const ani = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
         ani.setAttribute('attributeName', 'fill-opacity');
         ani.setAttribute('attributeType', 'XML');
         ani.setAttribute('stroke-width', '0');
         ani.setAttribute('from', '0');
         ani.setAttribute('to', '0.6');
         ani.setAttribute('begin', 'indefinite');
         ani.setAttribute('dur', '0.4s');
         ani.setAttribute("fill", "freeze");
         t.appendChild(ani);
         svgGroup.appendChild(t);
         beginTime += 2;
         setTimeout(() => {
            ani.beginElement();
         }, beginTime);
      }
   }
}
const bgp = new BgPainter();
bgp.repaint();
window.onresize = () => { bgp.repaint(); };