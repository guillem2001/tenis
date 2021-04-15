class Game {

    constructor() {
        this.player1 = new Player("player1");

        this.player2 = new Player("player2");

        this.pointsWinGame = 5;

        this.difficultLevel = 1;

        this.ball = new Ball();

        this.timeGame = 120;
    }

}