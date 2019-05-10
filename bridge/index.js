class Paper {
  constructor(impl) {
    this.impl = impl;
  }

  rectangle(x1, y1, x2, y2) {
    this.impl.line(x1, y1, x1, y2);
    this.impl.line(x1, y2, x2, y2);
    this.impl.line(x2, y2, x2, y1);
    this.impl.line(x2, y1, x1, y1);
  }

  triangle(x1, y1, w, h) {
    this.impl.line(x1, y1, x1, y1 + w);
    this.impl.line(x1, y1, x1 + h, y1);
    this.impl.line(x1 + h, y1, x1, y1 + w);
  }
}

import ImplCanvas from './canvas.js';
import ImplSvg from './svg.js';

//const paper = new Paper(new ImplCanvas('canvas'));
const paper = new Paper(new ImplSvg('svg'));

paper.rectangle(10, 10, 100, 100);
paper.triangle(25, 25, 100, 100);
