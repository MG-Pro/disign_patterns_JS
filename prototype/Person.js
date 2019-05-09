class Person {
  constructor(config = {}) {
    this.age = config.age;
    this.gender = config.gender;
    this.height = config.height;
  }

  clone() {
    return new Person(Object.assign({}, this));
  }

  info() {
    Object.entries(this).forEach(item => {
      console.log(`${item[0]}: ${item[1]}`);
    });
  console.log('-------------------');
  }
}

module.exports = Person;
