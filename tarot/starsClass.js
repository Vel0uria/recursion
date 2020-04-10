let a = 0

class Star {
  constructor() {
    this.img1 = star1;
    this.img2 = star2;
    this.img3 = star3;
    this.img4 = star4;
    this.horse = horse
    this.x = random(50,-50)
    this.y = random(-10,0)
    this.vx = random(-10,1)
    this.vy = random(-10,-9)

    
  }
  display() {
      push()
   rotate(a)
    image(this.img1, this.x, -this.y);
    image(this.img2, -this.x, this.y);
    image(this.img3, this.x, -this.y);
    image(this.img4, -this.x, this.y);

    image(this.img1, -this.y, this.x);
    image(this.img2, this.y, -this.x);
    image(this.img3, -this.y,this.x);
    image(this.img4, this.y, -this.x);
pop()

  push()
   // scale(1,1)


  pop()
  }

  move() {
    a+=0.1
   
    this.x += this.vx
    this.y += this.vy
if(this.y >height || this.y<-200){
    this.y-=this.vy
}
if(this.x > width || this.x< -300){
    this.x-=this.vx
}
 }

 horsingAround(){
     push()
     scale(-1,1)
    image(horse,95,-32,80,80)
pop()
}
}
