import Tamagotchi from "./tamagotchi";

describe("Tamagotchi", () => {
  describe("initialise a new tamagotchi", () => {
   test("it has the given name and species", () => {
      const tamagotchi = new Tamagotchi("Bob", "cat");
      expect(tamagotchi.name).toBe("Bob");
      expect(tamagotchi.species).toBe("cat");
    });
    test("it has the following stats", () => {
      const tamagotchi = new Tamagotchi("Bob", "cat");
      expect(tamagotchi.hunger).toBe(100);
      expect(tamagotchi.thirst).toBe(100);
      expect(tamagotchi.health).toBe(100);
      expect(tamagotchi.happiness).toBe(100);
      expect(tamagotchi.cleanliness).toBe(100);
      expect(tamagotchi.energy).toBe(100);
    });
  });
});

describe("Tamagotchi stats", () => {
  describe("hunger", () => {
    test("it can be fed to reduce hunger", () => {
      const tamagotchi = new Tamagotchi("Bob", "cat");
      tamagotchi.feed();
      expect(tamagotchi.hunger).toBe(90);
    });
 });
 describe("thirst", () => {
    test("it can be given a drink to reduce thirst", () => {
      const tamagotchi = new Tamagotchi("Bob", "cat");
      tamagotchi.drink();
      expect(tamagotchi.thirst).toBe(80);
    });
 });
 describe("health", () => {
  test("it is reduced by being being sick", () => {
    const tamagotchi = new Tamagotchi("Bob", "cat");
    tamagotchi.vomit();
    expect(tamagotchi.health).toBe(60);
  });
    test("it can be increased by giving medicine", () => {
      const tamagotchi = new Tamagotchi("Bob", "cat");
      tamagotchi.health = 50;
      tamagotchi.giveMedicine();
      expect(tamagotchi.health).toBe(60);
    });
 });
 describe("happiness", () => {
  test("it is increased by playing with the tamagotchi", () => {
    const tamagotchi = new Tamagotchi("Bob", "cat");
    tamagotchi.happiness = 60;
    tamagotchi.play();
    expect(tamagotchi.happiness).toBe(90);
  });
 });
 describe("cleanliness", () => {
  test("it is increased by giving a bath", () => {
    const tamagotchi = new Tamagotchi("Bob", "cat");
    tamagotchi.cleanliness = 20;
    tamagotchi.bathe();
    expect(tamagotchi.cleanliness).toBe(100);
  });
 });
 describe('energy', () => { 
  test("it is increased by sleeping", () => {
    const tamagotchi = new Tamagotchi("Bob", "cat");
    tamagotchi.energy = 10;
    tamagotchi.sleep();
    expect(tamagotchi.energy).toBe(100);
  });
  })
});