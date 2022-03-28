import { createServer } from 'http';
import app from './app.js';
const server = createServer(app);
import { Server } from "socket.io";
import socketHandler from "./socket/index.js";
const io = new Server(server);
let port = process.env.PORT;

//Making a socket instance
const socketIoInstance = socket => {
    socketHandler(io, socket)
}


io.on('connection', socketIoInstance);

server.listen(port, () => console.log(`App is listening on port ${port}!`));

process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        debug('HTTP server closed')
    })
})