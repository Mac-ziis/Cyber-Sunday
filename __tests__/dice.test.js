//import objectName from '../src/file-name';

import Dice from '../src/js/dice.js';

describe('Dice', () => {

  test('should create a dice object with a sides property', () => {
    const myDice = new Dice(6);
    expect(myDice.sides).toBe(6);
  });

});