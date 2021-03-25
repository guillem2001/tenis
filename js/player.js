const PLAYER_ANCHO = 200;
const PLAYER_ALTO = 300;
class Player {
    constructor(jugador) {
        this.points = 0;
        this.name = jugador;
        if(jugador ==='player2'){
            this.jugadorSprite = createSprite(150, 150, PLAYER_ANCHO, PLAYER_ALTO);
            this.jugadorSprite.addAnimation('stand','img/santa/Idle (1).png','img/santa/Idle (2).png','img/santa/Idle (3).png','img/santa/Idle (4).png','img/santa/Idle (5).png','img/santa/Idle (6).png','img/santa/Idle (7).png','img/santa/Idle (8).png','img/santa/Idle (9).png','img/santa/Idle (10).png','img/santa/Idle (11).png','img/santa/Idle (12).png','img/santa/Idle (13).png','img/santa/Idle (14).png','img/santa/Idle (15).png');
            this.jugadorSprite.addAnimation('run','img/santa/Run (1).png','img/santa/Run (2).png','img/santa/Run (3).png','img/santa/Run (4).png','img/santa/Run (5).png','img/santa/Run (6).png','img/santa/Run (7).png','img/santa/Run (8).png','img/santa/Run (9).png','img/santa/Run (10).png','img/santa/Run (11).png');
            this.jugadorSprite.addAnimation('dead','img/santa/Dead (1).png','img/santa/Dead (2).png','img/santa/Dead (3).png','img/santa/Dead (4).png','img/santa/Dead (5).png','img/santa/Dead (6).png','img/santa/Dead (7).png','img/santa/Dead (8).png','img/santa/Dead (9).png','img/santa/Dead (10).png','img/santa/Dead (11).png','img/santa/Dead (12).png','img/santa/Dead (13).png','img/santa/Dead (14).png','img/santa/Dead (15).png','img/santa/Dead (16).png','img/santa/Dead (17).png');
            this.jugadorSprite.addAnimation('walk','img/santa/Walk (1).png','img/santa/Walk (2).png','img/santa/Walk (3).png','img/santa/Walk (4).png','img/santa/Walk (5).png','img/santa/Walk (6).png','img/santa/Walk (7).png','img/santa/Walk (8).png','img/santa/Walk (9).png','img/santa/Walk (10).png','img/santa/Walk (11).png','img/santa/Walk (12).png','img/santa/Walk (13).png');
        }else{

            this.jugadorSprite = createSprite(1150, 150, PLAYER_ANCHO, PLAYER_ALTO);
            //this.jugadorSprite = createSprite(1100, 150, PLAYER_ANCHO, PLAYER_ALTO);
            this.jugadorSprite.addAnimation('stand','img/dino/Idle (1).png','img/dino/Idle (2).png','img/dino/Idle (3).png','img/dino/Idle (4).png','img/dino/Idle (5).png','img/dino/Idle (6).png','img/dino/Idle (7).png','img/dino/Idle (8).png','img/dino/Idle (9).png','img/dino/Idle (10).png');
            this.jugadorSprite.addAnimation('run','img/dino/Run (1).png','img/dino/Run (2).png','img/dino/Run (3).png','img/dino/Run (4).png','img/dino/Run (5).png','img/dino/Run (6).png','img/dino/Run (7).png','img/dino/Run (8).png');
            this.jugadorSprite.addAnimation('dead','img/dino/Dead (1).png','img/dino/Dead (2).png','img/dino/Dead (3).png','img/dino/Dead (4).png','img/dino/Dead (5).png','img/dino/Dead (6).png','img/dino/Dead (7).png','img/dino/Dead (8).png');
            this.jugadorSprite.addAnimation('walk','img/dino/Walk (1).png','img/dino/Walk (2).png','img/dino/Walk (3).png','img/dino/Walk (4).png','img/dino/Walk (5).png','img/dino/Walk (6).png','img/dino/Walk (7).png','img/dino/Walk (8).png','img/dino/Walk (9).png','img/dino/Walk (10).png');
        }
        this.jugadorSprite.changeAnimation('stand');
    }

    playerInici(jugador){
        if(jugador ==='player2'){
            this.jugadorSprite.position.x = 100;
            this.jugadorSprite.position.y = 600;
        }else{
            this.jugadorSprite.position.x = 1150;
            this.jugadorSprite.position.y = 600;
        }
    }

}