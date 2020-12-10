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
        console.log('Client disconnected');
        this.userList.removeUserById(socket.id);
      });
      socket.on('color', (message) => {
        console.log(socket.id);

        const grid = this.game.setColorByJson(message);
        this.broadCast('color', grid.toString());
      });
      socket.on('join', (message) => {
        const params = JSON.parse(message);
        const user = new User(socket.id, params.name);
        this.userList.addUser(user);
        socket.emit('joined', { players: this.userList.users });
      });
      //socket.emit('init', this.game.toString());
    });
  }

  broadCast(key, value) {
    this.io.emit(key, value);
  }
}
module.exports = SocketServer;
