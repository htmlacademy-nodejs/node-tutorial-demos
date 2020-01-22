'use strict';

const express = require(`express`);

const PORT = 4000;
const app = express();

console.log(`Подготовка сервера к запуску на ${PORT}…`);
app.listen(PORT, () => {
    console.log(`Ожидаю подключений на ${PORT}`);
});
