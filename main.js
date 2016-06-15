var windowWidth = $(this).width();
var twoCollumnTblprolang =
                  '<tr>'
                  +'<td><p class="ratingdesc">Python</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td></td>'
                  +'<td><p class="ratingdesc">HTML/CSS/JS</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">Swift</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '<td></td>'
                  +'<td><p class="ratingdesc">Node JS</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star half-star"></span></td>'
                  +'<td></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">C++</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star half-star"></span></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '</tr>';


var oneCollumnTblprolang =
                  '<tr>'
                  +'<td><p class="ratingdesc">Python</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">HTML/CSS/JS</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">Swift</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">Node JS</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star half-star"></span></td>'
                  +'<td></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">C++</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star half-star"></span></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '</tr>';


var shortprolang =
                  '<tr>'
                  +'<td><p class="ratingdesc">Python</p></td>'
                  +'<td><p class="ratingdesc">5/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">HTML/CSS/JS</p></td>'
                  +'<td><p class="ratingdesc">5/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">Swift</p></td>'
                  +'<td><p class="ratingdesc">2/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">Node JS</p></td>'
                  +'<td><p class="ratingdesc">3.5/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">C++</p></td>'
                  +'<td><p class="ratingdesc">2.5/5</p></td>'
                  + '</tr>';

var twoCollumnTblframeworks =
                  '<tr>'
                  +'<td><p class="ratingdesc">Photoshop</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star half-star"></span></td>'
                  +'<td></td>'
                  +'<td><p class="ratingdesc">Dynamo DB</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td></td>'
                  +'<td></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">Ionic</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '<td></td>'
                  +'<td><p class="ratingdesc">Angular JS</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star half-star"></span></td>'
                  +'<td></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">AWS</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td></td>'
                  + '</tr>';
var oneCollumnTblframeworks= '<tr>'
                  +'<td><p class="ratingdesc">Photoshop</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star half-star"></span></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">Dynamo DB</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td></td>'
                  +'<td></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">Ionic</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td></td>'
                  + '<td></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">Angular JS</p></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star full-star"></span></td>'
                  +'<td><span class="rating-star half-star"></span></td>'
                  +'<td></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">AWS</p></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td><span class="rating-star full-star"></span></td>'
                  + '<td></td>'
                  + '</tr>';

var shortframeworks = '<tr>'
                  +'<td><p class="ratingdesc">Photoshop</p></td>'
                  +'<td><p class="ratingdesc">4.5/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">Dynamo DB</p></td>'
                  +'<td><p class="ratingdesc">3/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">Ionic</p></td>'
                  +'<td><p class="ratingdesc">3/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  +'<td><p class="ratingdesc">Angular JS</p></td>'
                  +'<td><p class="ratingdesc">3.5/5</p></td>'
                  + '</tr>'
                  + '<tr>'
                  + '<td><p class="ratingdesc">AWS</p></td>'
                  +'<td><p class="ratingdesc">4/5</p></td>'
                  + '</tr>';





$( document ).ready(function() {
  windowWidth = $(this).width();
  if (windowWidth < 600){//do one collumn table
    $( "#prolang" ).html(shortprolang);
    $( "#frameworks" ).html(shortframeworks);
  }
  else if (windowWidth < 1150){//do one collumn table
    $( "#prolang" ).html(oneCollumnTblprolang);
    $( "#frameworks" ).html(oneCollumnTblframeworks);
  }
  else {//two collumn table
    $( "#prolang" ).html(twoCollumnTblprolang);
    $( "#frameworks" ).html(twoCollumnTblframeworks);
  }
});



$(window).resize(function() {
    windowWidth = $(this).width();
    if (windowWidth < 600){//do one collumn table
      $( "#prolang" ).html(shortprolang);
      $( "#frameworks" ).html(shortframeworks);
    }
    else if (windowWidth < 1150){//do one collumn table
      $( "#prolang" ).html(oneCollumnTblprolang);
      $( "#frameworks" ).html(oneCollumnTblframeworks);
    }
    else {//two collumn table
      $( "#prolang" ).html(twoCollumnTblprolang);
      $( "#frameworks" ).html(twoCollumnTblframeworks);
    }
});

$('#fireworks').click( function() {
  // window.open('html/animation2.html',"_self");
  window.location.href = 'html/animation2.html';
});

// function openFireworks(){
//   console.log("fireworks")
//
// }

function openFractals(){
  window.open('html/animation4.html',"_self");
}
