function setup() {
  createCanvas(620,240);
  ustalony_czas=floor(random(19,51));
  frameRate(0);
  show_dist=createP("");
  background(220);
  createLines();
}
function draw() {
  if(!going) {
    text("CLICK TO START",50,50);
  }
  if(going) {
  licznik++
  background(220);
  createLines();
  throwBall();
  setProperPosition();
 }
}
function mousePressed() {
  if(endloop&&!checked) {
    checkClick(mouseX)
    checked=true;
  }
  going=true
}
