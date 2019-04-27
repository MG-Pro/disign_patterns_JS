const Store = require('./store');
const user = require('./user');

user();

const store3 = Store.getInstance();
console.log(store3.getItem('name'));
console.log(store3.getItem('num'));
console.log(store3.showStore());

