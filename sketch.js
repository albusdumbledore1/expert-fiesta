const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var rain = [];
var thunder;
var cloud1,cloud2,cloud3,cloud4,cloud5,cloud1Img;

function preload(){
    cloud1Img = loadImage("images/cloud.png");
}

function setup(){
    createCanvas(1200, 800);
   
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    cloud1 = createSprite(100,10.20,20);
    cloud1.addImg("drk",cloud1Img);
    


        
for(i = 0;i <= 50 ; i++){
    var drops =     new Rain(random(1,1200),random(1,399),10);
    rain.push(drops);



            
        }


}

function draw(){

   
    background(0);


    




drawSprites();








    for(i = 0;i <= 50;i++){
        rain[i].display();
        rain[i].resetDrops();
    }

    
}   




