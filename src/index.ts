#!/usr/bin/env node

import { input } from '@inquirer/prompts';
import { capitalise } from './utils.js';

import Tamagotchi from './tamagotchi/tamagotchi.js';

async function createTamagotchi() {
  let name;
  let species;

  name = await input({
    message: "What is your tamagotchi's name?",
    default: 'Tamagotchi',
    required: true,
  });
  console.log(`Your tamagotchi's name is ${capitalise(name)}`);

  species = await input({
    message: 'What type of animal is your tamagotchi?',
    default: 'Cat',
    required: true,
  });

  const tamagotchi = new Tamagotchi(name, species);
  console.log(tamagotchi);
  // displayMenu();
}

createTamagotchi();

// store the tamagotchi in a db
// display the newly created tamagotchi
// add interactions - prompt individually or provide a menu (inquirer.select)
// provide way to end the loop and exit the program
