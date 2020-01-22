'use strict';

const { sequelize, initDb } = require(`./db`);

(async() => {
    await initDb();
    await sequelize.close();
})();


