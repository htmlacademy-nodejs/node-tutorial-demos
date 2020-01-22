'use strict';

const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();
app.use(bodyParser.json());

const port = 3000;
app.listen(port);

// POST
app.post(`/company`, (req, res) => res.send(`OK`));
// PATCH
app.patch(`/company`, (req, res) => res.send(`OK`));
// PUT
app.put(`/company`, (req, res) => res.send(`OK`));
// DELETE
app.delete(`/company`, (req, res) => res.send(`OK`));

// Маршрут в виде регулярного выражения
app.get(`/page[0-9]+`, (req, res) => res.send(`Yes, it's a valid url!`));
