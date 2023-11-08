function setup() {
  createCanvas(600, 600);
  background("purple");
}

function draw() {
  
fill ("pink");
stroke("darkblue");
strokeWeight(1);
if(mouseIsPressed){
  rect(mouseX,mouseY,20,30);
 }
}
  
