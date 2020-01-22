'use strict';

const {Router} = require(`express`);
const router = new Router();

const books = [
  {id: 1, title: `Salem's Lot`},
  {id: 2, title: `Carrie`},
  {id: 3, title: `Cujo`},
];

router.get(`/books`, (req, res) => res.send(books));

router.get(`/books/:id`, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const foundBook = books.find((book) => book.id === id);

  if (!foundBook) {
    return res.status(404).send({});
  }

  return res.send(foundBook);
});

router.post(`/books`, (req, res) => {
  const {title} = req.body;

  if (!title) {
    return res.status(400).send({ok: false});
  }

  const id = books.length + 1;
  books.push({id, title});
  return res.send({ok: true, id});
});

module.exports = router;
