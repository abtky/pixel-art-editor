import User from '../server/models/User';
describe('User', () => {
  it('User.toValidName 文字列をユーザー名として有効な名前に変換', () => {
    it('アルファベットと数字以外の文字が削除されていること', () => {
      const input = 'abce%$32@19vb';
      const expected = 'abce3219vb';
      expect(User.toValidName(input)).toBe(expected);
    });
  });
});
