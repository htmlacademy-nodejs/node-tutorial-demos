'use strict';

const {Router} = require(`express`);
const authenticateJwt = require(`../middlewares/authenticate-jwt`);

const bookMocks = require(`../mocks/books`);

const booksRouter = new Router();

booksRouter.get(`/books`, authenticateJwt, (req, res) => {
    res.json(bookMocks);
});

module.exports = booksRouter;
