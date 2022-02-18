// Draw functions assignent 

let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

// Draw platforms 
platform(300, 150, "green", "brown");
platform(100, 600, "purple", "lightgrey");
platform(700, 400, "black", "red");

// Draw stars
star(100, 50, "yellow");
star(900, 50, "pink");
star(500, 400, "black");