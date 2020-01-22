'use strict';

const { sequelize } = require(`./db`);

(async () => {
  const type = sequelize.QueryTypes.SELECT;
  const sql = `SELECT * FROM "Books" WHERE "Books".title = $1;`;
  const title = `Лабиринт отражений`;

  const bind = [title];
  const books = await sequelize.query(sql, {type, bind});

  sequelize.close();
  console.log(books);
})();
