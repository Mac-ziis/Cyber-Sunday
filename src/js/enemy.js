//type -> ['slime', 'golem', 'giant', 'goblin', 'mirrorimage']

// myCharacter = new Enemy(1, 'slime') attack, ...  ;  -> note that the constructor intialzies the object in memory


//Enemy
//goblin slime giant golem mirror image
// -level
// -health


//Enemy  -> attack()
// objects allows us to compartmentalize function and data
export default class Enemy {
  constructor(level, type) {
    this.health = 100 + (level / 3 - 1) * 50;
    this.attackPower = 10 + (level / 3 - 1) * 5;
    this.type = type;
    this.level = level;
    this.experienceOnDeath = 10 + (level / 3 - 1) * 5;
  }

  attack() {
    //dosomething
  }



}
