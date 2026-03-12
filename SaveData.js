let playerSaveDataTemp;
function getPlayerSaveData() {
  playerSaveDataTemp = getItem("playerSaveData");
  // console.log(playerSaveDataTemp);

  if (playerSaveDataTemp == null) {
    playerSaveDataTemp = { BestTimes: [] };
    storeItem("playerSaveData", playerSaveDataTemp);
  }
}

function saveToPlayerSaveData() {
  storeItem("playerSaveData", playerSaveDataTemp);
  // console.log(getItem("playerSaveData"));
}
