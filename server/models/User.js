class User {
  static get MAX_NAME_LENGTH() {
    return 12;
  }

  static toValidName(value) {
    const letters = value.split(''); // 文字列を配列に分割
    const pattern = /[0-9a-z]/;
    const filtered = letters.filter((letter) => {
      return letter.match(pattern);
    });
    const result = filtered.slice(0, User.MAX_NAME_LENGTH).join('');
    return result || 'unknown';
  }

  constructor(id, name = 'unknown') {
    this.id = id;
    this.setName(name);
    this.color = 'white';
  }

  setName(value) {
    this.name = User.toValidName(value);
  }

  toString() {
    return JSON.stringify(this);
  }
}
module.exports = User;
