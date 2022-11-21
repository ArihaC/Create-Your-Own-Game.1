const playerX = 'x';
const playerO = 'o';
const winning_combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8][2,4,6]];

var bgImage;
var redImage;
var blueImage;
var bg;
var cross;
var circle;

function preload(){
bgImage = loadImage("assets/bgImage.png");

redImage = loadImage("assets/redImage.png");

blueImage = loadImage("assets/blueImage.png");
}

function setup(){

//background image
bg = createSprite(200,200,400,400);
bg.addImage(bgImage);
bg.scale = 0.7;

      
//creating cross  
cross = createSprite(100,200,20,50);
cross.addImage(blueImage);
cross.scale = 0.2;

//creating circle
circle = createSprite(100,200,10,15);
circle.addImage(redImage)
circle.scale = 0.1;



}

function draw() {
  
  background("black");



   
   drawSprites();
        
}