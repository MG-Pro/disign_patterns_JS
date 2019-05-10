const Cart = require('./cart.js');
const Product = require('./product.js');
const ItemAdapter = require('./item-adapter.js');

const cart = new Cart();

const product = new Product('iPhone', 500);

const item = new ItemAdapter(product);

cart.add(item);

console.log(cart.info);

