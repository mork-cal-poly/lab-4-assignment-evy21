
let img;
let img2;
let c= 'white';

function preload(){
  img = loadImage('../images/Asset4.svg');
  img2 = loadImage('../images/cherry.svg');
}
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background('#002E5F');
  image(img,0,0);
  drawCircles(c);
}

function drawGhosts(x,y,s){
  push();
  translate(x,y);
  scale(s);
  if(ghost)
    rotate(rotation)
  imageMode(CENTER);
  image(img,0,0);
  pop();
}

function drawCircles(col){
  push();
  fill(col)
  ellipse(70,30,15);
  ellipse(70,90,15);
  ellipse(70,150,15);
  ellipse(70,270,15);  
  ellipse(70,330,15);
  ellipse(70,390,15);
  ellipse(160,30,15);
  ellipse(160,150,15);
  ellipse(160,270,15);
  ellipse(160,390,15);
  ellipse(250,90,15);
  ellipse(250,150,15);
  ellipse(250,270,15);
  ellipse(250,330,15);
  ellipse(250,390,15);
  ellipse(340,30,15);
  ellipse(340,150,15);
  ellipse(340,210,15);
  ellipse(340,270,15);
  ellipse(340,390,15);
  pop();
}

function drawCherry(x,y,s){
  push();
  translate(x,y);
  if(eat)
    rotate(rotation);
  scale(s);
  imageMode(CENTER);
  image(img2,0,0);
  pop();
}
function mouseClicked() {
  pacSpeed = 1;
}

