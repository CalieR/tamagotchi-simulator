var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { input, select } from '@inquirer/prompts';
import { capitalise } from '../utils.js';
import Tamagotchi from '../tamagotchi/tamagotchi.js';
class Game {
    constructor() { }
    createTamagotchi() {
        return __awaiter(this, void 0, void 0, function* () {
            let name;
            let species;
            name = yield input({
                message: "What is your tamagotchi's name?",
                default: 'Tamagotchi',
                required: true,
            });
            species = yield input({
                message: 'What type of animal is your tamagotchi?',
                default: 'Cat',
                required: true,
            });
            const tamagotchi = new Tamagotchi(capitalise(name), species);
            console.log('Thank you! Your tamagotchi is ready to go.');
            this.displayMenu(tamagotchi);
        });
    }
    displayMenu(tamagotchi) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedInteraction = yield select({
                message: 'Interact with your tamagotchi - choose an option:',
                choices: [
                    {
                        name: `Feed ${tamagotchi.name}`,
                        value: 'feed',
                        description: 'Feed your tamagotchi',
                    },
                    {
                        name: `Give ${tamagotchi.name} a bath`,
                        value: 'bathe',
                        description: 'Give your tamagotchi a bath',
                    },
                    {
                        name: `Play with ${tamagotchi.name}`,
                        value: 'play',
                        description: 'Play with your tamagotchi',
                    },
                    {
                        name: `Check ${tamagotchi.name}'s stats`,
                        value: 'stats',
                        description: "Check your tamagotchi's stats",
                    },
                    {
                        name: 'Exit',
                        value: 'exit',
                        description: 'Exit the program',
                    },
                ],
            });
            if (selectedInteraction === 'feed') {
                console.log('Feeding your tamagotchi');
                tamagotchi.feed();
                console.log(`The tamagotchi's hunger is now ${tamagotchi.hunger}`);
                this.displayMenu(tamagotchi);
            }
            if (selectedInteraction === 'bathe') {
                console.log('Bathing your tamagotchi');
                tamagotchi.bathe();
                console.log("The tamagotchi's cleanliness is now 100%");
                console.log(`The tamagotchi's health is now ${tamagotchi.health}`);
                this.displayMenu(tamagotchi);
            }
            if (selectedInteraction === 'play') {
                console.log('Playing with your tamagotchi');
                tamagotchi.play();
                console.log(`The tamagotchi's happiness is now ${tamagotchi.happiness}`);
                console.log(`The tamagotchi's energy is now ${tamagotchi.energy}`);
                console.log(`The tamagotchi's hunger is now ${tamagotchi.hunger}`);
                this.displayMenu(tamagotchi);
            }
            if (selectedInteraction === 'stats') {
                console.log("Checking your tamagotchi's stats");
                console.log(tamagotchi);
                this.displayMenu(tamagotchi);
            }
            if (selectedInteraction === 'exit') {
                console.log('Exiting the program');
                process.exit(0);
            }
        });
    }
}
export default Game;
//# sourceMappingURL=game.js.map