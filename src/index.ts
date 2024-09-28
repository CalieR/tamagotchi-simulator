#!/usr/bin/env node

import Game from './game/game.js';

const game = new Game();

game.createTamagotchi();

// add effects using chalk or similar to make the output easier to read.
// give sleep() a timeout so user can wait for the tamagotchi to wake up.
