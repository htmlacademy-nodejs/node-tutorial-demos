'use strict';

module.exports = (req, res, next) => {
    const { isLogged } = req.session;

    if (!isLogged) {
        return res.redirect(`/login`);
    }

    next();
}
