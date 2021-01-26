const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,ground1;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28;

var polygon;

var shot;

function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

ground=new Ground(600,height,1200,20);
ground1=new Ground(800,280,250,20);

polygon=new Polygon(200,200,40);

shot=new Slingshot(polygon.body,{x:200,y:200});

b1=new Block(800,155,30,40);
b2=new Block(830,155,30,40);
b3=new Block(860,155,30,40);
b4=new Block(890,155,30,40);
b5=new Block(770,155,30,40);
b6=new Block(740,155,30,40);
b7=new Block(710,155,30,40);
b8=new Block(800,145,30,40);
b9=new Block(830,145,30,40);
b10=new Block(860,145,30,40);
b11=new Block(770,145,30,40);
b12=new Block(740,145,30,40);
b13=new Block(800,135,30,40);
b14=new Block(830,135,30,40);
b15=new Block(770,135,30,40);
b16=new Block(800,125,30,40);
}

function draw(){
  background(0);

  Engine.update(engine);

  ground.display();
  ground1.display();

  polygon.display();

  shot.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  shot.fly();  
}

function keyPressed(){
  if(keyCode===32){
      shot.attach(polygon.body);
  }
}
