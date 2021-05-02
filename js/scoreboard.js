new p5(e =>  {

    e.setup = function () {
        let myCanvas = e.createCanvas(300, 800);
        myCanvas.parent("sketch01");
    }

    e.draw = function () {
        e.background(255, 204, 0);
        let s = "Score Dino: " + game.player1.points;
        let o = "Score Santa: " + game.player2.points;
        let t = "Time: " + game.timeGame;
        e.textSize(18);
        e.text(s, e.width / 2.4, e.height * 0.4);
        e.textSize(18);
        e.text(o, e.width / 2.4, e.height * 0.5);
        e.textSize(18);
        e.text(t, e.width / 2.4, e.height * 0.6);
    }
}, "sketch02");