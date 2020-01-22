'use strict';

const storeService = require(`./services/store-service`);

(async() => {
    await storeService.add(`user@web.com`, `123456`);
    console.log(`Добавлен тестовый пользователь user@web.com`);
})();
