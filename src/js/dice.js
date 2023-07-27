
export default class Dice {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;  // 0 - 0.99999999999999
    return randomNumber;
  }

}



