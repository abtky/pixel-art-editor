import Game from '../server/models/Game';

describe('Game', () => {
  const game = new Game();
  const result = game.getInfo();

  it('Game#getInfo ゲーム情報は"size", "grids"のキーを持つ', () => {
    const keys = ['size', 'grids'];
    expect(Object.keys(result)).toEqual(keys);
  });
  it('Game#toString "grids"は「size.cols」と「size.rows」を掛けた長さの配列', () => {
    const { grids, size } = result;
    expect(grids.length).toBe(size.cols * size.rows);
  });
});
