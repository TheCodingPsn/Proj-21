var music;
var block1, block2, block3, block4;
var cube

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    cube = createSprite(400, 300, 20, 20)
    cube.shapeColor = "pink"

    

    //create 4 different surfaces
    block1 = createSprite(100, 20, 190, 20)
    block1.shapeColor = "red";
    block2 = createSprite(300, 20, 190, 20)
    block2.shapeColor = "blue";
    block3 = createSprite(500, 20, 190, 20)
    block3.shapeColor = "green";
    block4 = createSprite(700, 20, 190, 20)
    block4.shapeColor = "yellow";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

if(keyDown("UP_ARROW")) {
    cube.y = cube.y - 5;
}
if(keyDown("LEFT_ARROW")) {
    cube.x = cube.x - 5;
}
if(keyDown("RIGHT_ARROW")) {
    cube.x = cube.x + 5;
}
if(keyDown("DOWN_ARROW")) {
    cube.y = cube.y + 5;
}

if(cube.isTouching(block1)) {
    cube.shapeColor = "red";
}
if(cube.isTouching(block2)) {
    cube.shapeColor = "blue";
}
if(cube.isTouching(block3)) {
    cube.shapeColor = "green";
}
if(cube.isTouching(block4)) {
    cube.shapeColor = "yellow";
}



    //add condition to check if box touching surface and make it box
    drawSprites();
}
