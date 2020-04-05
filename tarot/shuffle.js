let fool, mage, priestess, empress, emperor, hierofant;
let n = 3;
let y = 0;
let deck;
let xPos;
let cards;
const shuffle = new Set();

function setup() {
  createCanvas(windowWidth, windowHeight);
  fool = loadImage("deck/loco.png");
  mage = loadImage("deck/1-mago.png");
  priestess = loadImage("deck/2-sacerdotiza.png");
  empress = loadImage("deck/3-emperatriz.png");
  emperor = loadImage("deck/4-emperador.png");
  hierofant = loadImage("deck/5-hierofante.png");
  deck = [fool, mage, priestess, empress, emperor, hierofant];
  xPos = [];
  cards = []


  
  reading(deck);

  for (let x = 0; x <= width-100; x += 100) {
    xPos.push(x);
   
  }

  for(let card of shuffle.entries()){
      cards.push(card[0]) 
    }
    


}

function draw() {
  background(0);

  for(let x = 0; x < xPos.length; x ++){
    let pos = xPos[x]

     image(cards[x],pos,0,100,190)
//console.log(pos);

    }

}

function reading(cards) {
  shuffle.add(cards[Math.floor(Math.random() * cards.length - 1)]);

  if (shuffle.size !== n) {return reading(cards)}
  else if(shuffle.has(undefined)){return reading(cards)}
  return;
}
