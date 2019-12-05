export const augmentCanvas = {
   clear(this: CanvasRenderingContext2D) {
      this.save();
      this.globalCompositeOperation = 'destination-out';
      this.fillStyle = 'black';
      this.fill();
      this.restore();
   },

   clearArc(
      this: CanvasRenderingContext2D,
      x: number, y: number, radius: number,
      startAngle: number, endAngle: number,
      anticlockwise: boolean
   ) {
      this.beginPath();
      this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      augmentCanvas.clear.call(this);
   },
};
