let card
//let s = 0;
// let w = 10;
// let h = 17;
//let zoom = 0;
let cards;

function setup(){
    createCanvas(windowWidth, windowHeight);

card = loadImage('deck/turned.png')
cards = Array().fill().map(c =>new Card())


}

function draw(){
    background(0)
    translate(width/2,height/2)
for(let i=0; i<1; i++){

let c = new Card()
cards.push(c)

}

for(let card of cards){
    card.display()
    card.update()
}
cards = cards.filter(c => !c.delete())

//console.log(cards);

//   if(zoom >= 90){
//       zoom=0
//       w=10
//       h=17
//   }


//tint(255,100)
// scale(zoom,zoom)

// image(card, 0,0,w,h)

// zoom+=0.5

}