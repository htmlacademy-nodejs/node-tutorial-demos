'use strict';

const WebSocket = require(`ws`);

const PORT = 8080;
const {Server} = WebSocket;
const server = new Server({ port: PORT });

server.on(`connection`, (ws, req) => {
    const {remoteAddress} = req.socket;
    ws.send(`Привет, странник. Твой ip: ${remoteAddress}`);
});
