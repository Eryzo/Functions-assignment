// Functions for drawing

function stroke(style) {
    ctx.strokeStyle = style;
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

function star(x, y, color) {
    stroke(color);
    line(x, y + 30, x + 20, y + 50);
}

