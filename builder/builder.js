const {MotherBoard, Memory, Processor} = require('./parts');
const Computer = require('./computer');

class Builder {
  setMotherBoard() {
    this.motherBoard = new MotherBoard();
    return this;
  }
  setMemory() {
    this.memory = new Memory();
    return this;
  }
  setProcessor() {
    this.processor = new Processor();
    return this;
  }
  build() {
    return new Computer(this);
  }

}

module.exports = Builder;
