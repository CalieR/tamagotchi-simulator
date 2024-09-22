#!/usr/bin/env node

import { input, select } from '@inquirer/prompts';
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

  species = await input({
    message: 'What type of animal is your tamagotchi?',
    default: 'Cat',
    required: true,
  });

  const tamagotchi = new Tamagotchi(capitalise(name), species);
  console.log(tamagotchi);
  
  displayMenu(tamagotchi);
}

async function displayMenu(tamagotchi: Tamagotchi) {
  const selectedInteraction = await select({
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
        name: 'Exit',
        value: 'exit',
        description: 'Exit the program',
      }
    ],
  });

  if (selectedInteraction === 'feed') {
    console.log('Feeding your tamagotchi');
    tamagotchi.feed();
    console.log(tamagotchi);
    displayMenu(tamagotchi);
  } 
  if (selectedInteraction === 'bathe') {
    console.log('Bathing your tamagotchi');
    tamagotchi.bathe();
    console.log(tamagotchi);
    displayMenu(tamagotchi);
  }
  if (selectedInteraction === 'play') {
    console.log('Playing with your tamagotchi'); 
    tamagotchi.play();
    console.log(tamagotchi);
    displayMenu(tamagotchi);
  }
  if (selectedInteraction === 'exit') {
    console.log('Exiting the program');
    process.exit(0);
  }
}

createTamagotchi();

// add effects using chalk or similar to make the output easier to read.
// give sleep() a timeout so user can wait for the tamagotchi to wake up.

