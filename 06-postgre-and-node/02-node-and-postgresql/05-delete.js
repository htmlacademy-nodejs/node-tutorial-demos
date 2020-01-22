'use strict';

const {Client} = require(`pg`);

(async () => {
  const connectionString = `postgres://academy:123456@localhost/phonebook`;
  const client = new Client(connectionString);

  await client.connect();

  const deleteQuery = `DELETE FROM peoples WHERE peoples.email = $1`;
  const resultDelete = await client.query(deleteQuery, [`test@gr.local`]);
  console.log(`Удалено записей: ${resultDelete.rowCount}`);
  client.end();
})();
