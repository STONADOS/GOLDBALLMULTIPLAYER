var ball, database, position;
var treasure, treasureposition;
var bullets;
var a = 1;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,50,50);
    ball.shapeColor = "gold";
    treasure = createSprite(500,500,50,50);
    var ballposition = database.ref('ball/position');
    ballposition.on("value", readPosition);
    var treasureposition = database.ref('treasure/position');
    treasureposition.on("value", readTreasure);

}

function draw(){
    background("red");
    if(position != undefined){
    if(keyDown("a")){
        writePosition(-5,0);
    }
    else if(keyDown("d")){
        writePosition(5,0);
    }
    else if(keyDown("w")){
        writePosition(0,-5);
    }
    else if(keyDown("s")){
        writePosition(0,+5);
    }
    // if (keyDown(UP_ARROW)){
        // bullets = createSprite(ball.x, ball.y, 20, 40);
        // writePositionofbullet(-5, 0)
        // var bulletposition = database.ref('bullets/position')
        // bulletposition.on("value", readbullet);
    // }

    camera.x = ball.x;
    camera.y = ball.y;

    textSize(20);
    text("PLAYER JISHNU", ball.x - 80, ball.y - 30);

    text("PLAYER MA'AM", treasure.x - 80, treasure.y - 30);

    // a = 1
    drawSprites();
}
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x + x,
        y:position.y + y
    });
}

// function writePositionofbullet(x,y){
    // database.ref('bullets1/position').set({
        // while(a == 1){
        // x:position.x + x,
        // y:position.y + y
        // }
    // });
// }

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function readTreasure(data){
    treasureposition = data.val();
    treasure.x = treasureposition.x;
    treasure.y = treasureposition.y;
}

// function readbullet(data){
    // bulletposition = data.val();
    // bullets.x = bulletposition.x;
    // bullets.y = bulletposition.y;
// }