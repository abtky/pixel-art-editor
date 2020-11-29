describe('Test for Test', () => {
  it('Testが動作するか確認です。', () => {
    const value = () => {
      return 1;
    };
    const expected = 1;
    expect(value()).toBe(expected);
  });
});
export {};
