var player1 = null;
var player2 = null;
var game = null;
var wallTop = null;
var wallBottom = null;
var ball = null;
var MAX_SPEED = 10;


new p5(function (p) {

    p.preload = function () {
        p.game = new Game(p);
    }
    p.setup = function () {
        var myCanvas = p.createCanvas(1200, 800);
        myCanvas.parent("sketch01");
        p.bg = p.loadImage('img/pista.jpg');
        p.wallTop = p.createSprite(p.width / 2, -30 / 2, p.width, 30);
        p.wallTop.immovable = true;
        p.wallBottom = p.createSprite(p.width / 2, p.height + 30 / 2, p.width, 30);
        p.wallBottom.immovable = true;
        p.game.iniciar(p);
    }

    p.draw = function () {
        if (p.frameCount % 60 === 0 && p.game.timeGame > 0) {
            p.game.timeGame--;
        }
        if (p.game.player2.points !== 5 && p.game.player1.points !== 5) {
            if (p.game.timeGame !== 0) {
                p.background(p.bg);
                p.drawSprites();

                p.game.ball.ballSprite.bounce(p.wallTop);
                p.game.ball.ballSprite.bounce(p.wallBottom);

                p.game.movePlayers(p);
                p.game.ball.moure();
                let numero = p.game.ball.colisions(p.game.player1.jugadorSprite, p.game.player2.jugadorSprite, p);
                if (numero === 0) {
                    p.game.player2.points += 1;
                    p.game.player1.playerInici('player1');
                    p.game.player2.playerInici('player2');
                    console.log(p.game.player2.points);
                } else if (numero === 1) {
                    p.game.player1.points += 1;
                    p.game.player1.playerInici('player1');
                    p.game.player2.playerInici('player2');
                    console.log(p.game.player1.points);
                }
            } else {
                if (p.game.player2.points > p.game.player1.points) {
                    p.text("SANTA WIN", p.width / 2, p.height * 0.5);
                } else if (p.game.player2.points < p.game.player1.points) {
                    p.text("DINO WIN", p.width / 2, p.height * 0.5);
                } else {
                    p.text("EMPATE", p.width / 2, p.height * 0.5);
                }
            }
        } else {
            if (p.game.player2.points !== p.game.pointsWinGame) {
                p.text("DINO WIN", p.width / 2, p.height * 0.5);
            } else {
                p.text("SANTA WIN", p.width / 2, p.height * 0.5);
            }
        }
    }
    }, "sketch01");

new p5(function (e) {

    e.setup = function () {
        var myCanvas = e.createCanvas(300, 800);
        myCanvas.parent("sketch02");
    }

    e.draw = function () {
        e.text("Score: ", e.width / 2, e.height * 0.5);
    }
}, "sketch02");
