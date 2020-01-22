'use strict';

const EventEmitter = require(`events`);

class SimpleEmitter extends EventEmitter {
    start(fn) {
        console.log(`Вызов метода «start»…`);
        this.emit(`firstEvent`);
        fn();
        fn()
        this.emit(`secondEvent`);
        console.log(`Завершение метода «start»…`);
    }
}

const mySimpleEmitter = new SimpleEmitter();
mySimpleEmitter.on(`firstEvent`, () => console.log(`firstEvent`));
mySimpleEmitter.on(`secondEvent`, () => console.log(`secondEvent`));

mySimpleEmitter.start(() => console.log(`Поехали!`));
