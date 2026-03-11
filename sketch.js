let mainPlayer;
let mainBody;

let currentLevelIndex = 0;
let currentLevel;

let packageBrokenCount = 0;

let packageBornTime = 0;
let timeWithPackage = 0;

let allowPlayerInput = false;

let devCamSkip = true;

let instructionSkip = false;
let cnv;

let levelData;

function preload() {
  getPlayerSaveData();

  levelData = loadJSON("levelData.json");
  console.log(levelData);
}

function setup() {
  /*
  !!Init in this order!!
  1. Canvas
  2. Player
  3. Level
  4. Camera
  */

  cnv = createCanvas(1100, 700);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);

  // ALWAYS ESTABLISH WORLD GRAVITY
  world.gravity.y = 0;
  mainPlayer = new PlayerBase(width / 2, height / 2, 4);
  terrainDefinition();

  initLevel();
}

function update() {
  background(220);

  // if (instructionSkip) {
  // }

  currentLevel.updateTerrain();
  packageWorldBound();

  if (allowPlayerInput) {
    mainPlayer.updatePlayer();
    updateCamera();

    if (kb.presses("r")) {
      initLevel();
    }
  }

  if (kb.presses("1")) {
    console.log(mainPlayer.mainBody.pos.x);
    console.log(mainPlayer.carryon.pos.x);
    console.log(mainPlayer.wheeljoiner);
  }
  if (kb.presses("2")) {
    console.log(mainPlayer.mainBody.vel.x);
    console.log(mainPlayer.mainBody.vel.y);
    console.log(mainPlayer.carryon.vel.x);
    console.log(mainPlayer.carryon.vel.y);
  }
}

function drawFrame() {
  background(220);

  mainDisplay();
  // camera.on();
}

function initLevel(index) {
  if (!index) {
    currentLevel?.TileMap.delete();
    removeRealTimeObjects();

    world.gravity.y = 10;
    currentLevel = null;
    currentLevel = new Level([]);

    // console.log(currentLevel.w + " | " + currentLevel.h);

    initCamPos();

    if (devCamSkip) {
      allowPlayerInput = true;
    } else {
      setTimeout(currentLevel.cameraIntro, 1500);
    }
  } else {
  }
}

function checkLevelComplete() {
  let completeCheck = true;
  RecipientObj.forEach((element) => {
    // console.log(element.satisfied);
    if (element.satisfied == false) {
      completeCheck = false;
      return false;
    }
  });

  return completeCheck;
}

function displayHUD() {
  if (currPackage != null) {
    timeWithPackage = round(world.realTime - packageBornTime, 2);
  }

  text("Time: " + timeWithPackage, 20, 20);
  text('Packages "lost": ' + packageBrokenCount, 20, 40);
}
