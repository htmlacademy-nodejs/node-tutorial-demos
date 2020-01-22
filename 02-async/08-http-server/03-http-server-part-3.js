'use strict';

const http = require(`http`);

const HTTP_SUCCESS_CODE = 200;

const onClientConnect = (request, response) => {
  const userAgent = request.headers[`user-agent`];
  const responseText = `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <title>From Node.js with love!</title>
      </head>
      <body>
        <h1>Привет!</h1>
        <p>Ты используешь: ${userAgent}.</p>
      </body>
    </html>
  `;

  response.writeHead(HTTP_SUCCESS_CODE, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  response.end(responseText);
};

const port = 8000;
const httpServer = http.createServer(onClientConnect);

httpServer.listen(port, () => {
  console.info(`Принимаю подключения на ${port}`);
});

httpServer.on(`error`, ({message}) => {
  console.error(`Ошибка: ${message}`);
});
