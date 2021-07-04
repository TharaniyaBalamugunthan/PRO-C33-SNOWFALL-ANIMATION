const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

function preload() {
  backgroundImg = loadImage ("snow2.jpg");
   
}

function setup() {
  var canvas = createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;
  
  characters = new Characters(810,350,50,50);
  snow = new Snow();

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  characters.display();
  snow.display();



  drawSprites();

}


