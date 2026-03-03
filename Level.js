let floor;
let ground;
let bounce;
let gridSize = 50;

function terrainDefinition() {
  floor = new Group();
  floor.layer = 0;

  ground = new floor.Group();
  ground.physics = "static";
  ground.layer = 0;
  ground.width = 50;
  ground.color = "brown";
  ground.tile = "g";

  platform = new floor.Group();
  platform.physics = "static";
  platform.width = 50;
  platform.height = 20;
  platform.color = "magenta";
  platform.tile = "p";

  initPostoffice();
  PostofficeObj.tile = "o";

  initRecipientObj();
  RecipientObj.tile = "r";
}

class Level {
  constructor(json) {
    /*

    */


    this.bg = json.world?.bg ?? [235, 235, 235];

    this.tileSet = json.world?.tileSet ?? [
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "      p",
        "  o p              r",
        "gggggggggggggggggggg",
      ],
      gridSize / 2,
      gridSize / 2,
      gridSize,
      gridSize,
    ];

    let maxStringLength = 0;
    this.tileSet[0].forEach((element) => {
      if (element.length > maxStringLength) {
        maxStringLength = element.length;
      }
    });

    this.tilew = maxStringLength;
    this.tileh = this.tileSet[0].length;

    this.w = gridSize * this.tilew;
    this.h = gridSize * this.tileh;

    this.obstacles = json.obstacles ?? [];

    terrainDefinition();
    new Tiles(
      this.tileSet[0],
      this.tileSet[1],
      this.tileSet[2],
      this.tileSet[3],
      this.tileSet[4],
    );

    // Groups that need to be placed at the bottom of the grid
    // position at level creation
    PostofficeObj.forEach((element) => {
      element.y += -element.height / 2 + gridSize / 2;
    })

    /*
    SPRITE_GROUP.forEach((element) => {
      element.y += -element.height / 2 + gridSize / 2;
    })
    */
  }



  drawBackground() {
    background(220);
  }

  drawWorld() {
    noStroke();
    fill(this.bg[0], this.bg[1], this.bg[2]);
    rect(0, 0, this.w, this.h);

    stroke(245);
    for (let x = 0; x <= this.w; x += this.gridStep) line(x, 0, x, this.h);
    for (let y = 0; y <= this.h; y += this.gridStep) line(0, y, this.w, y);

    noStroke();
    fill(170, 190, 210);
    for (const o of this.obstacles) rect(o.x, o.y, o.w, o.h, o.r ?? 0);

    stroke(133, 199, 147);
    noFill();
    for (const p of this.pois) {
      if (p.d) {
        circle(p.x, p.y, p.d);
      } else rect(p.x, p.y, p.w, p.h, p.r ?? 0);
    }
  }
}
