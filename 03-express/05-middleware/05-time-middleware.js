'use strict';

const express = require(`express`);
const app = express();

const port = 3000;
app.listen(port);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} — ${new Date().toLocaleTimeString()}`);
  next();
});

// Опишем с помощью middleware обработчики
// двух маршрутов.

// Корневой маршрут
app.use((req, res, next) => {
  if (req.path === `/`) {
    res.send(`Hello`);
  }

  // Передаём эстафетную палочку следующему
  // middleware
  next();
});

// Маршрут /keks
app.use((req, res, next) => {
  if (req.path === `/keks`) {
    res.send(`Hello. I'am Keks`);
  }

  next();
});
