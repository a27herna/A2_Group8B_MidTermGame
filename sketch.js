let mainPlayer;
let mainBody;

let currentLevel;

function setup() {
  /*
  !!Init in this order!!
  1. Canvas
  2. Player
  3. Level
  4. Camera
  */

  createCanvas(500, 500);
  // ALWAYS ESTABLISH WORLD GRAVITY
  world.gravity.y = 10;

  mainPlayer = new PlayerBase(width / 2, height / 2, 2);
  // let home = new Postoffice(100, 450);
  currentLevel = new Level([]);

  console.log(currentLevel.w + " | " + currentLevel.h);

  initCamPos();
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

  mainPlayer.updateInput();
  updateCamera();
}
