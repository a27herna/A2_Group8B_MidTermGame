let RecipientObj;

function initRecipientObj() {
  let objHeight = 200;
  let objWidth = objHeight / 1.5;

  RecipientObj = new Group();
  RecipientObj.width = objWidth;
  RecipientObj.height = objHeight;
  RecipientObj.physics = "NONE";
  RecipientObj.layer = 0;
  RecipientObj.color = "red";

  RecipientObj.targetPackage = "basic";
  RecipientObj.satisfied = false;

  RecipientObj.overlapping(mainPlayer.mainBody, acceptPackage);
}

function acceptPackage() {
  // console.log("inside");
  //   console.log(this.overlapping(currPackage));
  if (kb.presses("e")) {
    if (currPackage != null) {
      // console.log("YAY");
      this.sleeping = false;
      mainPlayer.mainBody.sleeping = false;
      currPackage.sleeping = false;
      if (
        this.overlapping(currPackage) &&
        currPackage.packageType == this.targetPackage
      ) {
        // console.log("YIPPEEE!!!!");
        this.satisfied = true;
        this.color = "green";

        currPackage.delete();
        currPackage = null;
      }
    }
  }
}
