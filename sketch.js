

var jungle;
var player;
var points = 0;
var PLAY = 1;
var gameState = PLAY;
var invisibleGround;

function preload(){
  BackgroundImg = loadImage("assets/jungla1.png");
  playerImg = loadImage("assets/player.gif");
  jumpSound = loadSound("assets/jump.mp3");
}

function setup() {
 createCanvas(700, 500);
 
 jungle = createSprite(400,100,600,15);
 jungle.addImage("jungle", BackgroundImg);

 player = createSprite(100,350);
 player.addImage("player", playerImg);
 player.scale = 0.5;

 invisibleGround = createSprite(350,450,700,40)
 invisibleGround.visible = false;

 }

function draw() {
 background(255);
 
 if(gameState === PLAY){
 jungle.velocityX = -8;
 
 if(jungle.x<100)
 {
   jungle.x=400
 }
 
 if(keyDown("space")&& player.y>340) {
  jumpSound.play();
  player.velocityY = -16;
 }
 player.velocityY = player.velocityY + 0.8;
 player.collide(invisibleGround);
 
  points++
  
  textSize(20);
  fill(255);
  text("Puntos" + points,400,300);
  
 
}

drawSprites();


 
 
}
