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
var slider;
function throwBall() {
  noStroke();
  fill(0,100,250)
  ellipse(x,100,50,50);
  x+=12;
  if(x>width+20)
  {
    noLoop();
    if(going) {
      background(210,210,255);
      createLines();
    }
    return true;
  } else return false;
}
function setProperPosition() {
  if(ustalony_czas>licznik&&ustalony_czas<licznik+3){
    background(255,0,255);
    if(!picked) {
      right_pos=x;
      picked=true;
    }
  }
}

function checkClick(x) {
  noStroke();
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
    stroke(140);
    strokeWeight(110);
    line((width/4)*i,0,(width/4)*i,height);
  }
}
function start() {
  x=-80;
  ustalony_czas=floor(random(15,65));
  loop();
  licznik=0;
  show_dist.html('');
  checked=false;
  picked=false;
  going=true;
  againButton.hide();
}
function createDOMElements() {
  againButton=createButton("START");
  againButton.mousePressed(start);
  againButton.position(10,10)
  againButton.id("button");
  show_dist=createP("");
  show_dist.id("distans");
  show_dist.position(0,height*2/3);
  slider=createSlider(1,60,60);
  slider.input(setFrames);
  slider.position(1,241);
}

function setFrames() {
  frameRate(Number(slider.value()))
}
