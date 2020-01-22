'use strict';

const {LoginMessage} = require(`../constants`);

module.exports = (store) => (
    async (req, res, next) => {
        const { username, password } = req.body;
        const existsUser = store.findByEmail(username);

        if (!existsUser) {
            res.render(`login`, {
                errorsMessages: [LoginMessage.USER_NOT_EXISTS]
            });
            return;
        }

        if (! await store.checkUser(existsUser, password)) {
            res.render(`login`, {
                errorsMessages: [LoginMessage.WRONG_PASSWORD]
            });
            return;
        }

        req.session.isLogged = true;
        req.session.username = existsUser.username;

        next();
    }
);
