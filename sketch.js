//create a program that enables us to customize the number of squares in a grid
let gif;//let "gif;" for gif

function preload (){
  gif = loadImage ('../assets/Iceberg_Gif.gif');
}

function setup() {//runs once
createCanvas (windowWidth, windowWidth);//creates a canvas that is 720 pixels
//background (249,160,160);
}

function draw() {//runs in a loop
fill(207,223,242);//fills grid RGB color
strokeWeight (1);//assigns stroke weight

var num = 7;  //number of sides in the array
var sideLen = windowWidth/num; //side length variable

translate (-100, -100);//translation creates a bleed effect

for (var y = 0; y < 2 * windowWidth; y = y + sideLen ){
for (var x = 0; x < 2 * windowWidth; x = x + sideLen){
image(gif, x, y, windowWidth/num, windowWidth/num);//gif for gif
//  quad(x,y,
//      x + sideLen, y,
//      x + sideLen, y + sideLen,
//      x, y + sideLen);
}
}
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}
