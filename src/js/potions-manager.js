import Potion from './potion.js';

class PotionManager {
  static allPotions = [];

  static addPotion(potionObject) {
    const { name, effect } = potionObject;
    const newPotion = new Potion(name, effect);
    PotionManager.allPotions.push(newPotion);
  }
}

// example usage

PotionManager.addItem({ name: "Health potion", effect: "Restores 50 health points"});
PotionManager.addItem({ name: "Strength elixir", effect: "Increases attack damage by 10"});
PotionManager.addItem({ name: "Mana elixir", effect: "Restores 25 mana points"});