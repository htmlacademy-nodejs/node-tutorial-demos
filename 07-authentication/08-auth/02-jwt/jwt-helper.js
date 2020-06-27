'use strict';

const jwt = require(`jsonwebtoken`);
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = require(`./constants`);

module.exports.makeTokens = (tokenData) => {
    const accessToken = jwt.sign(tokenData, JWT_ACCESS_SECRET,  { expiresIn: `50s`});
    const refreshToken = jwt.sign(tokenData, JWT_REFRESH_SECRET);
    return {accessToken, refreshToken};
};
