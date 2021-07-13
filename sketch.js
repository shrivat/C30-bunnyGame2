const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;
var click

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbitImg = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rabbit = createSprite(250, 350, 5, 6)
 rabbit.addImage(rabbitImg)
 rabbit.scale = 0.3
 rabbit.y = 550
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
 click = createImg("R.png")
 click.position(250, 30)
 click.size(50, 50)
 click.mouseClicked(cut)
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();
  drawSprites()
 
   
}
function cut(){
  fruit_con.Detach()
  fruit_con=null
}
