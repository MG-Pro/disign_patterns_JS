const {Espresso, Americano, Mocha} = require('./coffee');

class CoffeeFactory {
    createDrink(type) {
        switch (type) {
            case 'esspress': return new Espresso(5);
            case 'americano': return new Americano(3);
            case 'mocha': return new Mocha(6);
        }
    }
}

module.exports = CoffeeFactory;
