'use strict';

const express = require(`express`);
const app = express();

const port = 3000;
app.listen(port);

// Регистрируем два одинаковых маршрута
app.get(`/:id`, (req, res, next) => {
  const id = +req.params.id;
  if (id === 100) {
    res.send(`Hey, superhero!`);
  } else {
    next();
  }
});

app.get(`/:id`, (req, res) => {
  const {id} = req.params;
  res.send(`Your id === ${id}`);
});
