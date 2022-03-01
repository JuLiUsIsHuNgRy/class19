var shuriken
var kunai 

var sky
var grass

var sasori 
var kisame
var itachi
var kakuzu 
var pain 
var dedara 
var kabuto 
var orochimaru 

var obstaclesGroup
function preload(){
 shuriken=loadImage("shuriken.png")
 kunai=loadImage("kunai.png")
 
 sky=loadImage("sky.png")
 grass=loadImage("grass.png")
 
 sasori=loadImage("sasori.png")
 kisame=loadImge("kisame.png")
 itachi=loadImage("itachi.png")
 kakuzu=loadImage("kakuzu.png")
 pain=loandImage("pain.png")
 dedara=loadImage("dedara.png")
 kabuto=loadImage("kabuto.png")
 orochimaru=loadimage("orochimaru.png")
}

function setup() {
 createCanvas(600,300)
 
}

function draw() {
 

 spawnObstacles()

 drawSprites()
}

function spawnObstacles(){
    if(frameCount%80===0){
        var obstacle=createSprite(600,280,600,25)
        var r=Math.round(random(1,8)) 
        switch(r){
            case 1: obstacle.addImage(sasori)
            break; 

            case 2: obstacle.addImage(kisame)
            break;
            
            case 3: obstacle.addImage(itachi)
            break;

            case 4: obstacle.addImage(kakuzu)
            break;
            
            case 5: obstacle.addImage(pain)
            break;

            case 6: obstacle.addImage(dedara)
            break;

            case 7: obstacle.addImage(kabuto)
            break;

            case 8: obstacle.addImage(orochimaru)
            break;
        }
    }
}