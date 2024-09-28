import { render } from '@inquirer/testing';
import { input } from '@inquirer/prompts';

import Game from '../game/game';

describe('Game', () => {
  test('it can initialise a new game', () => {
    const game = new Game();
    expect(game).toBeDefined();
  });
  test('it prompts the user to enter a name', async () => {
    const { getScreen, events, answer } = await render(input, {
      message: "What is your tamagotchi's name?",
    });
    expect(getScreen()).toMatchInlineSnapshot(
      `"? What is your tamagotchi's name?"`
    );
    events.type('Bob');
    events.keypress('enter');

    await expect(answer).resolves.toEqual('Bob');
  });
  test('it prompts the user to enter a species', async () => {
    const { getScreen, events, answer } = await render(input, {
      message: 'What type of animal is your tamagotchi?',
    });
    expect(getScreen()).toMatchInlineSnapshot(
      `"? What type of animal is your tamagotchi?"`
    );
    events.type('Cat');
    events.keypress('enter');

    await expect(answer).resolves.toEqual('Cat');
  });
});

// game should create a tamagotchi
// game should display a menu of interactions
// game should calculate the age of the tamagotchi
