let mainPlayer;
let mainBody;

let currentLevel;

let packageBrokenCount = 0;

let allowPlayerInput = false;

let devCamSkip = true;

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
  currentLevel = new Level([]);

  console.log(currentLevel.w + " | " + currentLevel.h);

  initCamPos();

  if (devCamSkip) {
    allowPlayerInput = true;
  } else {
    setTimeout(currentLevel.cameraIntro, 1500);
  }
}

function draw() {
  background(220);

  if (allowPlayerInput) {
    mainPlayer.updateInput();
    updateCamera();
  }

  // if (kb.presses("p")) {
  //   console.log(mainPlayer.mainBody.pos);
  // }
}
