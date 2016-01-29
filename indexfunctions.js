var numItems = 5;

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
        window.open('html/animation1.html',"_self");
        break;
    case 2:
        window.open('html/animation2.html',"_self");
        break;
    case 3:
       window.open('html/animation3.html',"_self");
        break;
    case 4:
       window.open('html/animation4.html',"_self");
        break;
    case 5:
       window.open('html/about.html',"_self");
        break;
}//send to right page (switch?)
  }, 2000);



}