import PlayerList from '../server/models/PlayerList';
import User from '../server/models/Player';

describe('PlayerList', () => {
  const playerList = new PlayerList();
  const player = new User(0, 'newuser');
  playerList.addUser(player);
  describe('PlayerList#addUser', () => {
    it('addUserを実行すると配列に新たなユーザー情報が追加される', () => {
      playerList.addUser(player);
      expect(playerList.players).toEqual([player]);
    });
  });
  describe('PlayerList#updateUser', () => {
    it('updateUserを実行すると同一IDをもつユーザーの情報が更新される', () => {
      const newName = 'updated';
      player.setName(newName);
      const result = playerList.updatePlayer(player);
      expect(result.name).toEqual(newName);
    });
  });
  describe('PlayerList#removeUser', () => {
    playerList.removePlayer(player);
    expect(playerList.players).toEqual([]);
  });
});
