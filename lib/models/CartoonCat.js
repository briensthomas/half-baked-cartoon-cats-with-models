const pool = require('../utils/pool');

module.exports = class CartoonCat {
  id;
  name;
  type;
  url;
  year;
  lives;
  isSideKick;
  
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.isSideKick = row.isSideKick;
  }

  static async getAllCartoonCats() {
    const { rows } = await pool.query('SELECT * FROM cartoonCats;');
    return rows.map((row) => new CartoonCat(row));
  }

  static async getCartoonCatById(id) {
    const { rows } = await pool.query('SELECT * FROM cartoonCats WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new CartoonCat(rows[0]);
  }
};
