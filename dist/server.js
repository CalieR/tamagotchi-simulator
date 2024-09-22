var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
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
app.get('/', (_req, res) => {
    res.send('Recieved a GET request!');
});
app.post('/', (req, res) => {
    res.send('Recieved a POST request!');
});
// all tamagotchis
app.get('/tamagotchis', (req, res) => {
    return res.send(Object.values(models.tamagotchis));
});
app.post('/tamagotchis', (req, res) => {
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
app.get('/tamagotchis/:id', (req, res) => {
    return res.send(models.tamagotchis[req.params.id]);
});
app.delete('/tamagotchis/:id', (req, res) => {
    const _a = models.tamagotchis, _b = req.params.id, tamagotchi = _a[_b], otherTamagotchis = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    models.tamagotchis = otherTamagotchis;
    return res.send(tamagotchi);
});
// when the db is simply a folder in the app
//   app.get("/tamagotchis", (req: any, res: any) => {
//     res.sendFile(__dirname + "/db/tamagotchis.json");
//   });
//# sourceMappingURL=server.js.map