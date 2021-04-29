var player1 = null;
var player2 = null;
var game = null;
var wallTop = null;
var wallBottom = null;
var ball = null;
var MAX_SPEED = 10;


new p5(p =>  {

    p.preload = function () {
        game = new Game(p);
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
                p.text("DINO WIN", p.width / 2, p.height * 0.5);
            } else {
                p.text("SANTA WIN", p.width / 2, p.height * 0.5);
            }
        }
    }
    }, "sketch01");

new p5(e =>  {

    e.setup = function () {
        let myCanvas = e.createCanvas(300, 800);
        myCanvas.parent("sketch01");
    }

    e.draw = function () {
        e.background(255, 204, 0);
        let s = "Score Dino: " + game.player1.points;
        let o = "Score Santa: " + game.player2.points;
        e.textSize(18);
        e.text(s, e.width / 2, e.height * 0.5);
        e.textSize(18);
        e.text(o, e.width / 2, e.height * 0.6);
        console.log(s);
    }
}, "sketch02");
