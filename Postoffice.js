class Postoffice {
  constructor(x, y) {
    let tempSprite;

    let height = 200;

    tempSprite = new Sprite(x, y - height / 2, height / 1.5, height, "NONE");
    tempSprite.layer = 0;

    // let defaultDraw = tempSprite._draw;

    // tempSprite.draw = function () {
    //   // add custom code here
    //   //   rect(-10, -10, 20, 20);

    //   defaultDraw();
    // };

    this.Sprite = tempSprite;
  }

  releasePackage() {
    new Package(
      this.Sprite.x,
      this.Sprite.y - this.Sprite.height,
      "SQUARE",
      30,
      1,
    );
  }
}

let PostofficeObj;

function initPostoffice() {
  let objHeight = 200;
  let objWidth = objHeight / 1.5

  PostofficeObj = new Group();
  PostofficeObj.width = objWidth;
  PostofficeObj.height = objHeight;
  PostofficeObj.physics = "NONE";
  // PostofficeObj.offset = {x: 0, y: (-objHeight / 2) + (gridSize / 2) + 2};
  // PostofficeObj.y = -gridSize / 2;
  PostofficeObj.layer = 0;
  // PostofficeObj.debug = true;
  PostofficeObj.releasePackage = new function() {
    if (kb.presses('e')) {
      console.log("special");
    } 
  }

  PostofficeObj.overlapping(mainPlayer.mainBody, releasePackage);

  initPackageObj();
}

function summonPackage() {

  if (kb.presses('e')) {
    console.log(this.pos);


  }
}

