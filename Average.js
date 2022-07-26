let img;
let color;

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

    color=(img.get(x,y)[0]+img.get(x,y)[1]+img.get(x,y)[2])/3

    img.set(x, y, color);
}