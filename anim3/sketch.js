let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let coin;
let fortune;
let sun; 


function setup() {
  createCanvas(300, 200);
  //rectMode(CENTER)
  coin = loadImage("deck/moneda.png");
  fortune = loadImage("deck/fortune.png");
  sun = loadImage("deck/soleil.png");

  imageMode(CENTER);
}

function draw() {
  background(0);
  fractal(width / 2, height / 2, 90);
}

function fractal(x, y, s) {
  //noFill()
  let n = 0.5;
  image(cup, x, y, s, s);
  //rect(x,y,s,s)
  if (s > 10) {
    fractal(x - s * n, y + s * n, s * n);
    fractal(x + s * n, y - s * n, s * n);
    fractal(x - s * n, y - s * n, s * n);
    fractal(x + s * n, y + s * n, s * n);
  }
}
