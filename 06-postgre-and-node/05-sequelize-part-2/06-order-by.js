'use strict';

const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = require(`./models/reader`)(sequelize);
  const result = await Reader.findAll({
      order: [
          [`birthDate`, `DESC`]
      ],
      raw: true,
  });

  console.log(result);
  sequelize.close();
})();
