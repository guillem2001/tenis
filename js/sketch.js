var player1 = null;
var player2 = null;
function setup() {
    createCanvas(1200, 800);
    bg = loadImage('img/pista.jpg');
    player1 = new Player('player1');
    player2 = new Player('player2');
    player1.playerInici('player1');
    player2.playerInici('player2');
}


function draw() {
    background(bg);
    drawSprites();
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

/*function keyPressed() {
    if (keyCode === UP_ARROW) {
        player1.playerUp();
    } else if (keyCode === DOWN_ARROW) {
        player1.playerDown();
    }

    if(keyWentDown('x')){
        player2.playerUp();
    }else if(keyCode === 's'){
        player2.playerDown();
    }

}*/
