'use strict';

const express = require(`express`);
const PORT = 3000;
const app = express();

// Инициализируем логгер
const logger = require(`pino`)({
  name: `pino-and-express`,

  // Позволяем управлять уровнем логирования через переменные окружения
  level: process.env.LOG_LEVEL || `info`
});

app.use((req, res, next) => {
  logger.debug(`Start request to url ${req.url}`);
  next();
});

app.get(`/`, (req, res) => {
  // Записываем успех завершения запроса
  logger.info(`End request with status code ${res.statusCode}`);
  res.send(`Hello World`);
});

app.use((req, res) => {
  res.status(404).send(`Page not found`);
  // Записываем, что запрос закончился неудачей
  logger.error(`End request with error ${res.statusCode}`);
});

app.listen(PORT, () => {
  // Регистрируем запуск сервера
  logger.info(`server start on ${PORT}`);
})
.on(`error`, (err) => {
  // Логируем ошибку, если сервер не смог стартовать
  logger.error(`Server can't start. Error: ${err}`);
});
