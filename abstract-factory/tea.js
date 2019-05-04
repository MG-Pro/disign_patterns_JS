class Tea {
    constructor(count = 0) {
        this.count = count;
    }
    info() {
        console.log(`${this.name}, count: ${this.count}`);
    }
}

class BlackTea extends Tea {
    constructor(count) {
        super(count);
        this.name = 'BlackTea';
    }
}
class GreenTea extends Tea {
    constructor(count) {
        super(count);
        this.name = 'GreenTea';
    }
}
class HerbalTea extends Tea {
    constructor(count) {
        super(count);
        this.name = 'HerbalTea';
    }
}

module.exports = {BlackTea, GreenTea, HerbalTea};
