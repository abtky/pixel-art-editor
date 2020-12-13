const socketIO = require('socket.io');
const Game = require('./models/Game');
const Player = require('./models/Player');
const PlayerList = require('./models/PlayerList');
const ServerApi = require('./ServerAPI');

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
      socket.on(ServerApi.game.fillGrid, ({ gridIndex }) => {
        const player = this.playerList.findById(socket.id);
        const grid = this.game.setColor(gridIndex, player.color);
        console.log({ player, grid });
        this.broadCast('color', grid.toString());
      });
      socket.on(ServerApi.player.create, (params) => {
        const user = new Player(socket.id, params.name);
        const newPlayer = this.playerList.addUser(user);
        socket.emit(ServerApi.player.create, {
          newPlayer,
          players: this.playerList.players,
        });
      });
      socket.on(ServerApi.player.update, (props) => {
        const player = this.playerList.findById(socket.id);
        const newData = { ...player, ...props };
        console.log({ props, newData });
        this.playerList.updatePlayer(newData);
        this.broadCast(ServerApi.player.update, {
          players: this.playerList.players,
        });
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
