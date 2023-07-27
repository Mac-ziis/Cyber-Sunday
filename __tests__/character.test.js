import Character from '../src/js/character.js';

describe('Character', () => {
  //constructor: creates object with property, methods
  test('A warrior should have 150 health and 100 stamina and 15 attack', () => {

    const myWarrior = new Character('warrior');

    expect(myWarrior.level).toBe(1);
    expect(myWarrior.health).toBe(150);
    expect(myWarrior.stamina).toBe(100);
    expect(myWarrior.type).toBe('warrior');
    expect(myWarrior.attack).toBe(15);

  });

  test('A robot should have 175 health and 150 stamina and 10 attack', () => {

    const myRobot = new Character('robot');

    expect(myRobot.level).toBe(1);
    expect(myRobot.health).toBe(175);
    expect(myRobot.stamina).toBe(150);
    expect(myRobot.type).toBe('robot');
    expect(myRobot.attack).toBe(10);
  });

  test('A wizard and a witch should have 100 health and 100 stamina and 100 mana', () => {

    const myWizard = new Character('wizard');
    const myWitch = new Character('witch');

    expect(myWizard.level).toBe(1);
    expect(myWizard.health).toBe(100);
    expect(myWizard.stamina).toBe(100);
    expect(myWizard.mana).toBe(100);
    expect(myWizard.type).toBe('wizard');

    expect(myWitch.level).toBe(1);
    expect(myWitch.health).toBe(100);
    expect(myWitch.stamina).toBe(100);
    expect(myWitch.mana).toBe(100);
    expect(myWitch.type).toBe('witch');
  });

  test('should correctly initialize a level 1 character of type astromorph', () => {

    const myChar = new Character('astromorph');

    expect(myChar.level).toBe(1);
    expect(myChar.health).toBe(75);
    expect(myChar.stamina).toBe(60);
    expect(myChar.mana).toBe(200);
    expect(myChar.type).toBe('astromorph');
  });

  test('should correctly roll a 20 sided die when attack is called', () => {

    const myChar = new Character('astromorph');

    expect(myChar.attack()).toBe(('hit' || 'critical hit') || ('miss' || 'critical miss'));

  });

  test('should correctly determine damage based on number rolled', () => {

    const myChar = new Character('astromorph');
    expect(myChar.attack()).toBe(('hit' || 'critical hit') || ('miss' || 'critical miss'));

  });

  test('should correcly indicate whether or not an attack hits', () => {
    const myChar = new Character('astromorph');
    expect(myChar.attack()).toBe(('hit' || 'critical hit') || ('miss' || 'critical miss'));
  });

});
