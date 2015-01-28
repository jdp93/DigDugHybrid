/**
 * Created by Joseph on 1/26/2015.
 */
var terrX = 25;
var col = 0;
var row = 60;
function terrain(){
    ctx.drawImage(charImage, terrX, 415, 30, 30, col, row, 30, 30);
    if(col <= 570){
        col += 30;
    }
    else{
        if(row <= 570){
            col = 0;
            if(row == 180){
                terrX = 120;
            }
            if(row == 300){
                terrX = 210;
            }
            if(row == 450){
                terrX = 300;
            }
            row += 30;
        }
        else{
            terrX = 25;
            row = 60;
            col = 0;
        }
    }
}
var randX;
var randY;
function initEmpty(){
    for(var i = 0; i < 20; i++){
        for(var j = 0; j < 20; j++){
            if(j<2) {
                empty[i][j] = 1;
            }
            else{
                empty[i][j] = 0;
            }
        }
    }
    for(var k = 2; k < 10; k++) {
        empty[9][k] = 1;
    }
    randX = Math.floor(Math.random()*4+1);
    randY = Math.floor(Math.random()*6+4);
    initEnemy(randX, randY);
    empty[randX][randY] = 3;
    empty[randX+1][randY] = 1;
    empty[randX+2][randY] = 1;
    empty[randX+3][randY] = 1;

    randX = Math.floor(Math.random()*4+11);
    randY = Math.floor(Math.random()*6+11);
    initEnemy(randX, randY);
    empty[randX][randY] = 3;
    empty[randX+1][randY] = 1;
    empty[randX+2][randY] = 1;
    empty[randX+3][randY] = 1;

    randX = Math.floor(Math.random()*6+1);
    randY = Math.floor(Math.random()*5+10);
    initEnemy(randX, randY);
    empty[randX][randY] = 3;
    empty[randX][randY+1] = 1;
    empty[randX][randY+2] = 1;
    empty[randX][randY+3] = 1;

}
function updateEmpty(){
    for(var i = 0; i < 20; i++){
        for(var j = 0; j < 20; j++){
            if(empty[i][j] == 1){
                ctx.fillStyle = "black";
                ctx.fillRect(i*30, j*30, 30, 30);
            }
        }
    }
}
