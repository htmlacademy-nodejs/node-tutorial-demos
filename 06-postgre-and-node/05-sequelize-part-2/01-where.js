'use strict';

const path = require(`path`);
const Sequelize = require(`sequelize`);

(async () => {
  const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
  });

  const Reader = sequelize.import(path.join(__dirname, `./models/reader`));
  const Operator = Sequelize.Op;

  // Читатели с именами Ivan и Jon
  console.info(`*** Jon и Ivan`)
  const entries = await Reader.findAll({
      where: {
        [Operator.or]: [{firstname: `Ivan`}, {firstname: `Jon`}],
      },
      raw: true
    });
 console.log(entries); // 2 записи

 // Читатели Ivan и Jon, которые родились
 // после 80-го года
 console.info(`*** Jon и Ivan`);
 const entries2 = await Reader.findAll({
     where: {
        [Operator.or]: [{firstname: `Ivan`}, {firstname: `Jon`}],
        [Operator.and]: {
            birthDate: {
                [Operator.gt]: `1980-01-01`
            }
        }
     },
    raw: true,
 });
 console.log(entries2);

 // Jon и Ivan, оператор IN
 console.info(`*** Jon и Ivan`);
 const entries3 = await Reader.findAll({
     where: {
         firstname: {
             [Operator.in]: [`Ivan`, `Jon`]
         }
     },
     raw: true,
 });
 console.log(entries3);



})();
