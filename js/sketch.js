var player1 = null;
var player2 = null;
var game = null;
var wallTop = null;
var wallBottom = null;
var ball = null;
var MAX_SPEED = 10;

function preload(){
    game = new Game();
}
function setup() {
    createCanvas(1200, 800);
    bg = loadImage('img/pista.jpg');
    game.player1.playerInici('player1');
    game.player2.playerInici('player2');
    game.ball.ballInici();
    game.player1.jugadorSprite.immovable = true;
    game.player2.jugadorSprite.immovable = true;
    game.player1.jugadorSprite.setCollider('rectangle', 0, 2, 70, 175);
    game.player2.jugadorSprite.setCollider('rectangle', 0, 2, 70, 175);
    wallTop = createSprite(width/2, -30/2, width, 30);
    wallTop.immovable = true;

    wallBottom = createSprite(width/2, height+30/2, width, 30);
    wallBottom.immovable = true;
}


function draw() {

    if (frameCount % 60 === 0 && game.timeGame > 0) {
        game.timeGame--;
    }
    if(game.player2.points !== 5 && game.player1.points !== 5) {
        if(game.timeGame !== 0) {
            background(bg);
            drawSprites();

            game.ball.ballSprite.bounce(wallTop);
            game.ball.ballSprite.bounce(wallBottom);

            movePlayers();
            game.ball.moure();
            let numero = game.ball.colisions(game.player1.jugadorSprite, game.player2.jugadorSprite);
            if (numero === 0) {
                game.player2.points += 1;
                game.player1.playerInici('player1');
                game.player2.playerInici('player2');
                console.log(game.player2.points);
            } else if (numero === 1) {
                game.player1.points += 1;
                game.player1.playerInici('player1');
                game.player2.playerInici('player2');
                console.log(game.player1.points);
            }
        }else{
            if(game.player2.points > game.player1.points){
                text("SANTA WIN", width / 2, height * 0.5);
            }else if (game.player2.points < game.player1.points){
                text("DINO WIN", width / 2, height * 0.5);
            }else{
                text("EMPATE", width / 2, height * 0.5);
            }
        }
    }else{
        if(game.player2.points !== game.pointsWinGame){
            text("DINO WIN", width / 2, height * 0.5);
        }else{
            text("SANTA WIN", width / 2, height * 0.5);
        }
    }
}

function movePlayers(){
    if (keyIsDown(UP_ARROW)) {
        game.player2.playerUp();
    }else if (keyIsDown(DOWN_ARROW)) {
        game.player2.playerDown();
    }else{
        game.player2.jugadorSprite.changeAnimation('stand');
    }
    if (keyIsDown(87)) {
        game.player1.playerUp();
    }else if (keyIsDown(83)) {
        game.player1.playerDown();
    }else{
        game.player1.jugadorSprite.changeAnimation('stand');
    }
}
