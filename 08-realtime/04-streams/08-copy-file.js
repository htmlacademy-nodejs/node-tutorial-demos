'use strict';

const fs = require(`fs`);

const READ_SIZE = 16384;

const sourcePath = process.argv[2];
const destPath = process.argv[3];

const copyFile = async () => {
    const sourceFile = fs.createReadStream(sourcePath);
    const destFile = fs.createWriteStream(destPath);

    destFile.once(`finish`, () => console.log(`Файл скопирован…`));

    sourceFile.on(`readable`, async () => {
        let chunk = sourceFile.read(READ_SIZE);
        while (chunk !== null) {
            if (!destFile.write(chunk)) {
                await new Promise((resolve) => destFile.once(`drain`, resolve));
            }

            chunk = sourceFile.read(READ_SIZE);
        }

        destFile.end();
    });
}

copyFile();
