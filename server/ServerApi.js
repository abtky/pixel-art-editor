const ServerApi = {
  player: {
    create: 'Player:create',
    update: 'Player:update',
    delete: 'Player:delete',
  },
  game: {
    readData: 'Game:read',
    fillGrid: 'Game:fillGrid',
  },
};
module.exports = ServerApi;
