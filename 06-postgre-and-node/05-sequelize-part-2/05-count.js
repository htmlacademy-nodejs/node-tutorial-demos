'use strict';

const path = require(`path`);
const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = sequelize.import(path.join(__dirname, `./models/reader`));
  const result = await Reader.count({
      where: {
          firstname: `Jon`,
      },
  });

  console.log(`Количество читателей с именем Jon: ${result}`);
  sequelize.close();
})();
