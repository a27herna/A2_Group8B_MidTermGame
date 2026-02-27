class PlayerBase {
  constructor(x, y, speed) {
    // What are the basic attributes between players?
    // x,y,
    this.size = 40;
    this.speed = speed;

    this.mainBody = new Sprite(x, y, this.size, this.size, DYN);
    this.mainBody.color = "orange";
    this.mainBody.rotationLock = true;
    this.mainBody.bounciness = 0.05;
    this.mainBody.friction = 0;

    this.carryon = new Sprite(
      x,
      y - this.mainBody.hh,
      this.size,
      this.size * 0.2,
      DYN,
    );
    this.carryon.addCollider(this.carryon.hw, -this.carryon.hh, 5, 10);
    this.carryon.addCollider(-this.carryon.hw, -this.carryon.hh, 5, 10);
    this.carryon.rotationLock = true;

    this.wheeljoiner = new WheelJoint(this.mainBody, this.carryon);
    this.wheeljoiner.damping = 1;
    this.wheeljoiner.springiness = 0.01;
    this.wheeljoiner.visible = false;

    this.floorSensor = new Sprite(
      x,
      y + this.mainBody.hh,
      this.size * 0.5,
      this.size * 0.2,
    );
    this.floorSensor.removeColliders();
    this.floorSensor.visible = true;
    this.floorSensor.mass = 0;

    this.floorJoiner = new GlueJoint(this.mainBody, this.floorSensor);
    this.floorJoiner.visible = false;
  }

  updatePlayer() {
    this.updateInput();
  }

  updateInput() {
    const dx =
      (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) -
      (keyIsDown(LEFT_ARROW) || keyIsDown(65));

    if (this.floorSensor.overlapping(floor)) {
      if (kb.presses("w") || kb.presses(" ")) {
        this.mainBody.vel.y = -5;
      }
    }

    this.mainBody.vel.x = dx * this.speed;
    // this.mainBody.vel.y = dy * this.speed;
  }
}
