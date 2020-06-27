'use strict';

const bcrypt = require(`bcrypt`);
const {nanoid} = require(`nanoid`);

const saltRounds = 10;

class StoreService {
    constructor () {
        this._users = [];
    }

    async add(username, password) {
        const hash = await bcrypt.hash(password, saltRounds);
        const id = nanoid();
        this._users.push({ id, username, password: hash});
    }

    async findByEmail(email) {
        return this._users.find((user) => user.username === email);
    }

    async checkUser(user, password) {
        const match = await bcrypt.compare(password, user.password);
        return match;
    }
}

module.exports = new StoreService();
