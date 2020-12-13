class UserList {
  constructor() {
    this.users = [];
  }

  removeUserById(targetUserId) {
    this.users = this.users.filter((user) => {
      return targetUserId !== user.id;
    });
    return this.users;
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
    return this.findById(newUser.id);
  }

  /**
   * @param {User} targetUser
   */
  updateUser(targetUser) {
    this.users = this.users.map((user) => {
      // targetUserとuserのIDが一致した場合はユーザー情報をtargetUserの値で更新する。
      return user.id === targetUser.id ? targetUser : user;
    });
    return this.findById(targetUser.id);
  }

  findById(id) {
    return this.users.find((user) => id === user.id);
  }
}
module.exports = UserList;
