let RecipientObj;

function initRecipientObj() {
    let objHeight = 200;
    let objWidth = objHeight / 1.5;

    
    ReceipientObj = new Group();
    RecipientObj.width = objWidth;
    RecipientObj.height = objHeight;
    RecipientObj.physics = "NONE";
    RecipientObj.layer = 0;

    RecipientObj.targetPackage = "basic";

    

}