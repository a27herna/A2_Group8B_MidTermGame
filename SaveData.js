let playerSaveDataTemp;
function getPlayerSaveData() {
  playerSaveDataTemp = getItem("playerSaveData");
  console.log(playerSaveDataTemp);

  if (playerSaveDataTemp == null) {
    playerSaveDataTemp = storeItem("playerSaveData", { BestTimes: [] });
  }
}

function saveToPlayerSaveData() {
  //temp
}
