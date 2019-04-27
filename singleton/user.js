const Store = require('./store');

const store = {
  num: 1
};

module.exports = () => {
  const store1 = new Store(store);
  const store2 = Store.getInstance();

  store1.setItem('name', 'Petr');
  store1.setItem('num', 10);
  store2.setItem('age', 30);
};
