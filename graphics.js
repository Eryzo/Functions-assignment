// Functions for drawing

function stroke(style) {
    ctx.strokeStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function fill(style) {
    ctx.fillStyle = style;
}

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    }
}

function platform(x, y, color1, color2) {
    fill(color1)
    rect(x, y, 150, 5, "fill");
    fill(color2)
    rect(x, y + 5, 150, 15, "fill");

}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function star(x, y, color,) {
    stroke(color);
    lineWidth(3);
    line(x, y + 10, x - 20, y + 40);
    line(x, y + 10, x + 20, y + 40);
    line(x + 20, y + 40, x + 50, y + 40);
    line(x - 20, y + 40, x - 50, y + 40);
    line(x + 50, y + 40, x + 30, y + 70);
    line(x - 50, y + 40, x - 30, y + 70);
    line(x + 30, y + 70, x + 40, y + 100);
    line(x - 30, y + 70, x - 40, y + 100);
    line(x, y + 80, x - 40, y + 100);
    line(x, y + 80, x + 40, y + 100);
}

