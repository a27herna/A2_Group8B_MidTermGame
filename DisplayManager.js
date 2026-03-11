function displayLevelSelect() {
  // temp
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

function levelComplete() {
  allSprites.draw();
  noLoop();
  push();
  fill(0, 0, 0, 255 * (3 / 4));
  rect(0, 0, width, height);

  textSize(50);
  textAlign(CENTER);

  fill("white");
  noStroke();
  text("Delivery Complete!", width / 2, height / 3);
  pop();
}

function drawLevelScore() {
  let currentTime = timeWithPackage;
  let targetScores = LevelData[currentLevelIndex].targetScores ?? [75, 60, 45];
  let currentScore = 0;

  for (let i = 0; i < targetScores.length - 1; i++) {
    if (currentTime < targetScores[i]) {
      currentScore++;
    }
  }

  //   new Sprite(250, 80, [50, -72, 50, 144, 5]);
}
