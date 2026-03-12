function displayLevelSelect() {
  let gridLength = 5;
  let gridHeight = 3;
  let gridXOffset = 150;
  let gridYOffset = 125;

  let boxSize = 100;

  push();
  imageMode(CENTER);
  titleScreenImg.resize(width, 0);
  image(titleScreenImg, width / 2, height * 0.62);

  for (let r = 0; r < gridHeight; r++) {
    for (let c = 0; c < gridLength; c++) {
      let loopLevelIndex = c + r * gridLength;

      if (loopLevelIndex == levelData["levels"].length) {
        fill("white");
      } else {
        fill("darkgrey");
      }
      if (
        mouseX >=
          width / 2 + (c - floor(gridLength / 2)) * gridXOffset - boxSize / 2 &&
        mouseX <=
          width / 2 + (c - floor(gridLength / 2)) * gridXOffset + boxSize / 2 &&
        mouseY >=
          height * 0.6 +
            (r - floor(gridHeight / 2)) * gridYOffset -
            boxSize / 2 &&
        mouseY <=
          height * 0.6 + (r - floor(gridHeight / 2)) * gridYOffset + boxSize / 2
      ) {
        fill("grey");
        if (mouseIsPressed && loopLevelIndex == 0) {
          sceneManager = "game";
          initLevel();
        }
      }

      rectMode(CENTER);
      rect(
        width / 2 + (c - floor(gridLength / 2)) * gridXOffset,
        height * 0.6 + (r - floor(gridHeight / 2)) * gridYOffset,
        boxSize,
        boxSize,
        boxSize / 20,
      );

      fill("black");
      textAlign(CENTER);
      textSize(24);
      text(
        1 + loopLevelIndex,
        width / 2 + (c - floor(gridLength / 2)) * gridXOffset,
        height * 0.6 +
          (r - floor(gridHeight / 2)) * gridYOffset +
          textSize() / 4,
      );
    }
  }
  pop();
}

function mainDisplay() {
  camera.off();
  push();
  imageMode(CENTER);
  background1Img.resize(0, height);
  background2Img.resize(0, height);
  image(background1Img, width / 2, height / 2);
  image(background2Img, width / 2, height / 2);
  pop();

  camera.on();

  allSprites.draw();
  camera.off();

  if (checkLevelComplete()) {
    levelComplete();
  } else {
    displayHUD();
  }
}

let platformTileImg;
let grassTileImg;
let dirtTileImg;
let waterTileImg;
let treeBaseTileImg;
let treeMidTileImg;
let treeFullTileImg;

let titleScreenImg;
let background1Img;
let background2Img;
let background3Img;
let postOfficeImg;
let recipient1Img;
let playerWalkAni;
let playerIdleAni;
let playerJumpImpulseAni;
let kiwiSpriteSheet;

function initAssetFiles() {
  // let playerImg1 = loadImage("assets/kiwi_frame_1.webp");
  // let playerImg2 = loadImage("assets/kiwi_frame_2.webp");
  // let playerImg3 = loadImage("assets/kiwi_frame_3.webp");
  // let playerImg4 = loadImage("assets/kiwi_frame_4.webp");
  // let playerImg5 = loadImage("assets/kiwi_frame_5.webp");
  // let playerImg6 = loadImage("assets/kiwi_frame_6.webp");

  titleScreenImg = loadImage("assets/images/title_screen.png");

  platformTileImg = loadImage("assets/images/platform_tile.png");
  treeBaseTileImg = loadImage("assets/images/tree_base.png");
  treeMidTileImg = loadImage("assets/images/tree_mid.png");
  treeFullTileImg = loadImage("assets/images/tree_full.png");
  grassTileImg = loadImage("assets/images/grass_tile.png");
  dirtTileImg = loadImage("assets/images/dirt_tile.png");
  waterTileImg = loadImage("assets/images/water_tile.webp");

  background1Img = loadImage("assets/images/background_main.webp");
  background2Img = loadImage("assets/images/background_overlay.webp");
  postOfficeImg = loadImage("assets/images/mail_pickup.webp");
  recipient1Img = loadImage("assets/images/bat_house.webp");
  kiwiSpriteSheet = loadImage("assets/images/kiwi_spritesheet.png");
}

function displayHUD() {
  if (currPackage != null) {
    timeWithPackage = round(world.realTime - packageBornTime, 2);
  }

  push();
  textSize(24);
  fill("white");
  text("Time: " + timeWithPackage, 20, 10 + textSize());
  text('Packages "lost": ' + packageBrokenCount, 20, 10 + textSize() * 2);

  stroke("Black");
  strokeWeight(5);
  fill("Sienna");
  let restartButtonMargin = 60;
  let restartButtonX = width - restartButtonMargin;
  let restartButtonY = height - restartButtonMargin;
  let restartButtonSize = 80;
  circle(restartButtonX, restartButtonY, restartButtonSize);

  angleMode(RADIANS);

  strokeWeight(5);
  strokeCap(SQUARE);
  arc(
    restartButtonX,
    restartButtonY,
    restartButtonSize * 0.5,
    restartButtonSize * 0.5,
    HALF_PI,
    TWO_PI,
  );

  strokeCap(ROUND);
  fill("black");
  triangle(
    restartButtonX,
    restartButtonY + restartButtonSize / 2 / 2 - 10,
    restartButtonX,
    restartButtonY + restartButtonSize / 2 / 2 + 10,
    restartButtonX + 15,
    restartButtonY + restartButtonSize / 2 / 2,
  );

  // noStroke();
  strokeWeight(5);
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(36);
  text("R", restartButtonX, restartButtonY + 2);
  pop();
}

function levelComplete() {
  noLoop();
  allSprites.draw();
  push();
  fill(0, 0, 0, 255 * (3 / 4));
  rect(0, 0, width, height);

  textSize(50);
  textAlign(CENTER);

  fill("white");
  noStroke();
  text("Delivery Complete!", width / 2, height / 3);
  drawLevelScore();
  pop();
}

function drawLevelScore() {
  let packagePentalty = 15;

  let currentTime = timeWithPackage + packagePentalty * packageBrokenCount;
  let targetScores = levelData[currentLevelIndex]?.targetScores ?? [75, 60, 45];
  let currentScore = 0;

  let starSpacing = 120;
  let starSize = 30;

  for (let i = 0; i < targetScores.length; i++) {
    let placementX = width / 2 + starSpacing * (i - 1);
    let placementY = height * 0.45;

    stroke("black");
    strokeWeight(2);
    if (currentTime < targetScores[i]) {
      currentScore++;
      fill("gold");
    } else {
      fill("white");
    }
    drawStar(placementX, height * 0.45, starSize, starSize * 1.75);

    textSize(24);
    noStroke();
    fill("black");
    text(targetScores[i], placementX, placementY + textSize() / 4);
  }

  let completionTimeMin = int(currentTime / 60);

  let completionTimeSec = int(currentTime);
  if (completionTimeSec < 10) {
    completionTimeSec = "0" + completionTimeSec;
  } else if (completionTimeSec < 1) {
    completionTimeSec = "00";
  }

  let completionTimeMil = int((-int(currentTime) + currentTime) * 100);
  if (completionTimeMil < 10) {
    completionTimeMil = "0" + completionTimeMil;
  } else if (completionTimeMil < 1) {
    completionTimeMil = "00";
  }

  let bestScore =
    playerSaveDataTemp["BestTimes"][currentLevelIndex] ?? 999999999;

  if (currentTime < bestScore) {
    playerSaveDataTemp["BestTimes"][currentLevelIndex] = currentTime;
    saveToPlayerSaveData();
    bestScore = currentTime;
  }

  let bestTimeMin = int(bestScore / 60);

  let bestTimeSec = int(bestScore);
  if (bestTimeSec < 10) {
    bestTimeSec = "0" + bestTimeSec;
  } else if (bestTimeSec < 1) {
    bestTimeSec = "00";
  }

  let bestTimeMil = int((-int(bestScore) + bestScore) * 100);
  if (bestTimeMil < 10) {
    bestTimeMil = "0" + bestTimeMil;
  } else if (bestTimeMil < 1) {
    bestTimeMil = "00";
  }

  fill("white");
  noStroke();
  textSize(36);

  text(
    " - Completion Time - \n" +
      completionTimeMin +
      ":" +
      completionTimeSec +
      ":" +
      completionTimeMil,
    width / 2,
    height * 0.6,
  );

  text(
    " - Record Time - \n" + bestTimeMin + ":" + bestTimeSec + ":" + bestTimeMil,
    width / 2,
    height * 0.75,
  );
}

// [1]
function drawStar(x, y, radius1, radius2, npoints = 5) {
  push();
  angleMode(DEGREES);
  translate(x, y);
  rotate(-36 / 2);
  angleMode(RADIANS);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * radius2;
    let sy = sin(a) * radius2;
    vertex(sx, sy);
    sx = cos(a + halfAngle) * radius1;
    sy = sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
// !!!! Above code taken from and modified: https://archive.p5js.org/examples/form-star.html !!!!
