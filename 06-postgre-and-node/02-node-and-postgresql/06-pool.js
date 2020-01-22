'use strict';

const {Pool} = require(`pg`);

const pool = new Pool({
  host: `localhost`,
  port: 5432,
  database: `phonebook`,
  user: `academy`,
  password: `123456`,
});

(async () => {
  const client = await pool.connect();
  const sql = `SELECT * FROM peoples`;
  const {rows} = await client.query(sql);
  client.release();

  console.table(rows);

  // При завершении работы приложения
  pool.end();
})();

