'use strict';

const {Router} = require(`express`);
const jwt = require(`jsonwebtoken`);
const HttpStatus = require(`http-status-codes`);
const storeService = require(`../services/store-service`);
const refreshTokenService = require(`../services/refresh-token-service`);
const authenticate = require(`../middlewares/authenticate`);
const authenticateJwt = require(`../middlewares/authenticate-jwt`);
const {makeTokens} = require(`../jwt-helper`);
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = require(`../constants`);

const userRouter = new Router();

userRouter.post(`/login`, authenticate(storeService), async (req, res) => {
    const {id} = res.locals.user;
    const {accessToken, refreshToken}  = makeTokens({id});

    await refreshTokenService.add(refreshToken);
    res.json({accessToken, refreshToken});
});


userRouter.post(`/refresh`, async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(HttpStatus.BAD_REQUEST);
    };

    const existToken = await refreshTokenService.find(token);

    if (!existToken) {
        return res.sendStatus(HttpStatus.NOT_FOUND);
    }

    jwt.verify(token, JWT_REFRESH_SECRET, async (err, userData) => {
        if (err) {
            return res.sendStatus(HttpStatus.FORBIDDEN);
        }

        const {id} = userData;
        const {accessToken, refreshToken}  = makeTokens({id});

        await refreshTokenService.drop(existToken);
        await refreshTokenService.add(refreshToken);

        res.json({accessToken, refreshToken});
    });
});

userRouter.delete(`/logout`, authenticateJwt, (req, res) => {
    const {token} = req.body;
    refreshTokenService.drop(token);
    res.sendStatus(HttpStatus.NO_CONTENT);
})

module.exports = userRouter;
