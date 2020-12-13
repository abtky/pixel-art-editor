const socketIO = require('socket.io');
const Game = require('./models/Game');
const Player = require('./models/Player');
const PlayerList = require('./models/PlayerList');

class SocketServer {
  constructor(server) {
    this.io = socketIO(server);
    this.game = new Game();
    this.playerList = new PlayerList();
  }

  init() {
    this.io.on('connection', (socket) => {
      socket.on('disconnect', () => {
        this.playerList.removePlayerById(socket.id);
      });
      socket.on('color', (message) => {
        const grid = this.game.setColorByJson(message);
        this.broadCast('color', grid.toString());
      });
      socket.on('join', (message) => {
        const params = JSON.parse(message);
        const user = new Player(socket.id, params.name);
        const newPlayer = this.playerList.addUser(user);
        console.log('socket.on join', { newPlayer });
        socket.emit('joined', { newPlayer, players: this.playerList.players });
      });
      socket.on('request-game-data', () => {
        socket.emit('game-data', this.game.toString());
      });
    });
  }

  broadCast(key, value) {
    this.io.emit(key, value);
  }
}
module.exports = SocketServer;
