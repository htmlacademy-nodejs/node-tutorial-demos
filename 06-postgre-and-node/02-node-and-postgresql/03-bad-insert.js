'use strict';

const {Client} = require(`pg`);

(async () => {
  const connectionString = `postgres://academy:123456@localhost/phonebook`;

  const firstname = `Axl`;
  const lastname = `Rose`;
  const birthDate = `1962-02-06`;
  const email = `test@gr.local`;

  const insertQuery = `INSERT INTO peoples
  VALUES(DEFAULT, '${firstname}', '${lastname}', '${birthDate}', '${email}')`;

  const client = new Client(connectionString);
  await client.connect();
  await client.query(insertQuery);

  client.end();
})();
