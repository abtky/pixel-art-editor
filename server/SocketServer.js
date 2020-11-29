const socketIO = require("socket.io");

class SocketServer {
  constructor(server) {
    this.io = socketIO(server);
  }

  init() {
    console.log("SocketServer.init");
    this.io.on("connection", (socket) => {
      console.log("socket connection");
      socket.on("connection", (message) => {
        console.log(message);
      });
      socket.on("disconnect", () => console.log("Client disconnected"));
    });
  }
}
module.exports = SocketServer;
