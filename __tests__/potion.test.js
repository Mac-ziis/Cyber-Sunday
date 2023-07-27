import Potion from './src/js/potion.js';

describe('newPotion', () => {
  //constructor: return the properties of 'heal' and 'potion'
  test('return the properties of heal and potion', () => {
    const myPotion = new Potion('potion', 'heal');
    expect(myPotion.name).toBe('potion');
    expect(myPotion.effect).toBe('heal');
  });

});

describe("Potion", () => {

  test('should restore 50 health pints to the target player', () => {
    const target = {health: 100};
    const potion = new Potion("Health Potion", "Restores 50 health points");
    potion.applyEffect(target);
    expect(target.health).toBe(150);
  });
})

