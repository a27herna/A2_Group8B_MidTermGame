let mainPlayer;
let mainBody;

let currentLevel;

let packageBrokenCount = 0;

let packageBornTime = 0;
let timeWithPackage = 0;

let allowPlayerInput = false;

let devCamSkip = true;

let instructionSkip = false;

let cnv;

function setup() {
  /*
  !!Init in this order!!
  1. Canvas
  2. Player
  3. Level
  4. Camera
  */

  cnv = createCanvas(1100, 700);
  cnv.position((windowWidth - width)/2, (windowHeight - height)/2, );
  // ALWAYS ESTABLISH WORLD GRAVITY
  world.gravity.y = 10;

  mainPlayer = new PlayerBase(width / 2, height / 2, 4);
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
  
  if (instructionSkip) {

  }
  

  currentLevel.updateTerrain();
  packageWorldBound();

  if (allowPlayerInput) {
    mainPlayer.updatePlayer();
    updateCamera();
  }

  if (kb.presses("1")) {
    console.log(mainPlayer.mainBody.pos.x);
    console.log(mainPlayer.carryon.pos.x);
    console.log(mainPlayer.wheeljoiner)
  }
  if (kb.presses("2")) {
    console.log(mainPlayer.mainBody.vel.x);
    console.log(mainPlayer.mainBody.vel.y);
    console.log(mainPlayer.carryon.vel.x);
    console.log(mainPlayer.carryon.vel.y);
  }
  if (kb.presses("3")) {
    console.log(oopsPackage.pos.x);
    console.log(oopsPackage.pos.y);
    console.log(oopsPackage.pos.y / gridSize);
  }
  if (kb.presses("4")) {
    console.log(RecipientObj[1].overlapping(currPackage));
  }

  if (currPackage != null) {
    timeWithPackage = world.realTime - packageBornTime;
  }

  text("Time: " + round(timeWithPackage, 2), 20, 20);
  text('Packages "lost": ' + packageBrokenCount, 20, 40);
}


