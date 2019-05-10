class ImplCanvas {
  constructor(id = 'canvas') {
    const canvas = document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(1, 1);
  }

  line(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }
}

export default ImplCanvas;
