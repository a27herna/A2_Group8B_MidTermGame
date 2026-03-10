let floorTile;
let ground;
let bounce;
let lilypad;
let playerStart;

let gridSize = 50;

function terrainDefinition() {
  floorTile = new Group();
  floorTile.layer = 0;

  ground = new floorTile.Group();
  ground.physics = "static";
  ground.layer = 0;
  ground.width = gridSize;
  ground.color = "SaddleBrown";
  ground.tile = "g";

  platform = new floorTile.Group();
  platform.physics = "static";
  platform.width = gridSize;
  platform.height = (gridSize * 1) / 5;
  platform.color = "magenta";
  platform.tile = "p";

  lilypad = new platform.Group();
  lilypad.color = "SeaGreen";
  lilypad.tile = "_";

  oneWayPlatform = new platform.Group();
  oneWayPlatform.physics = "NONE";
  oneWayPlatform.color = "teal";
  oneWayPlatform.tile = "n";

  VisualForegroundTile = new Group();
  VisualForegroundTile.physics = "NONE";
  VisualForegroundTile.width = gridSize;
  VisualForegroundTile.height = gridSize;
  VisualForegroundTile.stroke = color(0, 0, 255, 25);
  VisualForegroundTile.opacity = 0.5;
  VisualForegroundTile.layer = 999;
  VisualForegroundTile.fill = "blue";
  VisualForegroundTile.tile = "w";

  initPostoffice();
  PostofficeObj.tile = "o";

  initRecipientObj();
  RecipientObj.tile = "r";

  playerStart = new Group();
  playerStart.width = 5;
  playerStart.height = 5;
  playerStart.physics = "NONE";
  playerStart.visible = true;
  playerStart.debug = true;
  playerStart.tile = "S";
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
        "                                                ",
        "                                                ",
        "                                         r      ",
        "                                  nnnnnnnnnnnnn ",
        "                                                ",
        "                                     nnn        ",
        "                                                ",
        "                                         nnn    ",
        "                                                ",
        "                                     nnn        ",
        "                                                ",
        "                                         nnn    ",
        "                                     nn         ",
        "                                          nn    ",
        "                                     nn         ",
        "                                          nn    ",
        "                                     nn         ",
        "                                          nn    ",
        "                                     nn         ",
        "                                          nn    ",
        "                                     nn         ",
        "                                          nn    ",
        "                                     nn         ",
        "          gg                              nn    ",
        "  o  S   ggg        _ _  _  _  _      n         ",
        "gggggggggggggggggggwwwwwwwwwwwwwwggggggggggggggg",
        "gggggggggggggggggggggggggggggggggggggggggggggggg",
        "gggggggggggggggggggggggggggggggggggggggggggggggg",
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

    terrainDefinition();
    this.TileMap = new Tiles(
      this.tileSet[0],
      this.tileSet[1],
      this.tileSet[2],
      this.tileSet[3],
      this.tileSet[4],
    );

    //
    // vvvv TILE POSITION MODIFICATIONS vvvv
    //

    // Groups that need to be placed at the bottom of the grid
    // position at level creation
    PostofficeObj.forEach((element) => {
      element.y += -element.height / 2 + gridSize / 2;
    });
    RecipientObj.forEach((element) => {
      element.y += -element.height / 2 + gridSize / 2;
    });
    lilypad.forEach((element) => {
      element.y += -element.height / 2 + gridSize / 2;
    });

    /*
    SPRITE_GROUP.forEach((element) => {
      element.y += -element.height / 2 + gridSize / 2;
    })
    */

    // Groups that need to be placed at the top of the grid
    // position at level creation
    oneWayPlatform.forEach((element) => {
      element.y -= -element.height / 2 + gridSize / 2;
    });

    /*
    SPRITE_GROUP.forEach((element) => {
      element.y -= -element.height / 2 + gridSize / 2;
    })
    */

    this.levelBegin();
  }

  levelBegin() {
    mainPlayer.mainBody.pos.x = playerStart[0].pos.x;
    mainPlayer.mainBody.pos.y = playerStart[0].pos.y;

    // This prevents unintended springback
    mainPlayer.carryon.pos.x = playerStart[0].pos.x;
    mainPlayer.carryon.pos.y = playerStart[0].pos.y - mainPlayer.mainBody.hh;
  }

  async cameraIntro() {
    console.log(camera.x);
    console.log(camera.y);

    for (let element of RecipientObj) {
      await constrictCamMove(element.x, element.y, 10);
      console.log(element.x);
      console.log(element.y);
    }

    await constrictCamMove(mainPlayer.mainBody.x, mainPlayer.mainBody.y, 14);
    allowPlayerInput = true;
  }

  updateTerrain() {
    oneWayPlatform.forEach((element) => {
      if (element.y > mainPlayer.floorSensor.y) {
        element.physics = "static";
      } else {
        element.physics = "NONE";
      }
    });
  }

  // !!!!!REMOVE LATER!!!!!
  // drawBackground() {
  //   background(220);
  // }

  // drawWorld() {
  //   noStroke();
  //   fill(this.bg[0], this.bg[1], this.bg[2]);
  //   rect(0, 0, this.w, this.h);

  //   stroke(245);
  //   for (let x = 0; x <= this.w; x += this.gridStep) line(x, 0, x, this.h);
  //   for (let y = 0; y <= this.h; y += this.gridStep) line(0, y, this.w, y);

  //   noStroke();
  //   fill(170, 190, 210);
  //   for (const o of this.obstacles) rect(o.x, o.y, o.w, o.h, o.r ?? 0);

  //   stroke(133, 199, 147);
  //   noFill();
  //   for (const p of this.pois) {
  //     if (p.d) {
  //       circle(p.x, p.y, p.d);
  //     } else rect(p.x, p.y, p.w, p.h, p.r ?? 0);
  //   }
  // }
}
