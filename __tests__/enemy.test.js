import Enemy from '../src/js/enemy.js';

describe('Enemy', () => {
  test('should correclty create an enemy object with a level and a type', () => {
    const goblin = new Enemy(1, 'goblin');
    expect(goblin.level).toBe(1);
    expect(goblin.type).toBe('goblin');
  });

});