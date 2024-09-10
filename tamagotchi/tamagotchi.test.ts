import Tamagotchi from "./tamagotchi";

describe("Tamagotchi", () => {
  describe("initialise a new tamagotchi", () => {
   test("it has the given name and species", () => {
      const tamagotchi = new Tamagotchi("Bob", "cat");
      expect(tamagotchi.name).toBe("Bob");
      expect(tamagotchi.species).toBe("cat");
    });
  });
});