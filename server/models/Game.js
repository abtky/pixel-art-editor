const Grid = require('./Grid');

class Game {
  static get NUM_COLS() {
    return 16;
  }

  static get NUM_ROWS() {
    return 16;
  }

  constructor() {
    const numGrigs = Game.NUM_COLS * Game.NUM_ROWS;
    this.grids = new Array(numGrigs).fill(null).map((v, i) => new Grid(i));
  }

  getInfo() {
    const params = {
      size: {
        cols: Game.NUM_COLS,
        rows: Game.NUM_ROWS,
      },
      grids: this.grids,
    };
    return params;
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
