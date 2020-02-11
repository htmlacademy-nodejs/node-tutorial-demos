'use strict';

const express = require(`express`);

const port = 3000;
const app = express();

app.use(express.json());

app.post(`/data`, (req, res) => {
  res.json({OK: true, key: req.body[`secret-key`]});
});

app.listen(port, () =>
  console.log(`Сервер принимает подключения на ${port}`));


