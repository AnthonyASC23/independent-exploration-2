let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;

function setup() {
    createCanvas(500, 500);

    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(222);

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30); // Updated to ellipse

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 25); // Updated position

    // check if in goal
    if (yPos >= 470 && xPos >= 220 && xPos <= 280) { // Updated condition
        score++;
        // reset position and speed
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(1, 5); // Adjusted ySpeed range to avoid negative values
    }
    if (yPos + 15 >= height - 40 && xPos + 15 >= mouseX - 5 && xPos - 5 <= mouseX + 30) {
        score--;
    }

    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
    if (xPos < 0) {
        xPos = 500;
    }
    if (xPos > 500) {
        xPos = 0;
    }
    if (yPos > 500) {
        yPos = 0;
        score--;
    }
}

function mouseClicked() {
    // Bounce the ball in the opposite direction on click
    xSpeed = -xSpeed;
    ySpeed = random(1, 5); // Adjusted ySpeed range to avoid negative values
}
