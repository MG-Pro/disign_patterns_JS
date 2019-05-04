const DrinkFactory = require('./drink-factory');

const factory = DrinkFactory.createFactory('coffee');
const americano = factory.createDrink('americano');
const esspress = factory.createDrink('esspress');
americano.info();
esspress.info()
