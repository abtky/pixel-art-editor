import Game from '../server/models/Game';
describe('Game', () => {
  const game = new Game();
  const result = game.toString();

  it('Game#toString ゲーム情報をJSON文字列で取得', () => {
    expect(() => JSON.parse(result)).not.toThrow();
  });
  it('Game#toString ゲーム情報は"cols", "rows", "grids"のキーを持つ', () => {
    const keys = ['cols', 'rows', 'grids'];
    const parsedResult = JSON.parse(result);
    expect(Object.keys(parsedResult)).toEqual(keys);
  });
  it('Game#toString "grids"は「col」と「rows」を掛けた長さの配列', () => {
    const parsedResult = JSON.parse(result);
    const { grids, cols, rows } = parsedResult;
    expect(grids.length).toBe(cols * rows);
  });
});
