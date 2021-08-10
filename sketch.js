var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var database;

var form, player, game;


function setup() {

    createCanvas(500, 500);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw() {
    background("aliceblue");

    if (playerCount == 4) {
        game.updateState(1);
    }
    if (gameState == 1) {
        clear();
        game.play();
        
    }

}





