'use strict';

const path = require(`path`);
const {createReadStream} = require(`fs`);

const FILE_PATH = path.resolve(__dirname, `example.txt`);
const READ_SIZE = 16000;

const readStream = createReadStream(FILE_PATH, {highWaterMark: READ_SIZE});

let totalSize = 0;

readStream.on(`readable`, () => {
    let chunk = readStream.read(READ_SIZE);
    while (null !== chunk) {
        console.log(`Прочитано ${chunk.length} байт.`);
        totalSize += chunk.length;
        chunk = readStream.read(READ_SIZE);
    }
});

readStream.once(`end`, () => {
    console.log(`Прочитано всего: ${totalSize}`);
});

readStream.once(`close`, () => {
    console.log(`Поток закрыт.`);
});



