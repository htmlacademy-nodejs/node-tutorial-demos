'use strict';

const express = require(`express`);
const expressSession = require(`express-session`);

const SECRET_SESSION = `J@2(D#8e33d)`;
const PORT = 4000;

const app = express();
app.use(expressSession({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    name: `session_id`
}));

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
