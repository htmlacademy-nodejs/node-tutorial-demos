'use strict';

const path = require(`path`);
const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const id = 1;
  const Reader = sequelize.import(path.join(__dirname, `./models/reader`));
  await Reader.update({ firstname: `Igor`}, {
      where: {
          id,
      },
  });

  sequelize.close();
})();
