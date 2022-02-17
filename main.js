// Draw functions assignent 

let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

// Draw platforms 
platform(300, 150, "green", "brown");
platform(500, 300, "cyan", "lightgrey");
platform(700, 600, "black", "red");

// Draw stars

star(10, 10, "yellow");