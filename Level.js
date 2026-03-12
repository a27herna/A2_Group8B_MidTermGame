let backgroundTile;
let treeBaseTile;
let treeMidTile;

let floorTile;
let ground;
let dirt;
let bounce;
let lilypad;
let playerStart;

let gridSize = 50;

function backgroundTerrainDefinition() {
  backgroundTile = new Group();
  backgroundTile.layer = 0;
  backgroundTile.physics = "NONE";
  backgroundTile.width = gridSize * 10;
  backgroundTile.height = gridSize * 10;

  treeBaseTile = new backgroundTile.Group();
  // treeBaseTile.tile = "B";
  treeBaseTileImg.resize(0, treeBaseTile.width);
  treeBaseTile.img = treeBaseTileImg;
  treeBaseTile.img.offset.y = -treeBaseTile.height / 4;

  treeMidTile = new backgroundTile.Group();
  // treeMidTile.tile = "T";
  treeMidTile.img = treeMidTileImg;
  treeMidTileImg.resize(0, treeMidTile.width);
  treeMidTile.img = treeMidTileImg;
  treeMidTile.img.offset.y = -treeMidTile.height / 4;
  treeMidTile.img.offset.x = -treeMidTile.height / 16;
  // treeMidTile.img.scale.y = -1;

  treeFullTile = new backgroundTile.Group();
  treeFullTile.width = gridSize * 10;
  treeFullTile.height = gridSize * 32;
  treeFullTile.tile = "T";
  treeFullTileImg.resize(0, treeFullTile.height);
  treeFullTile.img = treeFullTileImg;
  treeFullTile.img.offset.y = -treeFullTile.height / 2 + 180;
}

function terrainDefinition() {
  floorTile = new Group();
  floorTile.layer = 0;

  ground = new floorTile.Group();
  ground.physics = "static";
  ground.layer = 0;
  ground.width = gridSize;
  ground.color = "SaddleBrown";
  ground.tile = "g";
  ground.img = grassTileImg;
  ground.img.scale = gridSize / grassTileImg.width;

  dirt = new ground.Group();
  dirt.physics = "static";
  dirt.layer = 0;
  dirt.width = gridSize;
  dirt.color = "SaddleBrown";
  dirt.tile = "d";
  dirt.img = dirtTileImg;
  dirt.img.scale = gridSize / dirtTileImg.width;

  platform = new floorTile.Group();
  platform.physics = "static";
  platform.width = gridSize;
  platform.height = (gridSize * 1) / 5;
  platform.color = "magenta";
  platform.tile = "p";

  lilypad = new platform.Group();
  lilypad.height = (gridSize * 1) / 7.5;
  lilypad.color = "SeaGreen";
  lilypad.tile = "_";
  lilypad.stroke = "SeaGreen";
  lilypad.img = platformTileImg;
  lilypad.img.scale = gridSize / platformTileImg.width;

  oneWayPlatform = new platform.Group();
  oneWayPlatform.physics = "NONE";
  oneWayPlatform.color = "teal";
  oneWayPlatform.tile = "n";
  oneWayPlatform.img = platformTileImg;
  oneWayPlatform.img.scale = gridSize / platformTileImg.width;

  VisualForegroundTile = new Group();
  VisualForegroundTile.physics = "NONE";
  VisualForegroundTile.width = gridSize;
  VisualForegroundTile.height = gridSize;
  VisualForegroundTile.stroke = color(0, 0, 255, 25);
  VisualForegroundTile.opacity = 0.5;
  VisualForegroundTile.layer = 999;
  VisualForegroundTile.fill = "blue";
  VisualForegroundTile.tile = "w";
  VisualForegroundTile.img = waterTileImg;
  VisualForegroundTile.scale = gridSize / waterTileImg.width;

  initPostoffice();
  PostofficeObj.tile = "o";

  initRecipientObj();
  RecipientObj.tile = "r";

  playerStart = new Group();
  playerStart.width = 5;
  playerStart.height = 5;
  playerStart.physics = "NONE";
  playerStart.visible = false;
  playerStart.debug = false;
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
        "                                                                      ",
        "                                                                      ",
        "                                                               r      ",
        "                                                        nnnnnnnnnnnnn ",
        "                                                                      ",
        "                                                           nnn        ",
        "                                                                      ",
        "                                                               nnn    ",
        "                                                                      ",
        "                                                           nnn        ",
        "                                                                      ",
        "                                                               nnn    ",
        "                                                           nn         ",
        "                                                                nn    ",
        "                                                           nn         ",
        "                                                                nn    ",
        "                                                           nn         ",
        "                                                                nn    ",
        "                                                           nn         ",
        "                                                                nn    ",
        "                                                           nn         ",
        "                                                                nn    ",
        "                                                           nn         ",
        "                                                                nn    ",
        "   S                      o      _ _  _  _  _               n         ",
        "gggggggggwwwwwwwwwwgggggggggggggwwwwwwwwwwwwwwgggggggggggggggggggggggg",
        "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      ],
      gridSize / 2,
      gridSize / 2,
      gridSize,
      gridSize,
    ];
    this.backgroundTileSet = json.world?.backgroundTileSet ?? [
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
        "                                                              T       ",
        "                                                                      ",
        "                                                                      ",
        "                                                                      ",
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

    this.backgroundTileMap = new Tiles(
      this.backgroundTileSet[0],
      this.backgroundTileSet[1],
      this.backgroundTileSet[2],
      this.backgroundTileSet[3],
      this.backgroundTileSet[4],
    );

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

    // console.log(this.TileMap);
    // console.log(playerStart);
    this.levelBegin();
  }

  levelBegin() {
    mainPlayer.mainBody.pos.x = playerStart[0].pos.x;
    mainPlayer.mainBody.pos.y = playerStart[0].pos.y;

    // This prevents unintended springback
    mainPlayer.carryon.pos.x = playerStart[0].pos.x;
    mainPlayer.carryon.pos.y =
      playerStart[0].pos.y - mainPlayer.mainBody.hh - mainPlayer.carryon.hh;

    mainPlayer.mainBody.vel.x = 0;
    mainPlayer.mainBody.vel.y = 0;
    mainPlayer.carryon.vel.x = 0;
    mainPlayer.carryon.vel.y = 0;
  }

  async cameraIntro() {
    // console.log(camera.x);
    // console.log(camera.y);
    let cameraHoldDur = 750;
    let cameraPanSpeed = 10;

    for (let element of PostofficeObj) {
      await constrictCamMove(element.x, element.y, cameraPanSpeed);
      await delay(cameraHoldDur);
      // console.log(element.x);
      // console.log(element.y);
    }
    for (let element of RecipientObj) {
      await constrictCamMove(element.x, element.y, cameraPanSpeed);
      await delay(cameraHoldDur);
      // console.log(element.x);
      // console.log(element.y);
    }

    await constrictCamMove(
      mainPlayer.mainBody.x,
      mainPlayer.mainBody.y,
      cameraPanSpeed * 1.4,
    );
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

function removeRealTimeObjects() {
  PackageObj.deleteAll();
  BrokenPackageObj.deleteAll();

  currPackage = null;
  oopsPackage = null;
}
