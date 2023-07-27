export default class Inventory {
  constructor() {
    this.loot = {};
    this.amount = 15;
  }
  addItem(item) {
    if (this.findItem(item.name) && item.amount != 0) {
      this.loot[item.name] = item;
      this.loot[item.name].amount = 1;
    }
  }
  findItem(itemName) {
    if (this.bag[itemName]) {
      return true;
    }
    return false;
  }

  useItem(itemName) {
    if (this.findItem(itemName)) {
      this[item.effect](); // apply item effect
      item.amount--;
      if (item.amount === 0) {
        this.dropItem(itemName);
      }
    }
  }
}