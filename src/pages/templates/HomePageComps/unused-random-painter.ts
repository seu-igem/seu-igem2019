import { randomPointInCircle, randomInt } from '@/util';

function getColor(whiteLevel: number) {
   whiteLevel = whiteLevel > 1 ? 2 - whiteLevel : whiteLevel;
   let r = 160 * whiteLevel + 90;
   let g = 250;
   let b = 250;
   r += randomInt(-5, 5);
   g += randomInt(-3, 3);
   b += randomInt(-1, 1);
   return `rgba(${r},${g},${b})`;
}

interface Point {
   x: number;
   y: number;
   gridX: number;
   gridY: number;
}

type Triangle = [Point, Point, Point];

const TriangleSideLen = 120;
const TriangleHeight = TriangleSideLen * 0.8660254; // * (√3 / 2)

export class RandomPainter {
   constructor(
      private $svg: SVGSVGElement
   ) { }

   private grid: Point[][] = [];
   private gridWidth = 0;
   private gridHeight = 0;
   private triangles = new Set<string>();

   public repaint() {
      const { $svg, grid } = this;
      const elemWidth = parseInt($svg.getAttribute('data-width') as any, 10) || 0;
      const elemHeight = parseInt($svg.getAttribute('data-height') as any, 10) || 0;
      const width = elemWidth + 4 * TriangleSideLen;
      const height = elemHeight + 4 * TriangleHeight;
      let gridWidth = Math.floor(width / TriangleSideLen);
      let gridHeight = Math.floor(height / TriangleHeight);

      // Painted area is already enough large.
      if (gridWidth <= this.gridWidth && gridHeight <= this.gridHeight) return;

      if (this.gridWidth < gridWidth) this.gridWidth = gridWidth;
      else gridWidth = this.gridWidth;

      if (this.gridHeight < gridHeight) this.gridHeight = gridHeight;
      else gridHeight = this.gridHeight;

      const newPoints: Point[] = [];
      const newTriangles: Triangle[] = [];

      for (let gridY = 0; gridY < gridHeight; ++gridY) {
         if (!grid[gridY]) grid[gridY] = [];
         const row = grid[gridY];
         for (let gridX = 0; gridX < gridWidth; ++gridX) {
            if (row[gridX]) continue;
            const [x, y] = randomPointInCircle(
               gridX * TriangleSideLen + (gridY % 2 ? 0 : 0.5 * TriangleSideLen) - TriangleSideLen,
               gridY * TriangleHeight - TriangleHeight,
               0.45 * TriangleSideLen
            );
            const p: Point = { x, y, gridX, gridY };
            newPoints.push(p);
            row[gridX] = p;
         }
      }

      for (const p of newPoints) {
         const { gridX, gridY } = p;

         const p1 = grid[gridY] && grid[gridY][gridX - 1];
         const shift = gridY % 2 ? -1 : 0;
         const p2 = grid[gridY - 1] && grid[gridY - 1][gridX + shift];
         const p3 = grid[gridY - 1] && grid[gridY - 1][gridX + shift + 1];
         const p4 = grid[gridY + 1] && grid[gridY + 1][gridX + shift];
         if (p1 && p2) {
            const key12 = `${p2.gridX} ${p2.gridY} 0`;
            if (!this.triangles.has(key12)) {
               newTriangles.push([p, p1, p2]);
               this.triangles.add(key12);
            }
         }
         if (p2 && p3) {
            const key23 = `${p2.gridX} ${p2.gridY} 1`;
            if (!this.triangles.has(key23)) {
               newTriangles.push([p, p2, p3]);
               this.triangles.add(key23);
            }
         }
         if (p1 && p4) {
            const key14 = `${p1.gridX} ${p1.gridY} 1`;
            if (!this.triangles.has(key14)) {
               newTriangles.push([p, p1, p4]);
               this.triangles.add(key14);
            }
         }
      }

      for (const tri of newTriangles) {
         const e = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
         e.setAttribute('points', `${tri[0].x},${tri[0].y} ${tri[1].x},${tri[1].y} ${tri[2].x},${tri[2].y}`);
         e.setAttribute('fill', getColor((tri[0].y / 400) % 2));
         e.setAttribute('fill-opacity', '0.6');
         // opacity: 0 -> 0.6 , duration: 0.4s
         $svg.appendChild(e);
      }
   }
}
