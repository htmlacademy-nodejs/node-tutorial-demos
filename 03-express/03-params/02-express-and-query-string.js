'use strict';

const express = require(`express`);

const app = express();
app.use(express.json());

const port = 3000;

const companies = [
  `HTML Academy`,
  `Microsoft`,
  `Google`,
];

// Строка запроса
app.get(`/`, (req, res) => {
  // Вывод содержимого строки запроса
  console.log(req.query);
  res.send(req.query);
});

// Тело запроса
app.post(`/company`, (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Именованные параметры
app.get(`/company/:id`, (req, res) => {
  const companyId = Number.parseInt(req.params.id, 10);

  if (!companies[companyId]) {
    return res.status(404).send(`Not Found`);
  }

  return res.send(companies[companyId]);
});


app.listen(port);
