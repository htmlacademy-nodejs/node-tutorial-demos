'use strict';

const http = require(`http`);

const HTTP_SUCCESS_CODE = 200;
const HTTP_NOT_FOUND_CODE = 404;

const styles = `
  h1 {
    color: red;
    font-size: 24px;
  }

  p {
    color: green;
    font-size: 16px;
  }
`;

const getResponseText = (userAgent) => (`
  <!DOCTYPE html>
    <html lang="ru">
      <head>
        <title>From Node with love!</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Привет!</h1>
        <p>Ты используешь: ${userAgent}.</p>
      </body>
    </html>
`);

const onClientConnect = (request, response) => {
  switch (request.url) {

    case `/style.css`:
      response.writeHead(HTTP_SUCCESS_CODE, {
        'Content-Type': `text/css; charset=UTF-8`,
      });

      response.end(styles);
      break;

    case `/`:
      const userAgent = request.headers[`user-agent`];
      const responseText = getResponseText(userAgent);

      response.writeHead(HTTP_SUCCESS_CODE, {
        'Content-Type': `text/html; charset=UTF-8`,
      });

      response.end(responseText);
      break;

    default:
      response.writeHead(HTTP_NOT_FOUND_CODE, {
        'Content-Type': `text/plain; charset=UTF-8`,
      });
      response.end(`Упс, ничего не найдено.`);
  }
};

const port = 8000;
const httpServer = http.createServer(onClientConnect);

httpServer.listen(port, () => {
  console.info(`Принимаю подключения на ${port}`);
});

httpServer.on(`error`, ({message}) => {
  console.error(`Ошибка: ${message}`);
});
