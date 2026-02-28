let mainBody;
let gluey;
let shoulder;

let mainPlayer;

let currentLevel;

function setup() {
  // ALWAYS ESTABLISH WORLD GRAVITY
  world.gravity.y = 10;

  currentLevel = new Level([]);

  console.log(currentLevel.w + " | " + currentLevel.h);
  createCanvas(500, 500);

  mainPlayer = new PlayerBase(width / 2, height / 2, 2);
  // const floorThickness = 10;

  let bally = new Sprite(width / 2, 0, 30, 30);
  bally.color = "orange";
  bally.overlaps(mainPlayer.mainBody);

  // floor = new Sprite(
  //   width / 2,
  //   height - floorThickness / 2,
  //   width,
  //   floorThickness,
  //   KIN,
  // );
}

function draw() {
  background(220);

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
  if (kb.pressing("p")) {
    bally = new Sprite(width / 2, 0, 30, 30);
  }

  // console.log(shoulder.rotation);

  mainPlayer.updateInput();
}
