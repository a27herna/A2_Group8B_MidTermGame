class PlayerBase {
  constructor(x, y, speed) {
    // What are the basic attributes between players?
    // x,y,

    this.main = new Sprite(x, y, 40, 40, DYN);
    this.carryon = new Sprite(x, y, 40, 40, DYN);
  }
}
