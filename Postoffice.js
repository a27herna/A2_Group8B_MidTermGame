class Postoffice {
    constructor(x, y) {
        let tempSprite;

        let height = 90;
        
        tempSprite = new Sprite(x, y - height / 2, height/3, height, NONE);

        this.Sprite = tempSprite;

    }

    releasePackage() {
        new Package(this.Sprite.x, this.Sprite.y - this.Sprite.height, "SQUARE", 30, 1);
    }
}
