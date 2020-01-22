'use strict';

const WebSocket = require(`ws`);
const express = require(`express`);
const path = require(`path`);
const http = require(`http`);

const PORT = 4000;

const app = express();
const server = http.createServer(app);
const ws = new WebSocket.Server({ server });

app.get(`/`, async (req, res) => {
    res.sendFile(path.resolve(__dirname, `index.html`));
});

ws.on(`connection`, (socket, req) => {
    const {remoteAddress: ip} = req.socket;
    console.log(`Новое подключение: ${ip}`);

    socket.on(`message`, (clientMessage) => {
        console.log(`> ${clientMessage}`);
        ws.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client !== socket) {
                client.send(clientMessage);
            }
        })
    });

    socket.on(`close`, () => {
        console.log(`Клиент отключён: ${ip}`);
    });

    socket.send(`[Server]: Добро пожаловать в чат.`);
});

server.listen(PORT, () => {
    console.log(`Ожидаю подключений на порт ${PORT}`)
});
