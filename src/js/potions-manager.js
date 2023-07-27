import Potion from './potion.js';

export default class PotionManager {
  static allPotions = [];

  static addPotion(potionObject) {
    const { name, effect } = potionObject;
    const newPotion = new Potion(name, effect);
    PotionManager.allPotions.push(newPotion);
  };
}

// example usage

// PotionManager.addPotion({ name: "Health potion", effect: "Restores 50 health points"});
// PotionManager.addPotion({ name: "Strength elixir", effect: "Increases attack damage by 10"});
// PotionManager.addPotion({ name: "Mana elixir", effect: "Restores 25 mana points"});