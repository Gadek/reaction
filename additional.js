var x=0;
var ustalony_czas=0;
var licznik=0;
var right_pos;
var picked=false;
var show_dist;
var going=false;
var checked=false;
var againButton;
var again=false;
function throwBall() {
  noStroke();
  fill(0,100,250)
  ellipse(x,100,50,50);
  x+=11;
  if(x>width+20)
  {
    noLoop();
    return true;
  } else return false;
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
  rect(x,0,3,height);
  fill(0,255,0);
  rect(right_pos,0,3,height);
  var distans=right_pos-x;
  show_dist.html("Pomyliłeś się o:   "+distans+"   piksele");
  going=false;
  againButton.show();
}

function createLines() {
  for(var i=0 ; i<6 ;i++) {
    stroke(100);
    strokeWeight(80);
    line((width/4)*i,0,(width/4)*i,height);
  }
}
function start() {
  x=0;
  ustalony_czas=floor(random(19,51));
  loop();
  licznik=0;
  show_dist.html('');
  checked=false;
  picked=false;
 going=true;
againButton.hide();
}
