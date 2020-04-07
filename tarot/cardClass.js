class Card {
  constructor() {
    this.img = card;
    this.png = hanged;
    this.w = 0;
    this.h = 0;
    this.zoom = 0;
 
  }

  display() {
    imageMode(CENTER);
        scale(this.zoom, this.zoom);
        image(this.img, 0, 0, this.w, this.h);

      }


    

  update() {

    if (this.zoom < 1) {
      this.zoom += 0.1;
    }

  }

  delete() {
    return this.zoom > 1;
  }


}
