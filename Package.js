// class Package {
//   constructor(x, y, type, diameter, weightScale) {
//     let tempSprite;
//     let _weightScale = weightScale;
//     _weightScale ??= 1.3;

//     if (type === "SQUARE" || type === "square") {
//       tempSprite = new Sprite(x, y, diameter, diameter);
//       tempSprite.gravityScale *= _weightScale;
//     } else if (type === "CIRCLE" || type === "circle") {
//       tempSprite = new Sprite(x, y, diameter);
//       tempSprite.gravityScale *= _weightScale;
//     }

//     this.Sprite = tempSprite;
//     // this.img = null;
//   }
// }

let PackageObj;
let BasicBox;
let BasicRound;
let BrokenPackageObj;

function initPackageObj() {
  PackageObj = new Group();
  PackageObj.physics = "DYN";
  PackageObj.gravityScale = 1;
  PackageObj.mass = 1;
  PackageObj.overlaps(mainPlayer.mainBody);
  PackageObj.allowSleeping = false;
  PackageObj.layer = 2;
  PackageObj.collides(ground, destroyPackage);
  PackageObj.collides(lilypad, destroyPackage);

  BrokenPackageObj = new Group();
  BrokenPackageObj.physics = "NONE";
  BrokenPackageObj.shape = "box";
  BrokenPackageObj.width = 30;
  BrokenPackageObj.height = 30;
  BrokenPackageObj.draw = function() {
    push();
    fill(200, 200, 255);
    triangle(
      -BrokenPackageObj.width / 2,
      BrokenPackageObj.height / 2,
      -BrokenPackageObj.width / 4,
      BrokenPackageObj.height / 4,
      0,
      BrokenPackageObj.height / 2,
    );
    pop();
  };
  BrokenPackageObj.debug = true;

  BasicBox = new PackageObj.Group();
  BasicBox.shape = "box";
  BasicBox.width = 30;
  BasicBox.height = 30;
  BasicBox.packageType = "basic";

  BasicBox.draw = function() {
    push();

    stroke("Black");
    fill("Orange");

    rect(0, 0, BasicBox.width, BasicBox.height);
    line(-BasicBox.width / 2, -BasicBox.height / 2, BasicBox.width / 2, BasicBox.height / 2);
    line(-BasicBox.width / 2, BasicBox.height / 2, BasicBox.width / 2, -BasicBox.height / 2);

    pop();
  }
}

function createPackageObj(type) {
  let tempPackage;
  if (type == "basic") {
    tempPackage = new BasicBox.Sprite();
  }

  return tempPackage;
}

let oopsPackage;
function destroyPackage() {
  oopsPackage = new BrokenPackageObj.Sprite(this.pos.x, this.pos.y);
  oopsPackage.y =
    (int(oopsPackage.y / gridSize) + 1) * gridSize - oopsPackage.hh;
  // console.log(oopsPackage.pos);
  packageBrokenCount++;
  // PackageObj.deleteAll();
  this.delete();
  currPackage = null;
}

function packageWorldBound() {
  PackageObj.forEach((element) => {
    element.pos.x = constrain(element.pos.x, 0, currentLevel.w)
    // element.pos.x = constrain(element.pos.x, 0 + max(element.width, element.height), currentLevel.w - max(element.width, element.height))
  });
}