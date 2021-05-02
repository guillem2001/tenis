var player1 = null;
var player2 = null;
var game = null;
var wallTop = null;
var wallBottom = null;
var ball = null;


new p5(p =>  {

    p.preload = function () {
        game = new Game(p, 2, 2, 1);
        p.game = game;
    }
    p.setup = function () {
        let myCanvas = p.createCanvas(1200, 800);
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
                p.textSize(18);
                p.text("DINO WIN", p.width / 2, p.height * 0.5);
                p.game.timeGame = 0;
            } else {
                p.textSize(18);
                p.text("SANTA WIN", p.width / 2, p.height * 0.5);
                p.game.timeGame = 0;
            }
        }
    }
    }, "sketch01");

