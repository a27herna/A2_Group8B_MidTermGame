// class Postoffice {
//   constructor(x, y) {
//     let tempSprite;

//     let height = 200;

//     tempSprite = new Sprite(x, y - height / 2, height / 1.5, height, "NONE");
//     tempSprite.layer = 0;

//     // let defaultDraw = tempSprite._draw;

//     // tempSprite.draw = function () {
//     //   // add custom code here
//     //   //   rect(-10, -10, 20, 20);

//     //   defaultDraw();
//     // };

//     this.Sprite = tempSprite;
//   }

//   releasePackage() {
//     new Package(
//       this.Sprite.x,
//       this.Sprite.y - this.Sprite.height,
//       "SQUARE",
//       30,
//       1,
//     );
//   }
// }

let PostofficeObj;

function initPostoffice() {
  let objHeight = 200;
  let objWidth = objHeight / 1.5;

  PostofficeObj = new Group();
  PostofficeObj.width = objWidth;
  PostofficeObj.height = objHeight;
  PostofficeObj.physics = "NONE";
  PostofficeObj.layer = 0;

  PostofficeObj.packageList = ["basic"];
  PostofficeObj.packageListLength = PostofficeObj.packageList.length;
  PostofficeObj.currPackageIndex = -1;

  PostofficeObj.overlapping(mainPlayer.mainBody, summonPackage);

  initPackageObj();
}

let currPackage;
function summonPackage() {


  if (kb.presses('e')) {
    this.currPackageIndex++;
    this.currPackageIndex = constrain(this.currPackageIndex, 0, this.packageListLength - 1);

    // console.log(this.packageList);
    console.log(this.currPackageIndex);
    console.log(this.packageList[this.currPackageIndex]);


    currPackage = createPackageObj(this.packageList[this.currPackageIndex]);
    currPackage.overlaps(RecipientObj);

    packageBornTime = world.realTime;
    // console.log(this.height);
    currPackage.pos = this.pos;
    currPackage.y -=  this.height / 4;
  }
}

