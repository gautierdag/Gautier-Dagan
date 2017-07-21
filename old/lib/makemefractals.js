var escaperadius = 10;

function calulateColor(i, width, height) {
    
    
    var cnumb = getCoord(i, width, height);
    var a = cnumb.real;
    var bi = cnumb.imaginary;
        
    var x = document.getElementById("frm1");
    var amax = Number(x.elements[0].value);
    var amin = Number(x.elements[1].value);
    var bimax = Number(x.elements[2].value);
    var bimin = Number(x.elements[3].value);

    a = ((a * (amax - amin)) / width) + amin;
    bi = ((bi * (bimax - bimin)) / height) + bimin;

    var Red = 0;
    var Blue = 0;
    var Green = 0;
    var Alpha = 255;
    var loopcount = 0;
    
   var z = math.complex(a, bi);   
    var zzero = z;

    while (loopcount < 50) //to show different colors for both cases depending on distance from 0,0
    {
    var zbefore = z; 
    z = math.add(math.multiply(z,z), zzero);        
    
    var zpol = z.toPolar();    
    
    if(zpol.r < escaperadius){
    
    }
        
    if (zpol.r > escaperadius){   
    Blue= Blue+30;
    if(Blue > 255){
    Green = Green +50;
    Red = Red + 20;
    Alpha = Alpha - 1;
    }}
    loopcount++;   
    }
    var mcolor = {r:Red, g:Green, b:Blue, a:Alpha};
    	return mcolor; //return custom color object
}

function getCoord(i, width, height){//needs to return a and bi at i (coordinates on the plane 
var loc = i/4;    
var bi = Math.floor(loc/width)
var a = loc - (bi*width);// works :D
var complexNumb = {real:a, imaginary:bi};
return complexNumb;
}

$("#start").click(function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width  = c.width;
var height = c.height;
var imgData = ctx.createImageData(width,height);
var red = 0;

var i;
for (i = 0; i < imgData.data.length; i += 4) {
    
    var myColor = calulateColor(i, width, height); //need calulateColor to return 3 values of rgb at a point
     
    imgData.data[i+0] = myColor.r;
    imgData.data[i+1] = myColor.g;
    imgData.data[i+2] = myColor.b;
    imgData.data[i+3] = myColor.a;
}

ctx.putImageData(imgData, 0, 0);

});
