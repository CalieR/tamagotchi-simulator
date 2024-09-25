class Tamagotchi {
    constructor(name, species) {
        this.name = name;
        this.species = species;
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
            console.log("I'm full!");
        }
    }
    vomit() {
        this.health -= 40;
    }
    giveMedicine() {
        this.health += 10;
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
//# sourceMappingURL=tamagotchi.js.map