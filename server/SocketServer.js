const socketIO = require('socket.io');
const Game = require('./models/Game');
const User = require('./models/User');
const UserList = require('./models/UserList');

class SocketServer {
  constructor(server) {
    this.io = socketIO(server);
    this.game = new Game();
    this.userList = new UserList();
  }

  init() {
    this.io.on('connection', (socket) => {
      socket.on('disconnect', () => {
        this.userList.removeUserById(socket.id);
      });
      socket.on('color', (message) => {
        const grid = this.game.setColorByJson(message);
        this.broadCast('color', grid.toString());
      });
      socket.on('join', (message) => {
        const params = JSON.parse(message);
        const user = new User(socket.id, params.name);
        const newPlayer = this.userList.addUser(user);
        console.log('socket.on join', { newPlayer });
        socket.emit('joined', { newPlayer, players: this.userList.users });
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
