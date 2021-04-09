const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var drop;
var walkingMan;

function preload(){
 walkingMan = loadImage("images/walking_1.png");
}

function setup(){
 var createCanvas = createCanvas(400, 1200);
 drop = new Drop(640, 360); 
 drop.addColor("blue"); 

 
    

}

function draw(){
background(0); 
drop.display();  
drawSprites();  
}   

