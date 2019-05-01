class FullTime {
  constructor () {
    this.rate = '$12';
  }
}

class PartTime {
  constructor () {
    this.rate = '$11';
  }
}

class Temporary {
  constructor () {
    this.rate = '$10';
  }
}

class Contractor {
  constructor () {
    this.rate = '$15';
  }
}

module.exports = {FullTime, PartTime, Temporary, Contractor};
