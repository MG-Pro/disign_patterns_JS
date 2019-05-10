class ImplSvg {
  constructor(id) {
    this.svg = document.getElementById(id);
    this.ns = "http://www.w3.org/2000/svg";
  }

  line(x1, y1, x2, y2) {
    const line = document.createElementNS(this.ns, 'line');
    line.setAttributeNS(null, "x1", x1);
    line.setAttributeNS(null, "y1", y1);
    line.setAttributeNS(null, "x2", x2);
    line.setAttributeNS(null, "y2", y2);
    this.svg.append(line)
  }
}

export default ImplSvg;
