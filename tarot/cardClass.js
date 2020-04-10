class Card {
  constructor() {
    this.img = card;
    this.png = hanged;
    this.w = 0;
    this.h = 0;
    this.zoom = 0.7;
    this.z = 0
  }

  display1() {
    push();
    imageMode(CENTER);
    scale(this.zoom, this.zoom);
    image(this.img, 0, 0, this.w, this.h);
    pop();
  }

  update1() {
    if (this.zoom > 0) {
      this.zoom -= 0.05;
    }


  }

  update2(){

  
    // if(this.z < 6){
      this.z+=0.9
  // } 
   console.log(z);
   
  }

  display2(){
    
    push()
    imageMode(CENTER);
    scale(this.z,this.z)
    image(this.img,0,0,this.w,this.h)
    pop()
  }

  delete1() {
    return this.zoom <= 0;
  }

  delete2(){
    return this.z >=5
  }
}
