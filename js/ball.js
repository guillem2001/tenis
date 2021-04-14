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
        if(ball.ballSprite.bounce(player1)) {
            swing = (ball.ballSprite.position.y-player1.position.y)/3;
            ball.ballSprite.setSpeed(this.ballSprite.getSpeed(), ball.ballSprite.getDirection()+swing);
            /*this.changeDirection();*/
            console.log('hola');
            if(this.ballSprite.getSpeed() < this.ballSprite.maxSpeed){
                this.ballSprite.velocity.x = this.ballSprite.velocity.x*1.10;
                this.ballSprite.velocity.y = this.ballSprite.velocity.y*1.10;
            }
        }

        if(ball.ballSprite.bounce(player2)) {
            swing = (ball.ballSprite.position.y-player2.position.y)/3;
            ball.ballSprite.setSpeed(this.ballSprite.getSpeed(), ball.ballSprite.getDirection()-swing);
            if(this.ballSprite.getSpeed() < this.ballSprite.maxSpeed){
                this.ballSprite.velocity.x = this.ballSprite.velocity.x*1.10;
                this.ballSprite.velocity.y = this.ballSprite.velocity.y*1.10;
            }
            console.log(this.ballSprite.getSpeed());
        }

        if(ball.ballSprite.position.x<0) {
            ball.ballSprite.position.x = width/2;
            ball.ballSprite.position.y = height/2;
            ball.ballSprite.setSpeed(5, this.randomAngle());
        }

        if(ball.ballSprite.position.x>width) {
            ball.ballSprite.position.x = width/2;
            ball.ballSprite.position.y = height/2;
            ball.ballSprite.setSpeed(5, this.randomAngle());
        }
    }

}