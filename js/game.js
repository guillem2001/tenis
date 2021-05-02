class Game {

    constructor(p, points, difficult, time) {
        this.player1 = new Player("player1",p);

        this.player2 = new Player("player2",p);

        this.ball = new Ball(this.difficultLevel,p);

        if(points === 1){
            this.pointsWinGame = 3;
        }else if(points === 2){
            this.pointsWinGame = 5;
        }else{
            this.pointsWinGame = 7;
        }

        if(difficult === 1){
            this.difficultLevel = 1;
        }else if(difficult === 2){
            this.difficultLevel = 2;
        }else {
            this.difficultLevel = 3;
        }

        if(time === 1){
            this.timeGame = 80;
        }else if(time === 2){
            this.timeGame = 100;
        }else {
            this.timeGame = 120;
        }
    }

    iniciar(p){
        this.player1.playerInici('player1');
        this.player2.playerInici('player2');
        this.ball.ballInici(p);
        this.player1.jugadorSprite.immovable = true;
        this.player2.jugadorSprite.immovable = true;
        this.player1.jugadorSprite.setCollider('rectangle', 0, 2, 70, 175);
        this.player2.jugadorSprite.setCollider('rectangle', 0, 2, 70, 175);
    }

    movePlayers(p){
        if (p.keyIsDown(p.UP_ARROW)) {
            this.player2.playerUp();
        }else if (p.keyIsDown(p.DOWN_ARROW)) {
            this.player2.playerDown();
        }else{
            this.player2.jugadorSprite.changeAnimation('stand');
        }
        if (p.keyIsDown(87)) {
            this.player1.playerUp();
        }else if (p.keyIsDown(83)) {
            this.player1.playerDown();
        }else{
            this.player1.jugadorSprite.changeAnimation('stand');
        }
    }

}