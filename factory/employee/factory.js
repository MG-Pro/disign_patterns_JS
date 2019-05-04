const {FullTime, PartTime, Temporary, Contractor} = require('./classes');

class Employee {
  create(type) {
    let employee;
    switch (type) {
      case 'FullTime':
        employee = new FullTime(type);
        break;
      case 'PartTime':
        employee = new PartTime(type);
        break;
      case 'Temporary':
        employee = new Temporary(type);
        break;
      case 'Contractor':
        employee = new Contractor(type);
        break;
    }
    employee.type = type;
    employee.info = function () {
      console.log(`${this.type}: rate ${this.rate}/hour`)
    };
    return employee;
  }
}

module.exports = new Employee;
