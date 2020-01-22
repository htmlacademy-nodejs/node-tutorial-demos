'use strict';

const {RegisterMessage} = require(`../constants`);

module.exports = (store) => (
    async (req, res, next) => {
        const { username } = req.body
        if (store.findByEmail(username)) {
            res.render(`register`, {errorsMessages: [RegisterMessage.USER_ALREADY_REGISTER]});
            return;
        }

        next();
    }
)
