const Grid = require('./Grid');

class Game {
  static get NUM_COLS() {
    return 32;
  }

  static get NUM_ROWS() {
    return 32;
  }

  constructor() {
    const numGrigs = Game.NUM_COLS * Game.NUM_ROWS;
    this.grids = new Array(numGrigs).fill(null).map((v, i) => new Grid(i));
  }

  toString() {
    const params = {
      cols: Game.NUM_COLS,
      rows: Game.NUM_ROWS,
      grids: this.grids,
    };
    return JSON.stringify(params);
  }

  setColorByJson(json) {
    const options = JSON.parse(json);
    return this.setColor(options.index, options.color);
  }

  setColor(index, color) {
    const grid = this.grids[index];
    grid.color = color;
    return grid;
  }
}
module.exports = Game;
