const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground,ball1,ball2,ball3,ball4,ball5;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
 
  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(world,ground);

  var ball1_options ={
    restitution:1
  }
  ball1= Bodies.circle(200,100,20,ball1_options);
  World.add(world,ball1);
  
  var ball2_options ={
    restitution:1
  }
  ball2= Bodies.circle(100,100,30,ball2_options);
  World.add(world,ball2);
  
  var ball3_options ={
    restitution:1
  }
  ball3= Bodies.circle(150,150,15,ball3_options);
  World.add(world,ball3);

  var ball4_options ={
    restitution:1
  }
  ball4= Bodies.circle(10,10,10,ball4_options);
  World.add(world,ball4);

  var ball5_options ={
    restitution:1
  }
  ball5= Bodies.circle(300,300,25,ball5_options);
  World.add(world,ball5);
  console.log(ground);
  console.log(ground.color);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,20,20);
  ellipse(ball2.position.x,ball2.position.y,20,20);
  ellipse(ball3.position.x,ball3.position.y,20,20);
  ellipse(ball4.position.x,ball4.position.y,20,20);
  ellipse(ball5.position.x,ball5.position.y,20,20);
  
}