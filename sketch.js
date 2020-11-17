const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var spot11 , spot12 , spot13 , spot14 , spot15;
var spot21 , spot22 , spot23 , spot24 , spot25;
var spot31 , spot32 , spot33 , spot34 , spot35;
var spot41 , spot42 , spot43 , spot44 , spot45;
var spot51 , spot52 , spot53 , spot54 , spot55;
var spot61 , spot62 , spot63 , spot64 , spot65;
var ball1 , ball2 , ball3 , ball4 , ball5 , ball6 , ball7 , ball8 , ball9 , ball10;
var base , wall1 , wall2 , wall3 , wall4 , wall5;
var score=0;

function setup() 
{
  engine = Engine.create();
  world = engine.world;

  createCanvas(400,600);

  ball1 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball2 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball3 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball4 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball5 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball6 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball7 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball8 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball9 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );
  ball10 = new BALL( Math.round(random( 50 , 330 )) , 10 , 10 , 10 , 1 , 0 , 0 , 1 , 0 , false );

  spot11 = new SPOT( 50 , 50 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot12 = new SPOT( 120 , 50 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot13 = new SPOT( 190 , 50 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot14 = new SPOT( 260 , 50 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot15 = new SPOT( 330 , 50 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );

  spot21 = new SPOT( 50 , 100 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot22 = new SPOT( 120 , 100 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot23 = new SPOT( 190 , 100 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot24 = new SPOT( 260 , 100 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot25 = new SPOT( 330 , 100 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );

  spot31 = new SPOT( 50 , 150 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot32 = new SPOT( 120 , 150 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot33 = new SPOT( 190 , 150 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot34 = new SPOT( 260 , 150 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot35 = new SPOT( 330 , 150 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  
  spot41 = new SPOT( 50 , 200 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot42 = new SPOT( 120 , 200 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot43 = new SPOT( 190 , 200 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot44 = new SPOT( 260 , 200 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot45 = new SPOT( 330 , 200 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );

  spot51 = new SPOT( 50 , 250 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot52 = new SPOT( 120 , 250 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot53 = new SPOT( 190 , 250 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot54 = new SPOT( 260 , 250 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot55 = new SPOT( 330 , 250 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  
  spot61 = new SPOT( 50 , 300 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot62 = new SPOT( 120 , 300 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot63 = new SPOT( 190 , 300 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot64 = new SPOT( 260 , 300 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  spot65 = new SPOT( 330 , 300 , 10 , 10 , 0 , 0 , 0 , 1 , 0 , true );

  base = new SPOT( 200 , 400 , 400 , 10 , 0 , 0 , 0 , 1 , 0 , true );
  wall1 = new SPOT( 0 , 300 , 10 , 600 , 0 , 0 , 0 , 1 , 0 , true );
  wall2 = new SPOT( 100 , 350 , 10 , 90 , 0 , 0 , 0 , 1 , 0 , true );
  wall3 = new SPOT( 200 , 350 , 10 , 90 , 0 , 0 , 0 , 1 , 0 , true );
  wall4 = new SPOT( 300 , 350 , 10 , 90 , 0 , 0 , 0 , 1 , 0 , true );
  wall5 = new SPOT( 400 , 300 , 10 , 600 , 0 , 0 , 0 , 1 , 0 , true );

}

function draw() 
{
  background(0,0,0);  
  display();
  Engine.update( engine );
  ball1.score();
  ball2.score();
  ball3.score();
  ball4.score();
  ball5.score();
  ball6.score();
  ball7.score();
  ball8.score();
  ball9.score();
  ball10.score(); 
  push();
  fill( "white" );
  textSize(20);
  text( "Score:"+score , 150 , 500 );
  pop();

}