let floor;
let dirt;
let bounce;

function terrainDefinition() {
  floor = new Group();
  dirt = new floor.Group();
  dirt.physics = "static";
  dirt.layer = 0;
  dirt.width = 50;
  dirt.color = "brown";
  dirt.tile = "g";
}

class Level {
  constructor(json) {
    /*

    */

    this.w = json.world?.w ?? 2400;
    this.h = json.world?.h ?? 1600;
    this.bg = json.world?.bg ?? [235, 235, 235];

    this.tileSet = json.world?.tileSet ?? [
      ["", "", "", "", "", "", "", "", "", "gggggggggggggggggggg"],
      10,
      20,
      50,
      50,
    ];

    this.obstacles = json.obstacles ?? [];

    terrainDefinition();
    new Tiles(
      this.tileSet[0],
      this.tileSet[1],
      this.tileSet[2],
      this.tileSet[3],
      this.tileSet[4],
    );
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
