'use strict';

class RefreshTokenService {
    constructor () {
        this._refreshTokens = [];
    }

    async add(token) {
        this._refreshTokens.push(token);
    }

    async find(token) {
        return this._refreshTokens.find( (refreshToken) => refreshToken === token);
    }

    async drop(token) {
        this._refreshTokens = this._refreshTokens
            .filter((refreshToken) => token !== refreshToken);
    }
}

module.exports = new RefreshTokenService();
