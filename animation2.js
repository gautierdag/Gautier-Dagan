/* jquery.js */
/* jquery.velocity.js */

function clickMe(){
document.addEventListener("click", getClickPosition, false)}

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
document.getElementById("demo").innerHTML = coords;  

fireworkToLocation(x, y);
//ballAtLocation(x, y);  

}

function ballAtLocation(posx, posy){

//setInterval(turnBall(),100);
$("#circa").velocity({ cx: posx, cy: posy});
    
circa.style.fill = getRandomColor();
    
}

function fireworkToLocation(posx, posy){
   
firework.style.fill = getRandomColor();
$("#firework").velocity({ cx: posx, cy: posy})
            .velocity({ r: 500 })
            .velocity({opacity: 0 })
            .velocity({ r: 10 })
            .velocity({ cx: 550, cy: 550})
            .velocity({opacity: 1 })     
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}