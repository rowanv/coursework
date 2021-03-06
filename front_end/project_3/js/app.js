


var PLAYER_START_X = 200;
var PLAYER_START_Y = 400;
var LADYBUG_SPEED = 80;


var allCollectibles = [];
var allGems = [];
var firstEnemy;
var secondEnemy;
var thirdEnemy;
var someGem;
var someStar;
var allEnemies;
var player;
var score;
var life_counter = 5;
var gem_counter = 0;

// Enemies our player must avoid
var Enemy = function(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
    this.speed = LADYBUG_SPEED;
    this.width = 97;
    this.height = 63;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position,
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    'use strict';
    // multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



/* Items */


var Collectible = function(type, x, y) {
    'use strict';
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = 100;
    this.height = 100;

    if (this.type === 'star') {
        this.image = 'images/Star.png';
        this.width = 101;
        this.height = 101;
    }
    else if (this.type === 'orange_gem') {
        this.image = 'images/Gem Orange.png';
        this.width = 90;
        this.height = 101;
    }
};



Collectible.prototype.render = function(){
    'use strict';
    ctx.drawImage(Resources.get(this.image), this.x, this.y);
};


var Player = function(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
    this.boy = 'images/char-boy.png';
    this.win_state = 'not win';
    this.width = 63;
    this.height = 63;
};

Player.prototype.update = function() {
    //this.x = this.x + (this.speed * dt);
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.boy), this.x, this.y);
};

Player.prototype.handleInput = function(e) {
    console.log('X position:' + this.x + ' Y position:' + this.y);
    console.log('Life Counter' + life_counter);
    collideTest();

    switch(e) {
    case 'right':
        if ((this.x + 100) > 400) {
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
        else if (this.y  <= 70){
            console.log('You win!');
            player.win_state = 'win';
            this.y -= 82;
            }
        else {
            this.y -= 82;
            }
        break;
    case 'down':
        //Avoid moving player off of canvas
        if (this.y  >= 400){
            console.log('Invalid key - would send player off canvas');
            }

        else {
            this.y += 82;
            }
        break;
    }
};

Player.prototype.checkIfOnWater = function() {
    'use strict';
    if (player.y <= 70 && gem_counter >= 3){
        console.log('You win!');
        player.win_state = 'win';
        ctx.fillText('You win!', 200, 40);
        gem_counter = 0;
        startGame();
    }
    else if (player.y <= 70 && gem_counter < 3){
        console.log('Insufficient gems - you cannot win the game until you have 3 gems AND have reached the water');
        ctx.fillText('Get more gems', 400/2, 40);
    }
};


var collideTest = function(a_item, b_item){
    'use strict';
    if (a_item !== undefined && b_item !== undefined) {
        return a_item.x < b_item.x + b_item.width &&
            a_item.x + a_item.width > b_item.x &&
            a_item.y < b_item.y + b_item.height &&
            a_item.y + a_item.height > b_item.y;
    }
};

var checkForCollisions = function() {
    'use strict';
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
    allGems.forEach(function(gem){
        if (collideTest(gem, player) && gem.type == 'orange_gem'){
            gem_counter += 1;
            console.log('Got a gem');
            allGems.pop();
            someGem = new Collectible('orange_gem', randomCoordinate(), randomCoordinate());
            allGems.push(someGem);
        }
    });
};


var loseTest = function(){
    'use strict';
    if (life_counter <= 0){
        ctx.fillText('Try again!', 200, 40);
        startGame();
    }
};

var clearText = function(){
    'use strict';
    if (player.y <= 320){
        ctx.clearRect(200, 0, 200, 50);
    }
};

var renderLives = function(){
    'use strict';
    ctx.fillText(life_counter, 70, 40);
};


var itemsAppear = function(){
    'use strict';
    var randInt = Math.floor(Math.random() * 1000000 + 1);
    if (randInt % 10000 === 0){
        console.log(randInt);
        console.log('Divisible by 10');
        someStar = new Collectible('star', randomCoordinate(), randomCoordinate());
        allCollectibles.push(someStar);
    }
};

var clearScoreCanvas = function(){
    'use strict';
    ctx.clearRect(0, 0, 100, 50);
    ctx.fillText('Lives:', 0, 40);
};

var randomCoordinate = function(){
    'use strict';
    var randCoord = Math.floor(Math.random() * 4 + 1);
    console.log(randCoord * 101);
    return randCoord * 101;
};


var wrapEnemiesScreen = function(allEnemies){
    'use strict';
    /* Sends enemies back to the left side of the screen when
    they have gone off the right side */
    firstEnemy = allEnemies[0];
    secondEnemy = allEnemies[1];
    thirdEnemy = allEnemies[2];
    if (firstEnemy.x >=500){
        firstEnemy = new Enemy(-100, 60);
    }
    else if (secondEnemy.x >= 500){
        secondEnemy = new Enemy(-100, 145);
    }
    else if (thirdEnemy.x >= 500){
        thirdEnemy = new Enemy(-100, 225);
    }
    return [firstEnemy, secondEnemy, thirdEnemy];
};

var startGame = function(){
    'use strict';
    firstEnemy = new Enemy(0, 66);
    secondEnemy = new Enemy(20, 145);
    thirdEnemy = new Enemy(150, 225);
    someGem = new Collectible('orange_gem', randomCoordinate(), randomCoordinate());
    allEnemies =  [firstEnemy, secondEnemy, thirdEnemy];
    if (allGems.length < 1){
        allGems.push(someGem);
    }
    player = new Player(PLAYER_START_X, PLAYER_START_Y);
    score = 0;
    ctx.font = 'bold 20pt Calibri';
    ctx.fillStyle = 'black';
    clearScoreCanvas(); //clears the score area
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
