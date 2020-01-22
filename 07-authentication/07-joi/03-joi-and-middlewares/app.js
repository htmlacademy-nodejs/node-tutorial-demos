'use strict';

const express = require(`express`);
const bookValidatorMiddleware = require(`./book-validator-middleware`);
const bookSchema = require(`./book-schema`);

const app = express();
app.use(express.json());

const port = 3000;

app.post(`/book`, bookValidatorMiddleware(bookSchema), async (req, res) => {
    const { body } = req;
    res.json({
        message: `A new book created.`,
        data: body
    });
});

app.listen(port);
