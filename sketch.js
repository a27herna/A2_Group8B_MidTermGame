let mainBody;
let gluey;
let shoulder;

function setup() {
  createCanvas(400, 400);

  // ALWAYS ESTABLISH WORLD GRAVITY
  world.gravity.y = 1;

  const floorThickness = 10;

  let player1 = new Sprite(width / 2, 0, 30);
  player1.color = "orange";

  let floor = new Sprite(
    width / 2,
    height - floorThickness / 2,
    width,
    floorThickness,
    KIN,
  );
  4;

  mainBody = new Sprite(width / 2, height / 2, 40, 40);

  shoulder = new Sprite(width / 2, height / 2 - mainBody.hh - 15, 40, 10);

  gluey = new WheelJoint(mainBody, shoulder);
  gluey.damping = 1;
  gluey.springiness = 0.1;
  // gluey.range = 100;
}

function draw() {
  background(220);

  if (kb.pressing("q")) {
    // gluey.speed = 1;
    // shoulder.rotate(-30);
    // shoulder.rotation = -30;
    shoulder.rotateTowards(-30);
    console.log("hello");
  } else if (kb.pressing("e")) {
    shoulder.rotateTowards(30);
    // shoulder.rotation = 30;
  } else {
    shoulder.rotateTowards(0, 0.5);
    // shoulder.rotation = 0;
    // shoulder.rotate(0);
    // gluey.speed = 0;
  }

  if (kb.pressing("r")) {
    console.log(shoulder.rotation);
  }
  if (kb.pressing("p")) {
    player1 = new Sprite(width / 2, 0, 30);
  }

  // console.log(shoulder.rotation);
}
