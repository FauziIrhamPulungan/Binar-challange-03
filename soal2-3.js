class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.species = "Shark";
  }
  introduce() {
    return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, species ${this.species}, status ${this.status}`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, species ${this.species}, status ${this.status}`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "Dog";
  }
  introduce() {
    return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, species ${this.species}, status ${this.status}, pemilik ${this.master}`;
  }
  GreetMaster() {
    return `Hello ${this.master}`;
  }
}

module.exports = { Shark, Cat, Dog };
