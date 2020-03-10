'use strict';

const express = require(`express`);
const fs = require(`fs`).promises;

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.listen(port);

const getContent = () => (`<!doctype html>
  <html lang="ru">
    <head>
      <title>Hello, world</title>
      <style>
        form {
          display: flex;
          justify-content: center;
          flex-grow: 1;
          flex-direction: column;
          width: 500px;
        }

        label {
          font-weight: bold;
          margin-bottom: 2px;
          display: block;
        }

        input {
          border: 1px solid #ccc;
          margin: 3px 0;
          padding: 5px;
        }

        button {
          width: 100px;
          margin-top: 10px;
        }
        </style>
    </head>
    <body>
      <h1>Express и формы</h1>
      <form action="/form" method="POST">
        <label for="firstname">Имя:</label>
        <input id="firstname" name="firstname">

        <label for="lastname">Фамилия:</label>
        <input id="lastname" name="lastname">

        <label for="email">Email:</label>
        <input id="email" name="email">

        <label for="comment">Комментарий</label>
        <textarea id="comment" name="comment"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </body>
`);

app.get(`/form`, (req, res) => {
  res.send(getContent());
});

app.post(`/form`, async (req, res) => {
  const reviewForm = req.body;
  const jsonForm = JSON.stringify(reviewForm);
  const fileName = `form-${Date.now()}.json`;

  try {
    await fs.writeFile(`./${fileName}`, jsonForm);
    res.send(`Ваши данные успешно сохранены в файл ${fileName}`);
  } catch (err) {
    res.send(`Возникла ошибка сохранения: ${err.message}`);
  }
});
