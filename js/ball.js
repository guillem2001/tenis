class Ball {
    constructor(){
        this.speed = 1;
        this.jugadorSprite = createSprite(600, 400);
        this.jugadorSprite.addAnimation('ball','img/ball/ball.png');
        this.jugadorSprite.changeAnimation('ball');
    }
    ballInici(){
        this.jugadorSprite.position.x = 600;
        this.jugadorSprite.position.y = 400;
    }
}