'use strict';

const {Router} = require(`express`);
const router = new Router();

const {getLogger} = require(`./logger`);
const logger = getLogger();

router.get(`/`, (req, res) => {
  res.send(`Hello World`);

  // Записываем успех завершения запроса
  logger.info(`End request with status code ${res.statusCode}`);
});


//  Регистрируем дополнительный маршрут `/about`
router.get(`/about`, (req, res) => {
  res.send(`About Node.js lessons`);
  logger.info(`End request with status code ${res.statusCode}`);
});

module.exports = router;
