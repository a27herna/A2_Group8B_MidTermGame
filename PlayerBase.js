class PlayerBase {
  constructor(x, y, speed) {
    // What are the basic attributes between players?
    // x,y,
    this.size = 40;
    this.speed = speed;

    this.main = new Sprite(x, y, this.size, this.size, DYN);
    this.main.color = "orange";
    this.carryon = new Sprite(x, y, this.size, this.size, DYN);

    this.joiner = new WheelJoint(this.main, this.carryon);
    this.joiner.damping = 1;
    this.joiner.springiness = 0.1;
  }

  updateInput() {
    const dx = (kb.pressing("a") - kb.pressing("d")) ** 0;

    const dy = (kb.pressing("w") - kb.pressing("s")) ** 0;

    this.main.vel.x += dx * this.speed;
    this.main.vel.y += dy * this.speed;
  }
}
