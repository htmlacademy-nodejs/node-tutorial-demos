'use strict';

const logger = require(`pino`)({
  name: `pino-and-express`,
  level: process.env.LOG_LEVEL || `info`
});

module.exports = {
  logger,
  // Метод всегда возвращает новый логгер, унаследованный
  // от стандартного логгера. В метод можно передать
  // специфичные настройки для нового экземпляра класса.
  getLogger(options = {}) {
    return logger.child(options);
  }
};
