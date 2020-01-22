'use strict';

const http = require(`http`);

const onClientConnect = (request, response) => {
  const userAgent = request.headers[`user-agent`];
  response.end(`Hello, ${userAgent}!`);
};

const port = 8000;
const httpServer = http.createServer(onClientConnect);

httpServer.listen(port, (err) => {
  if (err) {
    return console.error(`Ошибка при создании http-сервера.`, err);
  }

  return console.info(`Принимаю подключения на ${port}`);
});
