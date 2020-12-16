const socketIO = require('socket.io');
const Game = require('./models/Game');
const Player = require('./models/Player');
const PlayerList = require('./models/PlayerList');
const ServerApi = require('./ServerApi');

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
        this.updateUserList();
      });
      socket.on(ServerApi.game.fillGrid, ({ gridIndex }) => {
        const player = this.playerList.findById(socket.id);
        const grid = this.game.setColor(gridIndex, player.color);
        this.broadCast(ServerApi.game.fillGrid, grid);
      });
      socket.on(ServerApi.player.create, (params) => {
        const user = new Player(socket.id, params.name);
        const newPlayer = this.playerList.addUser(user);
        socket.emit(ServerApi.player.create, {
          you: newPlayer,
        });
        this.updateUserList();
      });
      socket.on(ServerApi.player.update, (props) => {
        const player = this.playerList.findById(socket.id);
        const newData = { ...player, ...props };
        this.playerList.updatePlayer(newData);
        this.updateUserList();
      });
      socket.on(ServerApi.game.info, () => {
        socket.emit(ServerApi.game.info, this.game.getInfo());
      });
    });
  }

  updateUserList() {
    this.broadCast(ServerApi.player.update, {
      players: this.playerList.players,
    });
  }

  broadCast(key, value) {
    this.io.emit(key, value);
  }
}
module.exports = SocketServer;
