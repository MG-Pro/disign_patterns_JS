class Coffee {
    constructor(count = 0) {
        this.count = count;
    }
    info() {
        console.log(`${this.name}, count: ${this.count}`);
    }
}

class Espresso extends Coffee {
    constructor(count) {
        super(count);
        this.name = 'esspress';
    }

}

class Americano extends Coffee {
    constructor(count) {
        super(count);
        this.name = 'americano';
    }
}

class Mocha extends Coffee {
    constructor(count) {
        super(count);
        this.name = 'mocha';
    }
}

module.exports = {Espresso, Americano, Mocha};
