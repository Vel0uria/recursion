let card;
let cards;
let star1;
let star2;
let star3;
let star4;
let horse;
let chispa;
let hanged;
let stars
let z = 0;
let x = 0
let y = -24;

function setup() {
  createCanvas(218, 118);
  imageMode(CENTER);
  hanged = loadImage("deck/arcano_1.png");
  card = loadImage("deck/turned.png");
  star1 = loadImage("deck/estrella.png");
  star2 = loadImage("deck/chispa.png");
  star3 = loadImage("deck/star_b.png");
  star4 = loadImage("deck/star_y.png");
  horse = loadImage("deck/horse.png")
  cards = Array().fill().map(c => new Card());
  cardz = Array().fill().map(c => new Card());
  stars = new Star()
  setTimeout(hide,4000)

  frameRate(10);
  // createLoop({duration:6, gif:true,startLoop:3, endLoop:3})

}

function showHanged() {

if(z <= 0.15){
  z += 0.009;
} 
}


function hide(){
    z*=-1
   //if(z < 0){
  // console.log(z)
   
   
   //}
}



function draw() {
  background(0);
  translate(width / 2, height / 2);
  setTimeout(showHanged, 1000);
  setTimeout(loop,4200)

  function loop(){
    if(z < 0){
      for (let i = 0; i < 1; i++) {
        let c = new Card();
        cardz.push(c);
      }

      console.log(z);
      
    }
  
  
    
  }

  if (z === 0) {
    for (let i = 0; i < 1; i++) {
      let c = new Card();
      cards.unshift(c);
    }
  }
    for (let card of cards) {
      card.display1();
      card.update1();
    }

  

  cards = cards.filter(c => !c.delete1());
  //cardz = cardz.filter(c => !c.delete2());

  //stars.horsingAround() 
 
  scale(z, z);
  image(hanged, x, y, 0, 0);
  for (let c of cardz) {
    c.display2();
    c.update2();
  }
  stars.display()
  stars.move()
 

 

}
