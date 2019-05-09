const Person = require('./Person');

const man = new Person({gender: 'man'});

man.info();
man.age = 26;
man.info();

const women = man.clone();
women.info();
women.gender = 'women';
man.info();
