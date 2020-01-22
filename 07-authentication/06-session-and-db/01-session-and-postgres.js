'use strict';

const express = require(`express`);
const Sequelize = require(`sequelize`);
const session = require(`express-session`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);
const app = express();

const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    dialect: `postgres`,
    host: `localhost`,
});

const mySessionStore = new SequelizeStore({
    db: sequelize,
    expiration: 180000,
    checkExpirationInterval: 60000,
});


app.use(session({
    secret: `racoons`,
    store: mySessionStore,
    resave: false,
    proxy: true,
    saveUninitialized: false,
}));

const PORT = 4000;
app.listen(PORT);

app.get(`/`, (req, res) => {
    let {counter = 0} = req.session;
    counter++;

    const welcomeText = `Это ваш первый визит на наш сайт.`;
    const text = `Вы посетили наш сайт уже ${counter} раз`;

    const message = counter === 1 ? welcomeText : text;
    req.session.counter = counter;

    res.send(message);
});

(async () => {
    await sequelize.sync({ force: false });
})();






