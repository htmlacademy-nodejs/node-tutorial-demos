'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = require(`./models/reader`)(sequelize);
  const result = await Reader.count({
      where: {
          firstname: `Jon`,
      },
  });

  console.log(`Количество читателей с именем Jon: ${result}`);
  sequelize.close();
})();
