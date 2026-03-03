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
let currPackage;
let BasicBox;
let BasicRound;

function initPackageObj() {
  PackageObj = new Group();
  PackageObj.physics = "DYN";
  PackageObj.gravityScale = 1.3;
  PackageObj.overlaps(mainPlayer.mainBody);
  
  BasicBox = new PackageObj.Group()
  BasicBox.shape = "box";
  BasicBox.width = 30;
  BasicBox.height = 30;
  BasicBox.packageType = "basic";
}

function createPackageObj(type) {
let tempPackage;
  if (type == "basic") {
    tempPackage = new BasicBox.Sprite();
  }

  return tempPackage;
}