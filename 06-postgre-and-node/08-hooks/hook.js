'use strict';

const { db, sequelize, initDb } = require(`./db`);

(async() => {
    await db.Author.create({ firstname: `Марио`, lastname: `Пьюзо`});
    await sequelize.close();
})();
