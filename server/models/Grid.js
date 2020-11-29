class Grid {
  constructor(index, color = 'transparent') {
    this.index = index;
    this.color = color;
  }

  toString() {
    return JSON.stringify(this);
  }
}
module.exports = Grid;
