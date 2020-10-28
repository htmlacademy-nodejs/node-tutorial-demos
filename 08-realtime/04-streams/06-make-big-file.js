'use strict';

const fs = require(`fs`);

const FILE_PATH = `./big-file.txt`;
const CYCLES = 1e9;

const buffer = Buffer.from(`Hello, world!`);

const makeBigFile = async () => {
    const writeStream = fs.createWriteStream(FILE_PATH, `utf8`);
    writeStream.on(`finish`, () => console.log(`Запись завершена`));

    for (let i = 0; i < CYCLES; i++) {
        if (!writeStream.write(buffer)) {
            await new Promise((resolve) => writeStream.once(`drain`, resolve));
        }
    }

    writeStream.end();

}

makeBigFile();
