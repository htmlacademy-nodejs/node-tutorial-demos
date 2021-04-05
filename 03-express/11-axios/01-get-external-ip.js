const https = require('https');

const URL_API = `https://api.ipify.org/?format=json`

const getExternalIp = async () => {
  return new Promise((resolve, reject) => {

	// Функция-обратного вызова. Сработает
    // при получении ответа.
    const callback = (stream) => {
      let data = ``;

	  // читаем поток данных (stream)
      stream.on(`data`, (chunk) => {
        data += chunk;
      });

			// после завершения, обработаем ответ целиком
      stream.on(`end`, () => {
        resolve(JSON.parse(data));
      });

      stream.on(`error`, (err) => {
        reject(err)
      });
    }

    const req = https.get(URL_API, callback)

	// в случае ошибки отменим промис
    req.on(`error`, (err) => {
      reject(err)
    });

    req.end();
  })

}

getExternalIp()
  .then(console.log)
