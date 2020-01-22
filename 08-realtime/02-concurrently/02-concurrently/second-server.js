'use strict';

const express = require(`express`);

const PORT = 5000;
const app = express();

console.log(`Подготовка сервера к запуску на ${PORT}…`);
app.listen(PORT, () => {
    console.log(`Ожидаю подключений на ${PORT}`);
});
