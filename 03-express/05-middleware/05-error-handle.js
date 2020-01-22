'use strict';

const express = require(`express`);
const app = express();

const port = 3000;
app.listen(port);

app.get(`/`, (req, res) => {
  throw new Error(`Oops!`);
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .send(`Ой, что-то сломалось`);
});
