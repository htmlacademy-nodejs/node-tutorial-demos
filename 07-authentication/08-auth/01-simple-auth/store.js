'use strict';

const bcrypt = require(`bcrypt`);
const saltRounds = 10;

class Store {
    constructor () {
        this._users = [];
    }

    async add(username, password) {
        const hash = await bcrypt.hash(password, saltRounds);
        this._users.push({ username, password: hash});
    }

    findByEmail(email) {
        return this._users.find((user) => user.username === email);
    }

    async checkUser(user, password) {
        const match = await bcrypt.compare(password, user.password);
        return match;
    }
}

module.exports = new Store();
