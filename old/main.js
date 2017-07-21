var windowWidth = $(this).width();

//
// $( document ).ready(function() {
//   windowWidth = $(this).width();
//   if (windowWidth < 600){//do one collumn table
//     $( "#prolang" ).html(shortprolang);
//     $( "#frameworks" ).html(shortframeworks);
//   }
//   else if (windowWidth < 1150){//do one collumn table
//     $( "#prolang" ).html(oneCollumnTblprolang);
//     $( "#frameworks" ).html(oneCollumnTblframeworks);
//   }
//   else {//two collumn table
//     $( "#prolang" ).html(twoCollumnTblprolang);
//     $( "#frameworks" ).html(twoCollumnTblframeworks);
//   }
// });

// $(window).resize(function() {
//     windowWidth = $(this).width();
//     if (windowWidth < 600){//do one collumn table
//       $( "#prolang" ).html(shortprolang);
//       $( "#frameworks" ).html(shortframeworks);
//     }
//     else if (windowWidth < 1150){//do one collumn table
//       $( "#prolang" ).html(oneCollumnTblprolang);
//       $( "#frameworks" ).html(oneCollumnTblframeworks);
//     }
//     else {//two collumn table
//       $( "#prolang" ).html(twoCollumnTblprolang);
//       $( "#frameworks" ).html(twoCollumnTblframeworks);
//     }
// });

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
