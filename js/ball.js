class Ball {
    constructor(){
        this.speed = 1;
        this.jugadorSprite = createSprite(600, 400);
        this.jugadorSprite.addAnimation('ball','img/ball/ball.png','img/ball/ball2.png','img/ball/ball3.png','img/ball/ball4.png','img/ball/ball5.png','img/ball/ball6.png','img/ball/ball7.png','img/ball/ball8.png','img/ball/ball9.png','img/ball/ball10.png');
        this.jugadorSprite.changeAnimation('ball');
    }
    ballInici(){
        this.jugadorSprite.position.x = 600;
        this.jugadorSprite.position.y = 400;
    }
}