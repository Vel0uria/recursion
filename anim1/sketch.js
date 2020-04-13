let deck;
let pic;
let hanged;
let world;
let bg;

function setup() {
  createCanvas(300, 218);
  imageMode(CENTER);

  deck = ["deck/arcano_1.png", "deck/mundo.png", "deck/mat.png"];
  bg = loadImage("deck/cortina.jpg");
  pic = floor(random(deck.length));
  card = loadImage(deck[pic]);

}

function draw() {
  background(70,0,15);
image(bg,width/2,height/2 ,width,height)

translate(width / 2, height / 2);

  drawHanged(0, -35, 80, 120);
  push;

  scale(1, -1);
  drawHanged(-0, -35, 80, 120);
  pop;
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    drawCircle(x + d * 0.6, y, d * 0.6);
    drawCircle(x - d * 0.6, y, d * 0.6);
  }
}

function drawHanged(x, y, zX, zY) {
  let r = 0.7;

  image(card, x, y, zX, zY);
  if (zX > 15) {
    drawHanged(x + zX * r, y, zX * r, zY * r);
    drawHanged(x - zX * r, y, zX * r, zY * r);
    // drawHanged(x + zX*r,y + zY*r,zX*r,zY*r)
    // drawHanged(x - zX*r,y - zY*r,zX*r,zY*r)
  }
}
