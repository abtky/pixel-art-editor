import UserList from '../server/models/UserList';
import User from '../server/models/User';

describe('UserList', () => {
  const userList = new UserList();
  const user = new User(0, 'newuser');
  userList.addUser(user);
  describe('UserList#addUser', () => {
    it('addUserを実行すると配列に新たなユーザー情報が追加される', () => {
      expect(userList.addUser(user)).toEqual([user]);
    });
  });
  describe('UserList#updateUser', () => {
    it('updateUserを実行すると同一IDをもつユーザーの情報が更新される', () => {
      const newName = 'updated';
      user.setName(newName);
      const result = userList.updateUser(user)[0];
      expect(result.name).toEqual(newName);
    });
  });
  describe('UserList#removeUser', () => {
    expect(userList.removeUser(user)).toEqual([]);
  });
});
