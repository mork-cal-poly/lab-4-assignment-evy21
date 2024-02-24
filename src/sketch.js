
let img;
let img2;
let c= 'white';
let Pac = 50;
let pacSpeed = 0;
let b = '#002E5F';
let eat = false;
let ghost = false;
let rotation = 0;

function preload(){
  img = loadImage('../images/Asset4.svg');
  img2 = loadImage('../images/cherry.svg');
}
function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function preload(){
  img = loadImage('Asset4.svg');
  img2 = loadImage('cherry.svg');
}

function draw() {
  background(b);

  // drawghosts
  if (ghost == false)
  drawGhosts (250,210,0.25);
drawGhosts(160,330,0.15);
drawGhosts(340,90,0.15);
drawGhosts(340,330,0.15);
  
  // draw cherries
  if (eat==false)
  drawCherry(160,210,0.25);
drawCherry(160,77,0.15);
drawCherry(250,31,0.15);

// draw circles
drawCircles(c);

// Pacman animation
Pac = Pac + pacSpeed;

// If touches eats cherrie
if (Pac==160){ 
  c='red';
  b = 'white';
  eat = true;
}

}

function drawPacman(x,y){
  fill('#F0E35E');
  arc(x,y,65,65,0,7*PI/4);
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

