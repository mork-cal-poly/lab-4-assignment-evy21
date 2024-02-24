
let img;
let img2;

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

// function preload(){
//   img = loadImage("C:\Users\Evelyn\Downloads\Asset 4.svg");
  
//}
function draw() {
  background('#002E5F');
  ellipse(47,192,45);
   
  //Calling Whale
   drawWhale(86,150);
  
  image(img,0,0);

  
  

}

function drawWhale(Wx,Wy){
  push();
  translate(Wx,Wy);
  scale(0.3);
  
  
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


