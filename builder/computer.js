class Computer {
  constructor(builder) {
    this.motherBoard = builder.motherBoard;
    this.memory = builder.memory;
    this.processor = builder.processor;
  }
  info() {
    for (let key in this) {
      if(this[key]) {
        console.log(`${key}: ${this[key].name}`);
      }

    }
    console.log('-------', '\n');
  }
}

module. exports = Computer;
