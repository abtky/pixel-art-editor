class User {
  constructor(id, name = 'unknown') {
    this.id = id;
    this.name = name;
    this.color = 'white';
  }

  toString() {
    return JSON.stringify(this);
  }
}
module.exports = User;
