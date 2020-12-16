class PlayerList {
  constructor() {
    this.players = [];
  }

  /**
   *
   * @param {string} targetPlayerId
   */
  removePlayerById(targetPlayerId) {
    this.players = this.players.filter((player) => {
      return targetPlayerId !== player.id;
    });
    return this.players;
  }

  /**
   *
   * @param {Player} targetPlayer
   */
  removePlayer(targetPlayer) {
    this.players = this.players.filter((player) => {
      return targetPlayer.id !== player.id;
    });
    return this.players;
  }

  /**
   * @param {Player} newPlayer
   */
  addUser(newPlayer) {
    const samePlayer = this.players.find((player) => {
      return newPlayer.id === player.id;
    });
    if (samePlayer) {
      return this.updatePlayer(newPlayer);
    }
    this.players.push(newPlayer);
    return this.findById(newPlayer.id);
  }

  /**
   * @param {Player} targetPlayer
   */
  updatePlayer(targetPlayer) {
    this.players = this.players.map((user) => {
      // targetUserとuserのIDが一致した場合はユーザー情報をtargetUserの値で更新する。
      return user.id === targetPlayer.id ? targetPlayer : user;
    });
    return this.findById(targetPlayer.id);
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.players.find((user) => id === user.id);
  }
}
module.exports = PlayerList;
