var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
var charImage = new Image();
charImage.ready = false;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR;

function setAssetReady()
{
    this.ready = true;
}

var preloader = setInterval(preloading, TIME_PER_FRAME);
var currX, currY;

window.addEventListener("keydown", doKeyDown, true);
window.addEventListener("keyup", doKeyUp, true);
function preloading()
{
    if (charImage.ready)
    {
        clearInterval(preloader);
        init();
        setInterval(update, 400);
    }
}
function init(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, stage.width, stage.height);
    for(var r = 0; r < 377; r++)
    {
        terrain();
    }
    initEmpty();
}
function update() {
    if(finished == 0) {
        updateEmpty();
        ctx.drawImage(charImage, currX, currY, 30, 30,
            playerX, playerY, 30, 30);
        drawEnemies();
        move();
        displayScore();
    }
}
function update2(){
    updateEmpty();
    ctx.drawImage(charImage, currX, currY, 30, 30,
        playerX, playerY, 30, 30);
    drawEnemies();
    displayScore();
}
currX = 180;
currY = 5;
playerX = 270;
playerY = 300;
var finished = 0;
var step = 0;
var lastAction = 0;
function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(playerX, playerY, 30, 30);
}
function moveLeft(){
    if(playerX != 0) {
        clear();
        playerX += -30;
        if (step == 0) {
            currX = 180;
            currY = 5;
            step = 1;
        }
        else {
            currX = 210;
            currY = 5;
            step = 0;
        }
        lastAction = 1;
    }
}
function moveRight(){
    if(playerX != 570) {
        clear();
        playerX += 30;
        if (step == 0) {
            currX = 95;
            currY = 490;
            step = 1;
        }
        else {
            currX = 65;
            currY = 490;
            step = 0;
        }
        lastAction = 2;
    }
}
function moveUp(){
    if(playerY != 0) {
        clear();
        playerY += -30;
        if (lastAction == 2) {
            if (step == 0) {
                currX = 425;
                currY = 550;
                step = 1;
            }
            else {
                currX = 455;
                currY = 550;
                step = 0;
            }
        }
        else {
            if (step == 0) {
                currX = 425;
                currY = 460;
                step = 1;
            }
            else {
                currX = 395;
                currY = 460;
                step = 0;
            }
        }
    }
}
function moveDown(){
    if(playerY != 570) {
        clear();
        playerY += 30;
        if (lastAction == 2) {
            if (step == 0) {
                currX = 155;
                currY = 490;
                step = 1;
            }
            else {
                currX = 125;
                currY = 490;
                step = 0;
            }
        }
        else {
            if (step == 0) {
                currX = 120;
                currY = 5;
                step = 1;
            }
            else {
                currX = 150;
                currY = 5;
                step = 0;
            }
        }
    }
}
var keyReleased = 1;
var score = 0;
function doKeyDown(e) {
    if(keyReleased == 1 && finished == 0) {
        //empty[playerX / 30][playerY / 30] = 1;
        //checks up arrow
        if (e.keyCode == 38) {
            moveUp();
        }
        //checks down arrow
        if (e.keyCode == 40) {
            moveDown();
        }
        //checks right arrow
        if (e.keyCode == 39) {
            moveRight();
        }
        //checks left arrow
        if (e.keyCode == 37) {
            moveLeft();
        }
        if(finished == 0) {
            update2();
        }
        if (empty[playerX/30][playerY/30] == 0) {
            score += 100;
        }
        keyReleased = 0;
        empty[playerX / 30][playerY / 30] = 2;
    }
}
function doKeyUp(){
    keyReleased = 1;
}
function gameOver(){
    finished = 1;
    ctx.fillStyle = "white";
    ctx.font = "bold 20px sans-serif";
    ctx.fillRect(0,0,150,60);
    ctx.fillStyle = "#000";
    ctx.fillText("GAME OVER", 0, 30);
}
function displayScore(){
    ctx.fillStyle = "black";
    ctx.font = "bold 10px sans-serif";
    ctx.fillRect(250,0,90,30);
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+ score, 250, 15);
}
