class Director {
  static buildFullComputer(builder) {
    builder
      .setMotherBoard()
      .setMemory()
      .setProcessor();

    return builder.build();
  }

  static buildStartComputer(builder) {
    builder
      .setMotherBoard();

    return builder.build();
  }
}

module.exports = Director;
