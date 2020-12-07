import Game from '../server/models/Game';
describe('Game', () => {
  const game = new Game();
  const result = game.toString();

  it('Game#toString it will be get game information by JSON strings', () => {
    expect(typeof result).toBe('string'); // result type is 'string'
    expect(() => JSON.parse(result)).not.toThrow(); // and it is valid json.
  });
  it('Game#toString that has keys "cols", "rows", "grids".', () => {
    const keys = ['cols', 'rows', 'grids'];
    const parsedResult = JSON.parse(result);
    expect(Object.keys(parsedResult)).toEqual(keys);
  });
});
