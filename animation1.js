(function() {
    var mousePos;
    var cnumber = 0;
    var goingup = true;
    var goingup2 = true;
    var cnumber2 = 0;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }

    function getMousePosition() {
        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            var aCanvas = document.getElementById("aCanvas");
            var context = aCanvas.getContext("2d");
            var aGradient = context.createRadialGradient(pos.x,pos.y,cnumber2,pos.x+20,pos.y+20,cnumber);
            
            color1 = "rgb(100," + cnumber + ","+(255-cnumber)+")";
            color2 = "rgb("+(255-cnumber2)+"," + cnumber2 + ",100)";
            if(cnumber==255){goingup = false;}    
            if(cnumber==0){goingup = true;}
            if (goingup) {cnumber += 5;}
            else {cnumber -= 5;}
            
            if(cnumber2==255){goingup2 = false;}    
            if(cnumber2==0){goingup2 = true;}
            if (goingup2) {cnumber2 += 1;}
            else {cnumber2 -= 1;}
            
            
            aGradient.addColorStop(0,color1);
            aGradient.addColorStop(1, color2);
            
            aCanvas.width = 1600;
            aCanvas.height = 1000;
            
            
            context.fillStyle = aGradient;
            context.fillRect(0,0,1600,1000)
            
            
            document.body.style.background = "url(" + aCanvas.toDataURL() + ")";

            
            // Use pos.x and pos.y
        }
    }

})();
