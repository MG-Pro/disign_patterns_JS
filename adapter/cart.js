class Cart {
    constructor() {
        this.items = new Set();
    }

    get totalPrice() {
        let result = 0;

        for (let item of this.items) {
            result += item.price;
        }

        return result;
    }

    get info() {
        let result = '';

        for (let item of this.items) {
            result += `${item.name}: $${item.price}\n`;
        }

        result += '----------\n';
        result += `Total: $${this.totalPrice}\n`;
        return result;
    }

    add(item) {
        this.items.add(item);
    }

    remove(item) {
        this.items.delete(item);
    }
}

module.exports = Cart;
