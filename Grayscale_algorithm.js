let img;
let color;

let Red;
let Green;
let Blue;

function preload() {
    img = loadImage('./perro.jpg');
}

function setup() {
    createCanvas(1000, 1000);

    for (let i = 0; i < img.height; i++) {
        for (let j = 0; j < img.width; j++) {
                deform(j, i);
        }
    }
    img.updatePixels();
    image(img, 0, 0);
}

function deform(x, y){

    Red = img.get(x,y)[0];
    Green = img.get(x,y)[1];
    Blue = img.get(x,y)[2];
    
    ConversionFactor = 255 / (6 - 1)
    AverageValue = (Red + Green + Blue) / 3
    color = parseInt(AverageValue / ConversionFactor) * ConversionFactor

    img.set(x, y, color);
}