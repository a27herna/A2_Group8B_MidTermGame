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
