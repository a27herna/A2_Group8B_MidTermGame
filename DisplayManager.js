function displayLevelSelect() {
  let gridLength = 5;
  let gridHeight = 3;
  let gridXOffset = 175;
  let gridYOffset = 150;

  let boxSize = 125;
  for (let r = 0; r < gridHeight; r++) {
    // for (let r = gridHeight; r > 0; r--) {

    for (let c = 0; c < gridLength; c++) {
      push();

      if (c + r * gridLength == levelData["levels"].length) {
        fill("white");
      } else {
        fill("grey");
      }

      rectMode(CENTER);
      rect(
        width / 2 + (c - floor(gridLength / 2)) * gridXOffset,
        height * 0.6 + (r - floor(gridHeight / 2)) * gridYOffset,
        boxSize,
      );

      fill("black");
      textAlign(CENTER);
      text(
        1 + c + r * gridLength,
        width / 2 + (c - floor(gridLength / 2)) * gridXOffset,
        height * 0.6 +
          (r - floor(gridHeight / 2)) * gridYOffset +
          textSize() / 4,
      );
      pop();
    }
  }
}

function mainDisplay() {
  camera.on();
  allSprites.draw();
  camera.off();

  if (checkLevelComplete()) {
    levelComplete();
  } else {
    displayHUD();
  }
}

function displayHUD() {
  if (currPackage != null) {
    timeWithPackage = round(world.realTime - packageBornTime, 2);
  }

  textSize(24);
  text("Time: " + timeWithPackage, 20, 10 + textSize());
  text('Packages "lost": ' + packageBrokenCount, 20, 10 + textSize() * 2);
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

  //   new Sprite(250, 80, [50, -72, 50, 144, 5]);
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
