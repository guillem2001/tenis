class Game {

    constructor() {
        this.player1 = new Player("player1");

        this.player2 = new Player("player2");

        this.ball = new Ball(this.difficultLevel);

        this.pointsWinGame = 5;

        this.difficultLevel = 2;

        this.timeGame = 120;
    }

}