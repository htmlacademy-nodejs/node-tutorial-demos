'use strict';

const express = require(`express`);

const PUBLIC_DIR = `public`;

const app = express();
const port = 3000;
app.listen(port);

app.use(express.static(PUBLIC_DIR));

const getContent = () => (`<!doctype html>
  <html lang="ru">
    <head>
      <title>Hello, world</title>
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <h1>Hello, world!</h1>
    </body>
`);

app.get(`/`, (req, res) => {
  res.send(getContent());
});
