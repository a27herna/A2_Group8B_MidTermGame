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
  let currentTime = timeWithPackage + 15 * packageBrokenCount;
  let targetScores = levelData[currentLevelIndex]?.targetScores ?? [75, 60, 45];
  let currentScore = 0;

  let starSpacing = 120;
  let starSize = 30;

  stroke("black");
  strokeWeight(2);
  //   fill("blue");
  for (let i = 0; i < targetScores.length; i++) {
    if (currentTime < targetScores[i]) {
      currentScore++;
      fill("gold");
    } else {
      fill("white");
    }
    drawStar(
      width / 2 + starSpacing * (i - 1),
      height * 0.45,
      starSize,
      starSize * 1.75
    );

    textSize();
  }

  //   new Sprite(250, 80, [50, -72, 50, 144, 5]);
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
