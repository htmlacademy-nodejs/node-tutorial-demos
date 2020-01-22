'use strict';

const { sequelize } = require(`./db`);

(async () => {
   const sql = `SELECT * FROM "Books";`;

   const type = sequelize.QueryTypes.SELECT;
   const books = await sequelize.query(sql, {type});

   sequelize.close();
   console.log(books);
})();
