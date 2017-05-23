colors = [
    "#DE84D5",
    "#0DB4BE",
    "#8299CA",
    "#2C0537"
]
threshold = 0.1

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background("#2C0537")
    strokeWeight(2);
    stroke("FBFBFB");
}

function draw() {
    if(frameCount % 30 == 0){
        threshold += 0.04
    }

    if(random() < threshold){
        fill(255);
        rect(random(width), random(height), width/25, width/25);
    } else {
        fill(random(colors));
        ellipse(random(width), random(height), width/25, width/25);
    }
    fill(255);
}
