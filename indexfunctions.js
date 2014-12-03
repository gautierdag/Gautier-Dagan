var numItems = 4;

function nextPage(numItem){

for(var i = 1; i <= numItems; i++){

    
if (i !=numItem){    
var idOfItem = '#' + i.toString();    
$(idOfItem).velocity({opacity: 0}, { duration: 1000 });  
}
}
setTimeout(
  function() 
  {
   switch (numItem) {
    case 1:
        window.open('animation1.html',"_self");
        break;
    case 2:
        window.open('animation2.html',"_self");
        break;
    case 3:
       window.open('animation3.html',"_self");
        break;
    case 4:
       window.open('animation4.html',"_self");
        break;
}//send to right page (switch?)
  }, 2000);



}