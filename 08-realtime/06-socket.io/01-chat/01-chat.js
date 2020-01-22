'use strict';

const express = require(`express`);
const path = require(`path`);
const http = require(`http`);

const PORT = 4000;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get(`/`, async (req, res) => {
    res.sendFile(path.resolve(__dirname, `index.html`));
});

io.on(`connection`, (socket) => {
    const {address: ip} = socket.handshake;
    console.log(`Новое подключение: ${ip}`);

    socket.on(`message`, (clientMessage) => {
        socket.broadcast.emit(`message`, clientMessage);
    });

    socket.on(`disconnect`, () => {
        console.log(`Клиент отключён: ${ip}`);
    });

    socket.send(`[Server]: Добро пожаловать в чат.`);
});

server.listen(PORT, () => {
    console.log(`Ожидаю подключений на порт ${PORT}`)
});
