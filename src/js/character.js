export default class Character {
  constructor(type) {
    this.level = 1;
    this.type = this.assignType(type);
    this.inventory = {};
  }

  useItem(item) {
    const item = this.inventory.find(item => item.name === itemName);
    if (item) {
      // implement effects of using an item
    }
  }

  assignType(type) {
    if (type === 'warrior') {
      this.health = 150;
      this.stamina = 100;
      this.attackPower = 15;
      return 'warrior';
    } else if (type === 'robot') {
      this.health = 175;
      this.stamina = 150;
      this.attackPower = 10;
      return 'robot';
    } else if (type === 'witch' || type === 'wizard') {
      this.health = 100;
      this.stamina = 100;
      this.mana = 100;
      this.attackPower = type === 'wizard' ? 12 : 10;
      return type;
    } else {
      this.health = 75;
      this.stamina = 60;
      this.mana = 200;
      this.attackPower = 8;
      return 'astromorph';
    }
  }

  damageCalc() {
    const damage = math.random() * 8 + 1;
    return damage;
  }

  //todo: damageCalc, attack, levelup, target(ui)
  attack() {
    const hitProb = Math.random() * 20 + 1;
    if (hitProb < 5) {
      if (hitProb === 1) {
        //todo: damage self
        return -1;
      }
      return 0;
    } else {
      let damage = Math.floor(this.damageCalc()) + Math.floor(Math.random() * (this.attackPower / 100) + 1); //utility function calculateDamage
      if (hitProb === 20) {
        damage += 10; //attackPower, utility function critDamage

      }
      return damage;
    }
  }
}
