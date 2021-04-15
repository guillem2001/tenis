class Ball {
    constructor(){
        this.speed = 5;
        this.direction = 1;
        this.ballSprite = createSprite(600, 400);
        this.ballSprite.addAnimation('ball','img/ball/ball.png','img/ball/ball2.png','img/ball/ball3.png','img/ball/ball4.png','img/ball/ball5.png','img/ball/ball6.png','img/ball/ball7.png','img/ball/ball8.png','img/ball/ball9.png','img/ball/ball10.png');
        this.ballSprite.changeAnimation('ball');
        this.ballSprite.maxSpeed = 15;
    }
    ballInici(){
        this.ballSprite.position.x = 600;
        this.ballSprite.position.y = 400;
        this.ballSprite.setSpeed(5, this.randomAngle())
    }

    randomAngle(){
        let numero = 0;
        while(numero === 0){
            numero = random (-25,25);
        }
        return numero;
    }

    moure(){
        if(this.direction === 1){
            this.ballSprite.position.x += 1;
        }else{
            this.ballSprite.position.x -= 1;
        }
    }

    colisions(player1, player2){
        let swing;
        if(this.ballSprite.bounce(player1)) {
            swing = (this.ballSprite.position.y-player1.position.y)/3;
            this.ballSprite.setSpeed(this.ballSprite.getSpeed(), this.ballSprite.getDirection()+swing);
            if(this.ballSprite.getSpeed() < this.ballSprite.maxSpeed){
                this.ballSprite.velocity.x = this.ballSprite.velocity.x*1.10;
                this.ballSprite.velocity.y = this.ballSprite.velocity.y*1.10;
            }
        }

        if(this.ballSprite.bounce(player2)) {
            swing = (this.ballSprite.position.y-player2.position.y)/3;
            this.ballSprite.setSpeed(this.ballSprite.getSpeed(), this.ballSprite.getDirection()-swing);
            if(this.ballSprite.getSpeed() < this.ballSprite.maxSpeed){
                this.ballSprite.velocity.x = this.ballSprite.velocity.x*1.10;
                this.ballSprite.velocity.y = this.ballSprite.velocity.y*1.10;
            }
        }

        if(this.ballSprite.position.x<0) {
            this.ballInici();
            return 0;
        }

        if(this.ballSprite.position.x>width) {
            this.ballInici();
            return 1;
        }
    }

}