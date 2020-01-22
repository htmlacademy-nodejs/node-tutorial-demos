'use strict';

const {Client} = require(`pg`);

const connectionString = `postgres://academy:123456@localhost/phonebook`;
const client = new Client(connectionString);

client.connect((err) => {
  if (err) {
    throw new Error(`Ошибка установки соединения: ${err.message}`);
  }

  console.log(`Соединение с PostgreSQL установлено!`);
});

const sql = `SELECT * FROM peoples`;

client.query(sql, (err, res) => {

  if (err) {
    throw new Error(`Ошибка при выполнении запроса: ${err.message}`);
  }

  console.table(res.rows);
  client.end();
});

