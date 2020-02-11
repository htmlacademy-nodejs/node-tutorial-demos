'use strict';

const {Router} = require(`express`);
const companyRouter = new Router();

companyRouter.get(`/`, (req, res) => res.send(`/company`));
companyRouter.get(`/contacts`, (req, res) => res.send(`/company/contacts`));
companyRouter.get(`/feedback`, (req, res) => res.send(`/company/feedback`));
companyRouter.get(`/news`, (req, res) => res.send(`/company/news`));

module.exports = companyRouter;
