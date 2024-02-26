
let img;
let img2;
let c= '#FFFFFF';
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

function draw() {
  background(b);

   //Calling Whale
   drawWhale(46,241);

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

// If touches eats cherry
if (Pac==160){ 
  c='#FC0101';
  b = '#FFFFFF';
  eat = true;
}

// eats ghost and background changes back
if (Pac==250){ 
  c='#FFFFFF';
  b = '#002E5F';
  eat= false;
  ghost = true;
}

// Pacman starting point
drawPacman(Pac,210);

// Cherry animation when eat
rotation= rotation + 0.15;

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

function drawWhale(Wx,Wy){
  push();
  translate(Wx,Wy);
  scale(0.15);
  
  
     noStroke();
    fill(176, 199, 240);
    rect(-40, -210, 100, 65);
  
    //Front of body
    fill(176, 199, 240);
    quad(-170, -240, -30, -200-10, -30, -145, -110, -145);
  
    //End of body
    // (3,1,2)
    fill(176, 199, 240);
    triangle(160, -115, 60, -210, 60, -145);
  
    //Tail 
    scale(0.5);
    fill(176, 199, 240);
    triangle(300, -125, 320, -230, 350, -165);
    fill(109, 132, 168);
    triangle(250, -200, 320, -230, 250, -145);
   
    //Foreground Arm 
    //(3,1,2)
    fill(176, 199, 240);
    triangle(50, -200-10, -40, -290, 40, -290);
    triangle(50, -200-10, 40, -270, 110, -195);
  
    //Background Arm
    fill(109, 132, 168);
    triangle(-50, -210, -140, -290, -60, -290);
    triangle(-50, -210, -60, -270, -10, -195);
  
    //Back support 
    //(3,1,2)
    fill(176, 199, 240);
    triangle(-30, -410, -343, -479, 118, -420);
  
    //eye 
    fill(2, 42, 56);
    ellipse(-160, -330, 20, 10);
  
    //face 
    fill(2, 42, 56);
    ellipse(-210, -310, 50, 2);
    
   pop(); 

}



