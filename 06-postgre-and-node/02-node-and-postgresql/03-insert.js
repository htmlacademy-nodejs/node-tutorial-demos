'use strict';

const {Client} = require(`pg`);

(async () => {
  const connectionString = `postgres://academy:123456@localhost/phonebook`;
  const client = new Client(connectionString);

  await client.connect();

  const insertQuery = `INSERT INTO peoples VALUES (DEFAULT, $1, $2, $3, $4) RETURNING id`;
  const resultInsertUser = await client.query(insertQuery, [`Axl`, `Rose`, `1962-02-06`, `test@gr.local`]);
  const id = parseInt(resultInsertUser.rows[0].id, 10);

  const selectLastRecord = `SELECT * FROM peoples WHERE peoples.id = $1`;
  const userRecord = await client.query(selectLastRecord, [id]);

  console.table(userRecord.rows);
  client.end();
})();
