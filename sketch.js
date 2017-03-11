function setup() {
  createCanvas(620,240);
  againButton=createButton("START");
  againButton.mousePressed(start);
  againButton.position(10,10)
  againButton.id("button");
  show_dist=createP("");
  show_dist.id("distans");
  show_dist.position(0,height*2/3)
  background(220);
  createLines();
}

function draw() {
  if(going) {
  licznik++;
  background(220);
  createLines();
  throwBall();
  setProperPosition();
 }
}

function mousePressed() {
  if(throwBall() && !checked) {
    checkClick(mouseX);
    checked=true;
  }
}
