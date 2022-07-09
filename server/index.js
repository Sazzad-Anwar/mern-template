const { createServer } = require("http");
const app = require("./app.js");
const server = createServer(app);
const { Server } = require("socket.io");
const socketHandler = require("./socket/index.js");
const io = new Server(server);
let port = process.env.PORT;

//Making a socket instance
const socketIoInstance = (socket) => {
  socketHandler(io, socket);
};

io.on("connection", socketIoInstance);

// Use the below code for not to expose the node application to the outside world
// server.listen(port, 'localhost', () => console.log(`App is listening on port ${port}!`));
server.listen(port, () =>
  console.log(
    `App is listening on http://localhost:${port} in ${process.env.NODE_ENV} mode`
  )
);

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
