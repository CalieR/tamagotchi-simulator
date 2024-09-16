#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { input } from '@inquirer/prompts';
import { capitalise } from './utils.js';
function createTamagotchi() {
    return __awaiter(this, void 0, void 0, function* () {
        let name;
        let species;
        name = yield input({
            message: "What is your tamagotchi's name?",
            default: 'Tamagotchi',
            required: true,
        });
        console.log(`Your tamagotchi's name is ${capitalise(name)}`);
        species = yield input({
            message: 'What type of animal is your tamagotchi?',
            default: 'Cat',
            required: true,
        });
        console.log(`${name} is a ${species}`);
    });
}
createTamagotchi();
// call the constructor with the user's input
// display the newly created tamagotchi
// add interactions - prompt individually or provide a menu (inquirer.select)
// provide way to end the loop and exit the program
//# sourceMappingURL=index.js.map