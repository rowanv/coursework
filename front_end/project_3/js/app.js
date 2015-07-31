'strict mode';
//TODO: Fix the win state logic



PLAYER_START_X = 200
PLAYER_START_Y = 420

GEM_X = Math.random() * 200
GEM_Y = Math.random() * 200

var allCollectibles = [];
var firstEnemy;
var secondEnemy;
var thirdEnemy;
var someGem;
var allEnemies;
var player;
var score;
var life_counter = 5;

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.width = 100;
    this.height = 100;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);


}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



/* Items */

var Collectible = function(type, x, y){
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = 100;
    this.height = 100;

    if (this.type = 'star'){
        this.image = 'images/Star.png';
    }
    else if (this.type = 'orange_gem'){
        this.image = 'images/Gem Orange.png';
    }
}

Collectible.prototype.update = function(dt){
    this.x = this.x;
}

Collectible.prototype.render = function(){
    ctx.drawImage(Resources.get(this.image), this.x, this.y);
}
/*
var Gem = function(x, y){
    this.x = x;
    this.y = y;
    this.gem = 'images/Gem Orange.png';
}

Gem.prototype.update = function(dt){
    this.x = this.x;
}


Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.gem), this.x, this.y);
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Star = function(x, y){
    this.x = x;
    this.y = y;
    this.star = 'images/Star.png'
}
Star.prototype.update = function(dt){
    this.x = this.x;
}

Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.star), this.x, this.y);
}*/

var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.boy = 'images/char-boy.png';
    this.win_state = 'not win';
    this.width = 100;
    this.height = 100;
}

Player.prototype.update = function(dt) {
    //this.x = this.x + (this.speed * dt);

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.boy), this.x, this.y);
}

Player.prototype.handleInput = function(e) {
    console.log(e);
    console.log('X position:' + this.x + ' Y position:' + this.y);
    console.log('Life Counter' + life_counter);
    collideTest();

    switch(e){
    case 'right':
        if ((this.x + 100) > 400){
            console.log('Invalid key - would send player off canvas');
        }
        else {
        this.x += 100;
        }
        break;
    case 'left':
        if ((this.x - 100) < 0) {
            console.log('Invalid key - would send player off canvas');
        }
        else {
        this.x -= 100;
        }
        break;
    case 'up':
        if ((this.y - 100) < -100) {
            console.log('Invalid key - would send player off canvas');
        }
        //Win the game if make it to last row
        else if (this.y  <= 20){
            console.log('You win!');
            player.win_state = 'win';
            this.y -=100;
            }
        else {
            this.y -= 100;
        }
        break;
    case 'down':
        //Avoid moving player off of canvas
        if ((this.y + 100) > 500){
            console.log('Invalid key - would send player off canvas');
        }

        else {
            this.y += 100;
        }
        break;
    }
}


function collideTest(a_item, b_item){
    if (a_item != undefined && b_item != undefined) {
        return a_item.x < b_item.x + b_item.width &&
        a_item.x + a_item.width > b_item.x &&
        a_item.y < b_item.y + b_item.height &&
        a_item.y + a_item.height > b_item.y;
    }


    /*for (enemy in allEnemies){
        if ((Math.abs(allEnemies[enemy].x - player.x) < 50 ) & (Math.abs(allEnemies[enemy].y - player.y) < 50)){
        console.log('A collision occurred');
        }
        console.log(allEnemies[enemy].x);
    }*/
}

function checkForCollisions() {
    allEnemies.forEach(function(enemy) {
            if (collideTest(enemy, player)){
                console.log('A Collision occurred');
                life_counter -= 1;
                startGame();
                console.log('Life Counter ' + life_counter);
            }
        });
    allCollectibles.forEach(function(collectible){
        if (collideTest(collectible, player) && collectible.type == 'star'){
            life_counter += 1;
            clearScoreCanvas();
            console.log('Hit a star');
            allCollectibles.pop();
        }
    });



}

function checkIfOnWater() {
    if (player.y <= 100){
        console.log('You win!');
        player.win_state = 'win';
        ctx.fillText('You win!', 400/2, 40);
        startGame();
    }

}

function loseTest(){
    if (life_counter <= 0){
        ctx.fillText('Try again!', 200, 40);
        startGame();
    }
}

function clearText(){
    if (player.y <= 320){
        ctx.clearRect(200, 0, 200, 50);
    }
}

function renderLives(){
    ctx.fillText(life_counter, 70, 40);
}


function itemsAppear(){
    randInt = Math.floor(Math.random() * 1000000 + 1);
    if (randInt % 10000 == 0){
        console.log(randInt);
        console.log('Divisible by 10');
    }
}

function clearScoreCanvas(){
    ctx.clearRect(0, 0, 100, 50);
    ctx.fillText('Lives:', 0, 40);
}
/*function winTest(){
    if (player.win_state = 'win'){
        console.log('Restarting new instance of game');
    }
}*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player




function startGame(){
    firstEnemy = new Enemy(0, 100);
    secondEnemy = new Enemy(20, 50);
    thirdEnemy = new Enemy(150, 20);
    someStar = new Collectible('star', 100, 230);
    allEnemies =  [firstEnemy, secondEnemy, thirdEnemy];
    allCollectibles.push(someStar);
    player = new Player(PLAYER_START_X, PLAYER_START_Y);
    score = 0;
    ctx.font = 'bold 20pt Calibri';
    ctx.fillStyle = 'black';
    clearScoreCanvas(); //clears the score area



}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
