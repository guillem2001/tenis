
function setup() {
    createCanvas(1500, 800);
    bg = loadImage('img/pista.jpg');
    dino = createSprite(150, 150);
    santa = createSprite(1400, 150);
    santa.addAnimation('walk','img/santa/Idle (1).png','img/santa/Idle (2).png','img/santa/Idle (3).png','img/santa/Idle (4).png','img/santa/Idle (5).png','img/santa/Idle (6).png','img/santa/Idle (7).png','img/santa/Idle (8).png','img/santa/Idle (9).png','img/santa/Idle (10).png','img/santa/Idle (11).png','img/santa/Idle (12).png','img/santa/Idle (13).png','img/santa/Idle (14).png','img/santa/Idle (15).png');
    dino.addAnimation('walk','img/dino/Idle (1).png','img/dino/Idle (2).png','img/dino/Idle (3).png','img/dino/Idle (4).png','img/dino/Idle (5).png','img/dino/Idle (6).png','img/dino/Idle (7).png','img/dino/Idle (8).png','img/dino/Idle (9).png','img/dino/Idle (10).png');
}

function draw() {
    background(bg);
    santa.mirrorX(-1);
    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    drawSprites();
}

/*function keyPressed() {
    if (keyCode === UP_ARROW) {
        pacman.moveUpper();
    } else if (keyCode === DOWN_ARROW) {
        pacman.moveDown();
    }
    if (keyCode === LEFT_ARROW) {
        pacman.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        pacman.moveRight();
    }

}*/
