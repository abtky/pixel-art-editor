import User from '../server/models/User';
describe('User', () => {
  describe('User.toValidName 文字列をユーザー名として有効な名前に変換', () => {
    it('アルファベットと数字以外の文字が削除されていること', () => {
      const input = 'abce%$32@19vb';
      const expected = 'abce3219vb';
      expect(User.toValidName(input)).toBe(expected);
    });
    it('User.MAX_NAME_LENGTHで定義された文字数以上は切り捨てられること', () => {
      const input = 'abce%$32@19vb*&26opivb**^a1';
      const expected = 'abce3219vb26';
      expect(User.toValidName(input)).toBe(expected);
    });
    it('もし不正文字削除後の文字数が0の場合は「unknown」を返すこと', () => {
      const input = '%$字削@*&**^あい';
      const expected = 'unknown';
      expect(User.toValidName(input)).toBe(expected);
    });
  });
});
