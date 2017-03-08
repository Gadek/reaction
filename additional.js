var x=0;
var endloop=false;
var ustalony_czas=0;
var licznik=0;
var right_pos;
var picked=false;
var show_dist;
var going=false;
var checked=false;
function throwBall() {
  noStroke();
  fill(0,100,250)
  ellipse(x,100,50,50);
  x+=11;
  if(x>width+20)
  {
    endloop=true;
    noLoop();
  }
}
function setProperPosition() {
  if(ustalony_czas>licznik&&ustalony_czas<licznik+4){
    background(255,0,255);
    if(!picked) {
      right_pos=x;
      picked=true;
    }
  }
}
function checkClick(x) {
  fill(0);
  rect(x,0,3,height)
  fill(0,255,0)
  rect(right_pos,0,3,height)
  var distans=right_pos-x
  show_dist.html("Pomyliłeś się o "+distans+" piksele");
}
function createLines() {
  for(var i=0 ; i<6 ;i++) {
    stroke(100);
    strokeWeight(80)
    line((width/4)*i,0,(width/4)*i,height);
  }
}
