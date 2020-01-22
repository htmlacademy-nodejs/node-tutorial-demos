'use strict';

const express = require(`express`);

const app = express();
const port = 3000;
app.listen(port);

app.set(`views`, `./templates`);
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => {
  const pageContent = {
    title: `Main Page`,
    header: `Шаблонизатор в действии`,
    description: `Страница сформирована при помощи шаблонизатора Pug`
  };

  res.render(`index`, pageContent);
});

app.get(`/emails`, (req, res) => {
  const pageContent = {
    title: `Emails list`,
    header: `Контакты`,
    emails: [
      `test@mail.ru`,
      `keks@htmlacademy.ru`,
    ],
  };

  res.render(`emails`, pageContent);
});

app.get(`/page`, (req, res) => {
  res.render(`page`, {title: `Пример заголовка страницы`});
});
