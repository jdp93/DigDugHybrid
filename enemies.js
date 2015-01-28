/**
 * Created by Joseph on 1/26/2015.
 */
var i = 0;
var moved;
function initEnemy(x, y){
    enemy[i][0] = x*30;
    enemy[i][1] = y*30;
    enemy[i][2] = 5;
    enemy[i][3] = 95;
    i++;
}
function drawEnemies(){
    for(var a = 0; a < enemy.length; a++){
        ctx.drawImage(charImage, enemy[a][2], enemy[a][3], 30, 30, enemy[a][0], enemy[a][1], 30, 30);
    }
}
var prevX;
var prevY;
function move(){
    for(var a = 0; a < enemy.length; a++){
        moved = 0;
        prevX = enemy[a][0];
        prevY = enemy[a][1];
        if (enemy[a][0] < playerX) {
            tryRight(a);
        }
        if (enemy[a][0] > playerX && moved == 0) {
            tryLeft(a);
        }
        if (enemy[a][1] < playerY && moved == 0) {
            tryDown(a);
        }
        if (enemy[a][1] > playerY && moved == 0) {
            tryUp(a);
        }
        if (moved == 1) {
            empty[prevX / 30][prevY / 30] = 1;
            empty[enemy[a][0]][enemy[a][1]] = 3;
        }
        if(enemy[a][0] == playerX && enemy[a][1] == playerY){
            gameOver();
        }
    }
}

function tryRight(a){
    if((enemy[a][0])/30 != 19) {
        if (empty[(enemy[a][0] / 30) + 1][enemy[a][1] / 30] == 1 ||empty[(enemy[a][0] / 30) + 1][enemy[a][1] / 30] == 2){
            enemy[a][0] +=  30;
            moved = 1;
        }
    }
}
function tryLeft(a){
    if(enemy[a][0]/30 != 0) {
        if (empty[(enemy[a][0] / 30) - 1][enemy[a][1] / 30] == 1 ||empty[(enemy[a][0] / 30) - 1][enemy[a][1] / 30] == 2){
            enemy[a][0] += -30;
            moved = 1;
        }
    }
}
function tryUp(a){
    if(enemy[a][1]/30 != 1) {
        if (empty[(enemy[a][0] / 30)][(enemy[a][1] / 30) - 1] == 1 ||empty[enemy[a][0] / 30][(enemy[a][1] / 30) - 1] == 2){
            enemy[a][1] += -30;
            moved = 1;
        }
    }
}
function tryDown(a){
    if(enemy[a][1]/30 != 19) {
        if (empty[enemy[a][0] / 30][(enemy[a][1] / 30) + 1] == 1 ||empty[enemy[a][0] / 30][(enemy[a][1] / 30) + 1] == 2){
            enemy[a][1] += 30;
            moved = 1;
        }
    }
}
