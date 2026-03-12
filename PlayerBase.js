class PlayerBase {
  constructor(x, y, speed) {
    let size = 60;
    this.packageJumpStrength = 18;
    this.baseJumpStrength = 8.5;
    this.jumpStrength = this.baseJumpStrength;

    this.speed = speed;

    let carryonLipHeight = 20;

    this.mainBody = new Sprite(x, y, size, size * 1.2, DYN);
    this.mainBody.color = "orange";
    this.mainBody.rotationLock = true;
    this.mainBody.bounciness = 0;
    this.mainBody.friction = 0;
    this.mainBody.allowSleeping = false;
    this.mainBody.debug = true;

    this.mainBody.layer = 1;
    // this.mainBody.mass = 10;

    this.mainBody.spriteSheet = kiwiSpriteSheet;
    this.mainBody.anis.w = 1409;
    this.mainBody.anis.h = 967;
    this.mainBody.addAnis({
      idle: { row: 0, frames: 1 },
      walk: { row: 0, frames: 5 },
      jumpImpulse: { col: 0, frames: 1, frameDelay: Infinity },
    });
    this.mainBody.anis.scale = 0.11;
    this.mainBody.anis.offset.x = 250;
    this.mainBody.anis.offset.y = -80;
    this.mainBody.changeAni("idle");

    // this.mainBody.mass = 10;

    this.carryon = new Sprite(
      x,
      y - this.mainBody.hh - size * 0.1,
      size,
      size * 0.2,
      DYN,
    );
    this.carryon.layer = 1;
    this.carryon.addCollider(
      this.carryon.hw - 3,
      -carryonLipHeight / 2,
      6,
      carryonLipHeight,
    );
    this.carryon.addCollider(
      -this.carryon.hw + 3,
      -carryonLipHeight / 2,
      6,
      carryonLipHeight,
    );
    this.carryon.rotationLock = true;
    this.carryon.color = "Maroon";
    // this.carryon.stroke = "Maroon";
    // this.carryon.friction = 0;
    // this.carryon.mass = 10;

    // this.wheeljoiner = new GlueJoint(this.mainBody, this.carryon);
    // this.wheeljoiner.maxPower = 10000;
    this.wheeljoiner = new WheelJoint(this.mainBody, this.carryon);
    this.wheeljoiner.damping = 1;
    // this.wheeljoiner.enableMotor = true;
    // this.wheeljoiner.maxPower = 0;

    this.wheeljoiner.springiness = 0.000000000000000000000000000000001;
    this.wheeljoiner.visible = false;

    this.floorSensor = new Sprite(
      x,
      y + this.mainBody.hh,
      size * 0.8,
      size * 0.25,
    );
    this.floorSensor.removeColliders();
    this.floorSensor.visible = false;
    this.floorSensor.mass = 0;
    this.floorSensor.debug = false;

    this.floorJoiner = new GlueJoint(this.mainBody, this.floorSensor);
    this.floorJoiner.visible = false;
  }

  updatePlayer() {
    if (currPackage != null) {
      this.jumpStrength = this.packageJumpStrength;
    } else {
      this.jumpStrength = this.baseJumpStrength;
    }

    this.updateInput();

    // if (kb.pressing("w") || kb.pressing("space")) {
    //   if (this.floorSensor.overlapping(bouncePad)) {
    //     this.mainBody.vel.y = -30;
    //   }
    // }

    // this.carryon.vel.x = 0;
    this.carryon.pos.x = this.mainBody.pos.x;
  }

  updateInput() {
    const dx =
      (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) -
      (keyIsDown(LEFT_ARROW) || keyIsDown(65));

    if (this.floorSensor.overlapping(floorTile)) {
      if (kb.presses("w") || kb.presses("space")) {
        this.mainBody.vel.y = -this.jumpStrength;
      }
    }

    // if (this.mainBody.vel.y < 0) {
    //   this.mainBody.changeAni("idle");
    // }
    // if (dx != 0) {
    // } else {
    // }

    if (dx < 0) {
      this.mainBody.scale.x = -1;
      this.mainBody.changeAni("walk");
    } else if (dx > 0) {
      this.mainBody.scale.x = 1;
      this.mainBody.changeAni("walk");
    } else {
      this.mainBody.changeAni("idle");
    }

    if (this.mainBody.vel.y < -2) {
      this.mainBody.changeAni("jumpImpulse");
    }

    // this.mainBody.scale.x = ;
    this.mainBody.vel.x = dx * this.speed;
    this.mainBody.pos.x = constrain(
      this.mainBody.pos.x,
      0,
      currentLevel?.w ?? 9000,
    );

    // if (kb.pressing("q")) {
    //   // gluey.speed = 1;
    //   // shoulder.rotate(-30);
    //   // shoulder.rotation = -30;
    //   shoulder.rotateTowards(-30);
    //   console.log("hello");
    // } else if (kb.pressing("e")) {
    //   shoulder.rotateTowards(30);
    //   // shoulder.rotation = 30;
    // } else {
    //   shoulder.rotateTowards(0, 0.5);
    //   // shoulder.rotation = 0;
    //   // shoulder.rotate(0);
    //   // gluey.speed = 0;
    // }

    // if (kb.pressing("r")) {
    //   console.log(shoulder.rotation);
    // }
  }
}
