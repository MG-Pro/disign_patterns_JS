const employee = require('./factory');

const fullTaim = employee.create('FullTime');
const partTime = employee.create('PartTime');
const temporary = employee.create('Temporary');
const contractor = employee.create('Contractor');

fullTaim.info();
partTime.info();
temporary.info();
contractor.info();
