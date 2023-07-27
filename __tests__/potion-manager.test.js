import Potion from '../src/js/potion.js';
import PotionManager from '../src/js/potions-manager.js';

describe('PotionManager', () => {
  beforeEach(() => {
    PotionManager.allPotions = [];
  });

  test("should add a potion to allPotions", () => {
    const potionObject = { name: "Health Potion", effect: "Restores 50 health points"};
    PotionManager.addPotion(potionObject);

    expect(PotionManager.allPotions).toHaveLength(1);
    expect(PotionManager.allPotions[0]).toBeInstanceOf(Potion);
    expect(PotionManager.allPotions[0].name).toBe("Health Potion");
    expect(PotionManager.allPotions[0].effect).toBe("Restores 50 health points");
  });

  test("should add multiple potions to allPotions", () => {
    const potionObject1 = { name: "Health Potion", effect: "Restores 50 health points"};
    const potionObject2 = { name: "Strength Elixir", effect: "Increases attack damage by 10"};
    PotionManager.addPotion(potionObject1);
    PotionManager.addPotion(potionObject2);

    expect(PotionManager.allPotions).toHaveLength(2);

    expect(PotionManager.allPotions[0]).toBeInstanceOf(Potion);
    expect(PotionManager.allPotions[0].name).toBe("Health Potion");
    expect(PotionManager.allPotions[0].effect).toBe("Restores 50 health points");

    expect(PotionManager.allPotions[1]).toBeInstanceOf(Potion);
    expect(PotionManager.allPotions[1].name).toBe("Strength Elixir");
    expect(PotionManager.allPotions[1].effect).toBe("Increases attack damage by 10");
  });

  test("should not add a potion with missing properties to allPotions", () => {
    const potionObject = { effect: "Invalid Potion" };
    PotionManager.addPotion(potionObject);

    expect(PotionManager.allPotions).toHaveLength(0);
  })
});