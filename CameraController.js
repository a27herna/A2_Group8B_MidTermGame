let camTarget;

function initCamPos() {
  camTarget = mainPlayer.mainBody;

  camera.on();
}

function updateCamera() {
  const maxX = max(0, currentLevel.w - width / 2);
  const maxY = max(0, currentLevel.h - height / 2);

  camera.x = constrain(camTarget.pos.x, width / 2, maxX);
  camera.y = constrain(camTarget.pos.y, height / 2, maxY);
}
