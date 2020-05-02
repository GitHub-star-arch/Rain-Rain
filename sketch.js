const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var raindrop1, raindrop2, raindrop3, raindrop4;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(groundimg);
  Engine.update(engine);
  background(255,255,255);  
  raindrop1 = new Raindrop(0);
  raindrop2 = new Raindrop(0);
  raindrop3 = new Raindrop(0);
  raindrop4 = new Raindrop(0);
  drawSprites();
}