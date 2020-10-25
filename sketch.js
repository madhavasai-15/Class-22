//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ground_options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  var ball_options = {restitution: 2, density: 3};
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(300, 100, 20, ball_options);
  World.add(world, ball2);

  console.log(ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  ellipse(ball2.position.x, ball2.position.y, 20, 20);
}

/*
ellipse--> oval shape--> two radii
ellipse(x, y, r1, r2)
r1 = r2 ==> circle

PHYSICS ENGINE
-matter.js

Engine - Universe --> Follows all the laws of physics
      - Matter.Engine
World - Physical world which can be altered and where the objects are added
Bodies - bodies present in the world

NameSpacing --> Giving small nicknames to the big functions/variables
*/