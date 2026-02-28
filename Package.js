class Package {
  constructor(x, y, type, diameter, weightScale) {
    let tempSprite;

    if (type === "SQUARE" || type === "square") {
      tempSprite = new Sprite(x, y, diameter, diameter);
      tempSprite.mass *= weightScale;
    } else if (type === "CIRCLE" || type === "circle") {
      tempSprite = new Sprite(x, y, diameter);
      tempSprite.mass *= weightScale;
    }

    this.Sprite = tempSprite;
    this.img = null;
  }
}
