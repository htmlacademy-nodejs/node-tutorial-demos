'use strict';

const {LoginMessage} = require(`../constants`);
const HttpStatus = require(`http-status-codes`);

module.exports = (store) => (
    async (req, res, next) => {
        const { username, password } = req.body;
        const existsUser = await store.findByEmail(username);

        if (!existsUser) {
            res.status(HttpStatus.FORBIDDEN)
                .json({ message: LoginMessage.USER_NOT_EXISTS});

            return;
        }

        if (! await store.checkUser(existsUser, password)) {
            res.status(HttpStatus.FORBIDDEN)
                .json({message: LoginMessage.WRONG_PASSWORD});

            return;
        }

        res.locals.user = existsUser;
        next();
    }
);
