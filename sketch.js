let mainPlayer;
let mainBody;

let currentLevelIndex = 0;
let currentLevel;

let packageBrokenCount = 0;

let packageBornTime = 0;
let timeWithPackage = 0;

let allowPlayerInput = false;

let devCamSkip = false;

let instructionSkip = false;

let sceneManager = "levelSelect";

let cnv;

let levelData;

function preload() {
  getPlayerSaveData();

  levelData = loadJSON("levelData.json");
  console.log(levelData);
  initAssetFiles();
}

function setup() {
  /*
  !!Init in this order!!
  1. Canvas
  2. Player
  3. Level
  4. Camera
  */
  world.updateRate = 60;

  cnv = createCanvas(1150, 650);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);

  // ALWAYS ESTABLISH WORLD GRAVITY
  world.gravity.y = 0;
  mainPlayer = new PlayerBase(width / 2, height / 2, 5);
  backgroundTerrainDefinition();
  terrainDefinition();

  // initLevel();
}

function update() {
  background(220);

  // if (instructionSkip) {
  // }

  if (sceneManager == "game") {
    currentLevel.updateTerrain();
    packageWorldBound();

    if (allowPlayerInput) {
      mainPlayer.updatePlayer();
      updateCamera();
    }
  }

  // if (kb.presses("1")) {
  //   console.log(mainPlayer.mainBody.pos.x);
  //   console.log(mainPlayer.carryon.pos.x);
  //   console.log(mainPlayer.wheeljoiner);
  // }
  // if (kb.presses("2")) {
  //   console.log(mainPlayer.mainBody.vel.x);
  //   console.log(mainPlayer.mainBody.vel.y);
  //   console.log(mainPlayer.carryon.vel.x);
  //   console.log(mainPlayer.carryon.vel.y);
  // }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    if (allowPlayerInput) {
      //this is a hack solution please fix
      initLevel();
      initLevel();
    }
  }
}

function drawFrame() {
  allSprites.draw();
  background(220);

  if (sceneManager == "levelSelect") {
    displayLevelSelect();
  } else if (sceneManager == "game") {
    mainDisplay();
  }

  // camera.on();
}

function initLevel(index) {
  loop();
  if (!index) {
    removeRealTimeObjects();
    currentLevel?.TileMap.delete();
    currentLevel?.backgroundTileMap.delete();

    world.gravity.y = 10;
    currentLevel = null;
    currentLevel = new Level([]);

    timeWithPackage = 0;
    packageBrokenCount = 0;

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
