let hanged;
let bg;

function preload() {
  bg = createImage("deck/elBueno.gif");

}

function setup() {
  createCanvas(130, 220);
  imageMode(CENTER);
  hanged = loadImage("deck/arcano_1.png");
  //frameRate(10)
  // createLoop({duration:6, gif:true,startLoop:3, endLoop:3})
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  //bg.position(0,0)
  image(hanged, 0, 0, width, height);
}
