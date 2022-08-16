export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makNoise(sound = 'Loud Noise') {
    console.log(sound);
  }

  get metaDate() {
    return `Type: ${this.type}, legs: ${this.legs}`;
  }

  static return10() {
    return 10;
  }
}

export class Cat extends Animal {
  makNoise(sound = "meow") {
    console.log(sound);
  }

}