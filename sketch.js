rect_width = 0;
threshold = 0;
colors = [
    "#DE84D5",
    "#0DB4BE",
    "#8299CA"
]


function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('sketch-holder');
    rect_width = width/25;
    background("#FBFBFB")
    strokeWeight(8);
    stroke(255);
}

function draw() {
    if(threshold <= 1){
        drawSquares();
    } else {
        remove();
    }
}

function drawSquares(){
    if (frameCount % 60 == 0){
        threshold += 0.1;
    }

    if(frameCount % 10 == 0){
        for(var i=0; i<height; i += rect_width){
            for(var j=0; j<width; j += rect_width){
                if (random() <= threshold){
                    fill(255);
                } else {
                    fill(random(colors));
                }
                rect(j, i, rect_width, rect_width);
            }
        }
    }
}
