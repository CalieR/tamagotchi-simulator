class Tamagotchi { 
  name: string;
  species: string;
  hunger: number;
  thirst: number;
  health: number;
  happiness: number;
  cleanliness: number;
  energy: number;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
    this.hunger = 100;
    this.thirst = 100;
    this.health = 100;
    this.happiness = 100;
    this.cleanliness = 100;
    this.energy = 100;
  }

  feed() {
    this.hunger -= 10;
  }

  drink() {
    this.thirst -= 20;
  }

  vomit() {
    this.health -= 40;
  }

  giveMedicine() {
    this.health += 10;
  }

  play() {
    this.happiness += 30;
  }

  bathe() {
    this.cleanliness = 100;
  }

  sleep() {
    this.energy = 100;
  }
}

export default Tamagotchi;