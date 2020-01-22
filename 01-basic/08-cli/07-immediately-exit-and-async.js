'use strict';

const TIMEOUT = 0;

console.log(`Этот текст будет выведен...`);
setTimeout(
    () => console.log(`А этот никогда`),
    TIMEOUT
);

process.exit();
