'use strict';

const path = require(`path`);
const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = sequelize.import(path.join(__dirname, `./models/reader`));

  // Все записи из таблицы `Readers`
  const allEntries = await Reader.findAll({raw: true});
  console.log(allEntries);

  // Получаем запись с `id` равным 2
  console.info(`*** Выборка записи с идентификатором 2:`);
  const entry = await Reader.findByPk(2, {raw: true});
  console.log(entry);

  // Удаляем запись с `id` равным 2
  console.info(`*** Удаление записи с идентификатором 2:`)
  const deletedEntry = await Reader.destroy({
      where: {
          id: 2
      }
  });
  console.log(deletedEntry)


})();
