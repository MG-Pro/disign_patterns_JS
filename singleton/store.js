class Store {
  constructor(store = {}) {
    if(!Store.instance) {
      this.store = store;
      Store.instance = this;
    }
    return Store.instance;
  }

  static getInstance() {
    if(!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance
  }

  setItem(name, value) {
    this.store[name] = value;
    this.getItem(name);
  }

  getItem(name) {
    return this.store[name]
  }

  showStore() {
    return this.store;
  }
}

module.exports = Store;
