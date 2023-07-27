
export default class Potion {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect; 
  }

  applyEffect(target) { 
    const health_potion_effect = "Restores 50 health points";
    const strength_elixir_effect = "Increases attack damage by 10";
    const mana_elixir_effect = "Restores 25 mana points";
    
    if (this.effect === health_potion_effect) {
      if (target.hasOwnProperty("health") && typeOf target.health === "number") {
        const healthToRestore = 50;
        target.health += healthToRestore;
      }
    } else if (this.effect === strength_elixir_effect) {
      if (target.hasOwnProperty("attackPower") && typeOf target.attackPower === "number") {
        const powerIncrease = 10;
        target.attackPower += powerIncrease;
      }
    } else if (this.effect === mana_elixir_effect) {
      if (target.hasOwnProperty("mana") && typeOf target.mana === "number") {
        const manaRestored = 25;
        target.mana += manaRestored;
      }
    }
  }
}

