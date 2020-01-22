'use strict';

const express = require(`express`);
const router = require(`./routes`);
const PORT = 3000;

const app = express();

const {getLogger} = require(`./logger`);
const logger = getLogger();

app.use((req, res, next) => {
  logger.info(`Start request to url ${req.url}`);
  next();
});

app.use(router);

app.use((req, res) => {
  res.status(404).send(`Page not found`);

  // Записываем, что запрос закончился неудачей
  logger.error(`End request with error ${res.statusCode}`);
});

app.listen(PORT, () => {

  // Регистрируем запуск сервера
  logger.info(`server start on ${PORT}`);
}).on(`error`, (err) => {

  // Логируем ошибку, если сервер не смог стартовать
  logger.error(`Server can't start. Error: ${err}`);
});
