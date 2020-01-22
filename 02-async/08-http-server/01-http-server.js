'use strict';

const http = require(`http`);

const onClientConnect = (request, response) => {
  const userAgent = request.headers[`user-agent`];
  response.end(`Hello, ${userAgent}!`);
};

const port = 8000;
const httpServer = http.createServer(onClientConnect);

httpServer.listen(port, () => {
  console.info(`Принимаю подключения на ${port}`);
});

httpServer.on(`error`, ({message}) => {
  console.error(`Ошибка: ${message}`);
});
