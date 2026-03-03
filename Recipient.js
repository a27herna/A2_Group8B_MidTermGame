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
    if (kb.presses('e')) {
        if (currPackage != null) {
            console.log("YAY");
            if (this.overlapping(currPackage) && currPackage.packageType == this.targetPackage) {
    
                console.log("YIPPEEE!!!!");
                this.satisfied = true;
                this.color = "green";
    
                currPackage.delete();
            }
        }
    }
}