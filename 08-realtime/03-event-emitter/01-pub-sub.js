'use strict';

class PubSub {
    constructor () {
        this._listeners = {};
    }

    addListener(event, fn) {
        if (! this._listeners[event]) {
            this._listeners[event] = [];
        }

        this._listeners[event].push(fn)
    }

    removeListener(event, fn) {
        if (! this._listeners[event]) {
            return;
        }

        this._listeners[event] = this._listeners[event]
            .filter((listener) => listener === fn);
    }

    emit(event, data) {
        if (! this._listeners[event]) {
            return;
        }

        this._listeners[event]
            .forEach((listener) => listener(data));
    }
}

module.exports = PubSub;
