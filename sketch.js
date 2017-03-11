function setup() {
  createCanvas(820,240);
  background(228);
  createDOMElements();
  createLines();
}

function draw() {
  if(going) {
  licznik++;
  background(228);
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
