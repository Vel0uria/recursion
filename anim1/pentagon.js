
let points;
let current;
let previous
let percent; 
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
function setup(){
    createCanvas(windowWidth,windowHeight)
    const n = 5;
    percent = 0.5
    points = [];
    for (let i = 0; i < n; i++) {
      let angle = i * TWO_PI / n;
      let v = p5.Vector.fromAngle(angle);
      v.mult(width/2);
      v.add(width / 2, height/2);
      points.push(v);
    }

}

function draw(){
    background(0);
    current = createVector(random(width), random(height));
  
    colorR = colorR + 0.1;
    colorG = colorG + 0.2;
    colorB = colorB + 0.3;
  
    let nR =  noise(colorR)*255
    let nG = noise(colorG) * 255
    let nB = noise(colorB) * 255
    //noStroke()
    noFill()
   stroke(nR, nG, nB,100);
   strokeWeight(0.5)
  //   for (let i = 0; i < 900; i++) {
  //     strokeWeight(0.5);
  //     stroke(nR, nG, nB,100);
  // 	let next = random(points);
  // 	if(next !== previous){
  // 		current.x = lerp(current.x, next.x, percent);
  // 		current.y = lerp(current.y, next.y, percent);
  
  // 		ellipse(current.x, current.y,0,0);
  
  // previous = next
  
  // 	}
  
  //   }

}