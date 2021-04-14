var player1 = null;
var player2 = null;
var wallTop = null;
var wallBottom = null;
var ball = null;
var MAX_SPEED = 10;
function setup() {
    createCanvas(1200, 800);
    bg = loadImage('img/pista.jpg');
    player1 = new Player('player1');
    player2 = new Player('player2');
    ball = new Ball();
    player1.playerInici('player1');
    player2.playerInici('player2');
    ball.ballInici();
    player1.jugadorSprite.immovable = true;
    player2.jugadorSprite.immovable = true;
    player1.jugadorSprite.setCollider('rectangle', 0, 2, 70, 175);
    player2.jugadorSprite.setCollider('rectangle', 0, 2, 70, 175);
    wallTop = createSprite(width/2, -30/2, width, 30);
    wallTop.immovable = true;

    wallBottom = createSprite(width/2, height+30/2, width, 30);
    wallBottom.immovable = true;
}


function draw() {
    background(bg);
    drawSprites();

    ball.ballSprite.bounce(wallTop);
    ball.ballSprite.bounce(wallBottom);
    player1.jugadorSprite.debug = mouseIsPressed;
    player2.jugadorSprite.debug = mouseIsPressed;
    ball.ballSprite.debug = mouseIsPressed;
    movePlayers();
    /*ball.rebota(player1.jugadorSprite);
    ball.rebota(player2.jugadorSprite);*/
    ball.moure();
    ball.colisions(player1.jugadorSprite,player2.jugadorSprite);


}

function movePlayers(){
    if (keyIsDown(UP_ARROW)) {
        player2.playerUp();
    }else if (keyIsDown(DOWN_ARROW)) {
        player2.playerDown();
    }else{
        player2.jugadorSprite.changeAnimation('stand');
    }
    if (keyIsDown(87)) {
        player1.playerUp();
    }else if (keyIsDown(83)) {
        player1.playerDown();
    }else{
        player1.jugadorSprite.changeAnimation('stand');
    }
}
