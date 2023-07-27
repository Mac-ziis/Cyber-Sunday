import Potion from '../src/js/potion.js';

describe('newPotion', () => {
  //constructor: return the properties of 'heal' and 'potion'
  test('return the properties of heal and potion', () => {
    const myPotion = new Potion('potion', 'heal');
    expect(myPotion.name).toBe('potion');
    expect(myPotion.effect).toBe('heal');
  });

});

describe("Potion", () => {

  test('should restore 50 health points to the target player', () => {
    const target = {health: 100};
    const potion = new Potion("Health Potion", "Restores 50 health points");
    potion.applyEffect(target);
    expect(target.health).toBe(150);
  });

  test('Should increase the attack power of the target by 10', () => {
    const target = {attackPower: 50};
    const potion = new Potion("Strength Elixir", "Increases attack damage by 10");
    potion.applyEffect(target);
    expect(target.attackPower).toBe(60);
  });
});

