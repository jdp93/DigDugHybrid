var STAGE_WIDTH = 600,
    STAGE_HEIGHT = 600,
    TIME_PER_FRAME = 16;

var PATH_CHAR = "./images/SpriteSheet.png";

var empty = new Array(20);
for(var u = 0; u < 20; u++){
    empty[u] = new Array(20);
}
var enemy = new Array(3);
enemy[0] = new Array(4);
enemy[1] = new Array(4);
enemy[2] = new Array(4);

var playerX = 270;
var playerY = 300;
