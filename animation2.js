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
document.getElementById("coord").innerHTML = coords;  

    
    
setTimeout(function() {
  $("firework").velocity("stop")
            .velocity({ cx: 650, cy: 650})
            .velocity({ r: 10 })
            .velocity({opacity: 1 });
}, 0);
    
fireworkToLocation(x, y);
//ballAtLocation(x, y);  

}

function ballAtLocation(posx, posy){
circa.style.fill = getRandomColor();
$("#circa").velocity({ cx: posx, cy: posy});     
}

function fireworkToLocation(posx, posy){
firework.style.fill = getRandomColor();
$("#firework").velocity({ cx: posx, cy: posy})
            .velocity({ r: 500 })
            .velocity({opacity: 0 })
            .velocity({ r: 10 })
            .velocity({ cx: 650, cy: 650})
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