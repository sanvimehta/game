var car_img, background_img, finishLine_img;
var car

function preload() {
  car_img = loadImage("Car.png");
  background_img = loadImage("bg.png");
  finishLine_img = loadImage("Finish Line.png")
  start_img = loadImage("start.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width/2,height/2 , windowWidth, windowHeight*5);
  bg.addImage(background_img);
  bg.scale = 2
  bg.velocityX = -6

  
  car = createSprite(270, 600, 50, 50);
  car.addImage(car_img);
  car.scale = 0.5

  start_button = createSprite(width/2, height/2 , windowWidth, windowHeight)
  gamestate = "start_screen"


}

function draw() {
  background("white");
  //console.log(bg.x)
  console.log(gamestate);
  if(gamestate == "start_screen"){
  background("yellow")
  }

  image(background_img,0,0, width, height*5);

  if(bg.x <= -50){
    bg.x = width/2
  }


  if(keyIsDown(UP_ARROW)){
    bg.y = bg.y + 10;
   }

   if(keyIsDown(DOWN_ARROW)){
    bg.y = bg.y - 10;
   }


  drawSprites();
  }