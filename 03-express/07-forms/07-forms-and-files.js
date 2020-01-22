'use strict';

const express = require(`express`);
const fs = require(`fs`).promises;
const formidableMiddleware = require(`express-formidable`);

const PUBLIC_DIR = `avatars`;

const app = express();
const port = 3000;

app.use(formidableMiddleware({
  encoding: `utf-8`,
  uploadDir: `./tmp`,
  multiples: false,
}));


app.use(express.static(PUBLIC_DIR));

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
      <form action="/form" method="POST" enctype="multipart/form-data">
        <label for="firstname">Имя:</label>
        <input id="firstname" name="firstname" />

        <label for="photo">Фотография:</label>
        <input type="file" id="photo" name="photo" />

        <button type="submit">Отправить</button>
      </form>
    </body>
`);

const getAvatarPage = (path) => (`<!doctype html>
  <html lang="ru">
    <head>
      <title>Your avatar</title>
    </head>
  <body>
    <h1>Your avatar</h1>
    <img src="/${path}" />
  </body>
  </html>`
);

app.get(`/form`, (req, res) => {
  res.send(getContent());
});

app.post(`/form`, async (req, res) => {
  const {type, size, path, name} = req.files.photo;
  const allowTypes = [`image/jpeg`, `image/png`];

  if (size === 0 || !allowTypes.includes(type)) {
    fs.unlink(path);
    return res.redirect(`/form`);
  }

  try {
    await fs.rename(path, `./avatars/${name}`);
  } catch (error) {
    return res.send(`Oops! Error: ${error.message}`);
  }

  return res.send(getAvatarPage(name));
});
