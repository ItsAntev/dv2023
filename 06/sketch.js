console.log ('JS LOAD!')

let dpi;
let w;
let wcm;
let raggio;
let r2;
let f2;
let ml;
let hgt;
let hgt2;
let pxh;


function setup (){
    createCanvas(windowWidth, windowHeight);
    shared=true;
    dpi = pixelDensity();
    w = windowWidth / dpi;
    wcm = w * 2.54;
    raggio = wcm / 200;
    r2 = raggio * raggio;
    f2 = 3.14 * r2;
    ml = 85;
    hgt = ml / f2;
    hgt2 = pixelDensity() / 0.39;
    pxh = hgt * hgt2 * 2;
    console.log(`Size: ${pxh.toFixed(2)}`);
    
}

function draw (){
  background(0);
  fill(255,0,0);
   const rectHeight = pxh;
   const rectWidth = windowWidth;
   const centerX = width / 2;
   const canvasBottom = height;
   const rectX = centerX - rectWidth / 2;
   const rectY = canvasBottom - rectHeight;
    rect(rectX, rectY, rectWidth, rectHeight);
  
   }
  
 

   


