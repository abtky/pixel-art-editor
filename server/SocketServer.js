const socketIO = require('socket.io');
const Game = require('./models/Game');

class SocketServer {
  constructor(server) {
    this.io = socketIO(server);
    this.game = new Game();
  }

  init() {
    this.io.on('connection', (socket) => {
      socket.on('disconnect', () => console.log('Client disconnected'));
      socket.on('color', (message) => {
        const grid = this.game.setColorByJson(message);
        this.broadCast('color', grid.toString());
      });
      socket.emit('init', this.game.toString());
    });
  }

  broadCast(key, value) {
    this.io.emit(key, value);
  }
}
module.exports = SocketServer;
