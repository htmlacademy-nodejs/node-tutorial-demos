'use strict';

const {Client} = require(`pg`);
const express = require(`express`);

const app = express();
const port = 4000;

const connectionString = `postgres://academy:123456@localhost/library`;
const client = new Client(connectionString);

app.get(`/:bookId`, async (req, res) => {
    const {bookId} = req.params;
    const sql = `SELECT * FROM "Books" WHERE "Books".id = '${bookId}'`;
    console.log(sql);

    try {
        const { rows } = await client.query(sql);
        res.send(rows);
    } catch {
        res.send(`Not found`);
    }
});

(async () => {
    await client.connect();
    app.listen(port);
})();
