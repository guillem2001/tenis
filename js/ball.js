class Ball {
    constructor(){
        this.speed = 1;
        this.direction = 1;
        this.ballSprite = createSprite(600, 400);
        this.ballSprite.addAnimation('ball','img/ball/ball.png','img/ball/ball2.png','img/ball/ball3.png','img/ball/ball4.png','img/ball/ball5.png','img/ball/ball6.png','img/ball/ball7.png','img/ball/ball8.png','img/ball/ball9.png','img/ball/ball10.png');
        this.ballSprite.changeAnimation('ball');
    }
    ballInici(){
        this.ballSprite.position.x = 600;
        this.ballSprite.position.y = 400;
        this.ballSprite.setSpeed(10,0);
    }

    rebota(player) {
        this.ballSprite.bounce(player, this.changeDirection());
    }

    moure(){
        if(this.direction === 1){
            this.ballSprite.position.x += 1;
        }else{
            this.ballSprite.position.x -= 1;
        }
    }

    changeDirection(){
        if (this.direction === 1){
            this.direction = 0;
        }else{
            this.direction = 1;
        }
    }

}