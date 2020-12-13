import UserList from '../server/models/UserList';
import User from '../server/models/User';

describe('UserList', () => {
  const userList = new UserList();
  const user = new User(0, 'newuser');
  userList.addUser(user);
  describe('UserList#addUser', () => {
    it('addUserを実行すると配列に新たなユーザー情報が追加される', () => {
      userList.addUser(user);
      expect(userList.users).toEqual([user]);
    });
  });
  describe('UserList#updateUser', () => {
    it('updateUserを実行すると同一IDをもつユーザーの情報が更新される', () => {
      const newName = 'updated';
      user.setName(newName);
      const result = userList.updateUser(user);
      expect(result.name).toEqual(newName);
    });
  });
  describe('UserList#removeUser', () => {
    userList.removeUser(user);
    expect(userList.users).toEqual([]);
  });
});
