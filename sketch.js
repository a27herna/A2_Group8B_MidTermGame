let mainPlayer;
let mainBody;

let currentLevel;

let packageBrokenCount = 0;

let packageBornTime = 0;
let timeWithPackage = 0;

let allowPlayerInput = false;

let devCamSkip = false;

function setup() {
  /*
  !!Init in this order!!
  1. Canvas
  2. Player
  3. Level
  4. Camera
  */

  createCanvas(1000, 500);
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

  currentLevel.updateTerrain();

  if (allowPlayerInput) {
    mainPlayer.updateInput();
    updateCamera();
  }

  if (kb.presses("1")) {
    console.log(mainPlayer.mainBody.mass);
  }
  if (kb.presses("2")) {
    console.log(currPackage.mass);
  }
  if (kb.presses("3")) {
    console.log(oopsPackage.pos.x);
    console.log(oopsPackage.pos.y);
    console.log(oopsPackage.pos.y / gridSize);
  }

  if (currPackage != null) {
    timeWithPackage = world.realTime - packageBornTime;
  }

  text("Time: " + round(timeWithPackage, 2), 20, 20);
  text('Packages "lost": ' + packageBrokenCount, 20, 40);
}


