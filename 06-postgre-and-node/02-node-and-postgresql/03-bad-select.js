'use strict';

const {Client} = require(`pg`);

(async () => {
  const connectionString = `postgres://academy:123456@localhost/phonebook`;
  // const email = `bon@pisem.local`;
  const email = `bon@pisem.local' OR 1='1`;
  const sql = `SELECT * FROM peoples WHERE peoples.email = '${email}'`;

  const client = new Client(connectionString);
  await client.connect();
  const {rows} = await client.query(sql);

  console.table(rows);

  client.end();
})();
