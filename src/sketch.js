
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
  image(img,0,0);
  

}
