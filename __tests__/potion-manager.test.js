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
});