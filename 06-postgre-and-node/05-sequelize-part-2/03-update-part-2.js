'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const id = 1;
  const Reader = require(`./models/reader`)(sequelize);
  await Reader.update({ firstname: `Igor`}, {
      where: {
          id,
      },
  });

  sequelize.close();
})();
