let deck;
let pic;
let hanged;
let world;
let bg;

function setup() {
  createCanvas(300, 218);
  imageMode(CENTER);

  deck = ["deck/arcano_1.png", "deck/mundo.png", "deck/mat.png", "deck/bateleur.png", 'deck/diable.png', 'deck/mort.png'];
  bg = loadImage("deck/bleu.jpg");
  pic = floor(random(deck.length));
  card = loadImage(deck[pic]);

}

function draw() {
  //background(0);
image(bg,width/2,height/2 ,width,height)

translate(width / 2, height / 2);



  push();
  scale(1, -1);
  drawCard(-0, -35, 90, 130);
  pop();

  drawCard(0, -35, 90, 130);

}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    drawCircle(x + d * 0.6, y, d * 0.6);
    drawCircle(x - d * 0.6, y, d * 0.6);
  }
}

function drawCard(x, y, zX, zY) {
  let r = 0.7;

  image(card, x, y, zX, zY);
  if (zX > 15) {
    drawCard(x + zX * r, y, zX * r, zY * r);
    drawCard(x - zX * r, y, zX * r, zY * r);

  }
}
