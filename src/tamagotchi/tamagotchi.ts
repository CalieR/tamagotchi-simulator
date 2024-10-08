class Tamagotchi {
  name: string;
  species: string;
  dateOfBirth: Date;
  hunger: number;
  health: number;
  happiness: number;
  cleanliness: number;
  energy: number;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
    this.dateOfBirth = new Date();
    this.hunger = 100;
    this.health = 100;
    this.happiness = 100;
    this.cleanliness = 100;
    this.energy = 100;
  }

  feed() {
    if (this.hunger > 0) {
      this.hunger = 0;
    }
    if (this.hunger === 0) {
      console.log( "I'm full!")
    }
  }

  vomit() {
    this.health -= 40;
  }

  giveMedicine() {
    if (this.health < 100) {
    this.health += 10;
    }
    if (this.health === 100) {
      console.log("I'm not sick anymore!")
    }
  }

  play() {
    this.happiness += 30;
    this.hunger -= 10;
    this.energy -= 10;
  }

  bathe() {
    this.cleanliness = 100;
    this.health += 10;
  }

  sleep() {
    this.energy = 100;
    this.hunger = 80;
  }
}

export default Tamagotchi;
