class Card {
  constructor() {
    this.img = card;
    this.w = 10;
    this.h = 17;
    this.zoom = 0;

  }

  display() {
    imageMode(CENTER);
    scale(this.zoom, this.zoom);
    //tint(255,120)
    image(this.img, 0, 0, this.w, this.h);
  }

  update() {
    // console.log(this.zoom);
    this.zoom += 0.2;
    if(this.zoom >=2){
        this.zoom = 0
    }
  }

  delete() {
    return this.zoom >= 2;
  }
}
