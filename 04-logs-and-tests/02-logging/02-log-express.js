'use strict';

const express = require(`express`);
const PORT = 3000;

const app = express();
app.listen(PORT);

app.get(`/`, (req, res) => {
  res.send(`Hello World`);
});

app.use((req, res) => {
  res.status(404).send(`Page not found`);
});
