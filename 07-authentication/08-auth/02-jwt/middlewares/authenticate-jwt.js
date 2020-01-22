'use strict';

const jwt = require(`jsonwebtoken`);
const HttpStatus = require(`http-status-codes`);

const {JWT_ACCESS_SECRET} = require(`../constants`);

module.exports = (req, res, next) => {
    const authorization = req.headers[`authorization`]

    if (! authorization) {
        return res.sendStatus(HttpStatus.UNAUTHORIZED);
    }

    const [, token] = authorization.split(` `);

    if (!token) {
        return res.sendStatus(HttpStatus.UNAUTHORIZED);
    }

    jwt.verify(token, JWT_ACCESS_SECRET, (err, userData) => {

        if (err) {
            return res.sendStatus(HttpStatus.FORBIDDEN);
        }

        // Что-то можно делать с данными из `userData`.
        // Например сохранить res.locals для дальнейшего использования
        next()
    })
}
