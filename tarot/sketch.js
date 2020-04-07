let card;
let cards;
let last;



function setup() {
  createCanvas(130,220) ;
  card = loadImage("deck/turned.png");
  cards = Array().fill().map(c => new Card());
  frameRate(10)
    // createLoop({duration:6, gif:true,startLoop:3, endLoop:3})
   
}

function draw() {

  //background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < 1; i++) {
    let c = new Card();
    cards.push(c);
  }

  for (let card of cards) { 
    card.display();
    card.update();

  }


   if(cards.length > 100){
    cards = cards.filter(c => !c.delete());
    //cards=[]
   
   }

   

}


