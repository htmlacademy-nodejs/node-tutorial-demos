'use strict';

const express = require(`express`);
const privateRoute = require(`../middleware/private-route`);
const store = require(`../store`);
const newUserSchema = require(`../schemas/new-user`);
const userSchema = require(`../schemas/user`);
const schemaValidator = require(`../middleware/schema-validator`);
const alreadyRegister = require(`../middleware/already-register`);
const authenticate = require(`../middleware/authenticate`);
const {Template} = require(`../constants`);

const appRouter = new express.Router();

// Защищённый маршрут. Доступен только после авторизации
appRouter.get(`/`, privateRoute, async (req, res) => {
    const { username } = req.session;
    res.render(`private`, { username });
});

// Регистрация
appRouter.get(`/register`, async (req, res) => {
    res.render(`register`);
});

// Обработка регистрационной формы
appRouter.post(`/register`, [
        schemaValidator(newUserSchema, Template.REGISTER_PAGE),
        alreadyRegister(store)
    ],
    async (req, res) => {
        const { username, password } = req.body;
        await store.add(username, password);
        res.redirect(`/login`);
    }
);

// Вход на сайт
appRouter.get(`/login`, async (req, res) => {
    res.render(`login`);
});

// Обработка формы «Вход»
appRouter.post(`/login`, [
        schemaValidator(userSchema, Template.LOGIN_PAGE),
        authenticate(store)
    ],
    async (req, res) => {
        res.redirect(`/`);
    }
);

// Выход
appRouter.get(`/logout`, async (req, res) => {
    req.session.destroy(() =>{
        res.redirect(`/login`);
    });
});

module.exports = appRouter;
