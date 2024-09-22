import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
// https://stackoverflow.com/questions/64453859/directory-import-is-not-supported-resolving-es-modules-with-node-js
import models from './db/models/index.js';
// import { spec } from 'node:test/reporters';

const app = express();
app.use(express.json()); // This middleware is used to parse JSON bodies.
app.use(express.urlencoded({ extended: true })); // This middleware is used to parse URL-encoded bodies.
app.use(cors());

// app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

app.get('/', (_req: any, res: any) => {
    res.send('Recieved a GET request!');
});

app.post('/', (req: any, res: any) => {
    res.send('Recieved a POST request!');
});


// all tamagotchis
app.get('/tamagotchis', (req: any, res: any) => {
  return res.send(Object.values(models.tamagotchis));
});

app.post('/tamagotchis', (req: any, res: any) => {
  const id = uuidv4();
  const tamagotchi = {
    id,
    name: req.body.name,
    species: req.body.species,
    hunger: 100,
    thirst: 100,
    health: 100,
    happiness: 100,
    cleanliness: 100,
    energy: 100,
  };
  models.tamagotchis[id] = tamagotchi;
  return res.send(tamagotchi);
});

// individual tamagotchis
app.get('/tamagotchis/:id', (req: any, res: any) => {
  return res.send(models.tamagotchis[req.params.id]);
});

app.delete('/tamagotchis/:id', (req: any, res: any) => {
  const { [req.params.id]: tamagotchi, ...otherTamagotchis } = models.tamagotchis;

  models.tamagotchis = otherTamagotchis;

  return res.send(tamagotchi);
});


