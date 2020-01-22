'use strict';

const { sequelize } = require(`./db`);

(async () => {
  const sql = `SELECT * FROM "Books" WHERE "Books".title = ?`;
  const title = `Лабиринт отражений`;

  const type = sequelize.QueryTypes.SELECT;
  const replacements = [title];
  const peoples = await sequelize.query(sql, {type, replacements});

  sequelize.close();
  console.log(peoples);
})();
