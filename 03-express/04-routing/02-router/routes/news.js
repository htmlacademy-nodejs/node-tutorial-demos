'use strict';

const {Router} = require(`express`);
const newsRouter = new Router();

newsRouter.get(`/`, (req, res) => res.send(`/news`));
newsRouter.get(`/general`, (req, res) => res.send(`/news/general`));
newsRouter.get(`/:id`, (req, res) => res.send(`/news/:id ${req.params.id}`));

module.exports = newsRouter;
