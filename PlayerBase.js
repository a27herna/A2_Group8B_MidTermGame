class PlayerBase {
  constructor(x, y, speed) {
    // What are the basic attributes between players?
    // x,y,
    this.size = 60;
    this.speed = speed;

    this.carryonLipHeight = 20;

    this.mainBody = new Sprite(x, y, this.size, this.size, DYN);
    this.mainBody.color = "orange";
    this.mainBody.rotationLock = true;
    this.mainBody.bounciness = 0;
    this.mainBody.friction = 0;

    this.carryon = new Sprite(
      x,
      y - this.mainBody.hh,
      this.size,
      this.size * 0.2,
      DYN,
    );
    this.carryon.addCollider(
      this.carryon.hw - 3,
      -this.carryonLipHeight / 2,
      6,
      this.carryonLipHeight,
    );
    this.carryon.addCollider(
      -this.carryon.hw + 3,
      -this.carryonLipHeight / 2,
      6,
      this.carryonLipHeight,
    );
    this.carryon.rotationLock = true;

    this.wheeljoiner = new WheelJoint(this.mainBody, this.carryon);
    this.wheeljoiner.damping = 1;
    this.wheeljoiner.springiness = 0.00000000001;
    this.wheeljoiner.visible = false;

    this.floorSensor = new Sprite(
      x,
      y + this.mainBody.hh,
      this.size * 0.5,
      this.size * 0.5,
    );
    this.floorSensor.removeColliders();
    this.floorSensor.visible = true;
    this.floorSensor.mass = 0;
    this.floorSensor.debug = true;

    this.floorJoiner = new GlueJoint(this.mainBody, this.floorSensor);
    this.floorJoiner.visible = false;
  }

  updatePlayer() {
    this.updateInput();

    if (kb.pressing("w") || kb.pressing("space")) {
      if (this.floorSensor.overlapping(bouncePad)) {
        this.mainBody.vel.y = -30;
      }
    }
  }

  updateInput() {
    const dx =
      (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) -
      (keyIsDown(LEFT_ARROW) || keyIsDown(65));

    if (this.floorSensor.overlapping(floor)) {
      if (kb.pressing("w") || kb.pressing("space")) {
        this.mainBody.vel.y = -10;
      }
    }

    this.mainBody.vel.x = dx * this.speed;
    // this.mainBody.vel.y = dy * this.speed;
  }
}
