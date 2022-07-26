let img, img1, img2, img3, img4;        //backup de imagenes modificadas
let imgM1=false, imgM2=false, imgM3=false, imgM4=false;     //valores para omitir si ya esta modificada
let sel;

let color;
let Red, Green, Blue;

function preload() {
    img = loadImage('./perro.jpg');
    img1 = loadImage('./perro.jpg');
    img2 = loadImage('./perro.jpg');
    img3 = loadImage('./perro.jpg');
    img4 = loadImage('./perro.jpg');
}

function setup() {
    createCanvas(1000, 1000);

    sel = createSelect();
    sel.position(10, 10);
    sel.option('Average');
    sel.option('Luminance');
    sel.option('Desaturation');
    sel.option('Grayscale Algorithm');
    sel.option('Dithering');
    sel.disable('Dithering');
    sel.selected('Average');
    sel.changed(filternow);

    image(img, 0, 0);

    /*
    for (let i = 0; i < img.height; i++) {
        for (let j = 0; j < img.width; j++) {
                average(j, i);
                //luminance(j, i);
                //desaturation(j, i);
                //grayscale(j, i);
        }
    }
    img1.updatePixels();
    //img2.updatePixels();
    //img3.updatePixels();
    //img4.updatePixels();
    */
}

function filternow(){
    let item = sel.value();
    background(200);

    switch(item){
        case "Average": background(255);
        applyFilter(average); break;           //image(img1, 0, 0);
        case "Luminance": background(255);
        applyFilter(luminance); break;           //image(img2, 0, 0);
        case "Desaturation": background(255);
        applyFilter(desaturation); break;           //image(img3, 0, 0);
        case "Grayscale Algorithm": background(255);
        applyFilter(grayscale); break;           //image(img4, 0, 0);
    }

}

function applyFilter(funsion){          //aplica el filtro  ##falta la opcion para que omita si ya se hizo antes

    for (let i = 0; i < img.height; i++) {
        for (let j = 0; j < img.width; j++) {
                funsion(j, i);                  //aplicar filtro especifico
        }
    }
    funsion(0,0,true);                          //actualizar imagen especifica
}


function average(x, y, updateImg=false){
    if(updateImg){
        img1.updatePixels();
        imgM1=true;
        image(img1, 0, 0);
    }else{

        Red = img.get(x,y)[0];
        Green = img.get(x,y)[1];
        Blue = img.get(x,y)[2];
        
        color = (Red + Green + Blue)/3;

        img1.set(x, y, color);

    }
}

function luminance(x, y, updateImg=false){
    if(updateImg){
        img2.updatePixels();
        imgM2=true;
        image(img2, 0, 0);
    }else{

        Red = img.get(x,y)[0];
        Green = img.get(x,y)[1];
        Blue = img.get(x,y)[2];
        
        color = color = Red * 0.2126 + Green * 0.7152 + Blue * 0.0722;

        img2.set(x, y, color);

    }
}

function desaturation(x, y, updateImg=false){
    if(updateImg){
        img1.updatePixels();
        imgM3=true;
        image(img1, 0, 0);
    }else{

        Red = img.get(x,y)[0];
        Green = img.get(x,y)[1];
        Blue = img.get(x,y)[2];
        
        color = (Math.max(Red, Green, Blue) + Math.min(Red, Green, Blue))/2;

        img3.set(x, y, color);

    }
}

function grayscale(x, y, updateImg=false){
    if(updateImg){
        img1.updatePixels();
        imgM4=true;
        image(img1, 0, 0);
    }else{

        Red = img.get(x,y)[0];
        Green = img.get(x,y)[1];
        Blue = img.get(x,y)[2];
        
        ConversionFactor = 255 / (6 - 1)
        AverageValue = (Red + Green + Blue) / 3
        color = parseInt(AverageValue / ConversionFactor) * ConversionFactor

        img4.set(x, y, color);

    }
}