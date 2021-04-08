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

    wallTop = createSprite(width/2, -30/2, width, 30);
    wallTop.immovable = true;

    wallBottom = createSprite(width/2, height+30/2, width, 30);
    wallBottom.immovable = true;
}


function draw() {
    background(bg);
    drawSprites();
    /*ball.rebotar(player1);
    ball.rebotar(player2);
    ball.ballsprite.collide(jugador1)*/
    movePlayers();
    ball.rebota(player1.jugadorSprite);
    ball.rebota(player2.jugadorSprite);
    ball.moure();

    /*ball.collide(wallTop);
    ball.collide(wallBottom);

    let swing;
    if(ball.collide(player1)) {
        swing = (ball.position.y-player1.position.y)/3;
        ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
    }

    if(ball.collide(player2)) {
        swing = (ball.position.y-player2.position.y)/3;
        ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
    }

    if(ball.position.x<0) {
        ball.position.x = width/2;
        ball.position.y = height/2;
        ball.setSpeed(MAX_SPEED, 0);
    }

    if(ball.position.x>width) {
        ball.position.x = width/2;
        ball.position.y = height/2;
        ball.setSpeed(MAX_SPEED, 180);
    }*/
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
