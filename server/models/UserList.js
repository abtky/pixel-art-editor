class UserList {
  constructor() {
    this.users = [];
  }

  removeUser(targetUser) {
    this.users = this.users.filter((user) => {
      return targetUser.id !== user.id;
    });
    return this.users;
  }

  addUser(newUser) {
    const sameUser = this.users.find((user) => {
      return newUser.id === user.id;
    });
    if (sameUser) {
      return this.updateUser(newUser);
    }
    this.users.push(newUser);
    return this.users;
  }

  /**
   * @param {User} targetUser
   */
  updateUser(targetUser) {
    this.users = this.users.map((user) => {
      // targetUserとuserのIDが一致した場合はユーザー情報をtargetUserの値で更新する。
      return user.id === targetUser.id ? targetUser : user;
    });
    return this.users;
  }
}
module.exports = UserList;
