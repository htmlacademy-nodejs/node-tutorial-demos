'use strict';

const path = require(`path`);
const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = sequelize.import(path.join(__dirname, `./models/reader`));
  const newReaders = [
    {
        firstname: `Ralph`,
        lastname: `Roberts`,
        birthDate: new Date(`1947-08-29`)
    },
    {
        firstname: `Jon`,
        lastname: `Bon Jovi`,
        birthDate: new Date(`1962-03-02`)
    },
  ];

  await Reader.bulkCreate(newReaders);
  sequelize.close();
})();
