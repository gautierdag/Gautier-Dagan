/* jquery.js */
/* jquery.velocity.js */
var index = 1;

function clickMe(){
document.addEventListener("click", getClickPosition, false)}

//index++; //increment index
if(index==7){index=1;} //ensures index will always between 1 and 4, dont want it to go too high now

function getClickPosition(e){

var x;
var y;
    
    if (e.pageX || e.pageY) { 
        x = e.pageX;
        y = e.pageY;}
    else { 
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; } 

var coords = "X coords: " + x + ", Y coords: " + y
document.getElementById("coord").innerHTML = coords;  

var ind = index%6;  
ind.toString();   
    
fireworkToLocation(x, y, ind); 
}


function fireworkToLocation(posx, posy, ind){

var firework = document.getElementById('firework' + ind);       
firework.style.fill = getRandomColor();

var fireid = '#firework' + ind;    
console.log(fireid);   
    
$(fireid).velocity({ cx: posx, cy: posy})
            .velocity({ r: 500 })
            .velocity({opacity: 0 })
            .velocity({ r: 10 })
            .velocity({ cx: 650, cy: 650})
            .velocity({opacity: 1 })     



index++;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}