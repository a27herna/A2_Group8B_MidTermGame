let camTarget;

function initCamPos() {
  camTarget = mainPlayer.mainBody;

  camera.on();
  updateCamera();
}

function updateCamera() {
  const maxX = max(0, currentLevel.w - width / 2);
  const maxY = max(0, currentLevel.h - height / 2);

  camera.x = constrain(camTarget.pos.x, width / 2, maxX);
  camera.y = constrain(camTarget.pos.y, height / 2, maxY);
}

async function constrictCamMove(x, y, speed) {
  const maxX = max(0, currentLevel.w - width / 2);
  const maxY = max(0, currentLevel.h - height / 2);

  let locX = constrain(x, width / 2, maxX);
  let locY = constrain(y, width / 2, maxY);

  await camera.moveTo(locX, locY, speed);
  return true;
}

async function returnToPlayer() {
  constrictCamMove(mainPlayer.mainBody.pos.x, mainPlayer.mainBody.pos.y, 2);
}
