// DOCUMENTO CARGANDO

$(window).on("load",function(){
});

$( window ).resize(function() {

});

$(document).on("ready",function(){
slider();
menu();

} );



function slider(){

  items = $('.content');
  items.hide();

  $("#about-me").fadeIn();

$(".change-content").click(function(){

  if($(window).width()>768){
    $(".float-box button").css("background-color", "#108765");
    $(this).css("background-color","#0B4734");
  }



  items = $('.content');

  items.hide();

  content=$(this).attr("name");

  $(content).fadeIn("slow");

})

}





  function menu(){

              var theToggle = document.getElementById('toggle');

          function hasClass(elem, className) {
          	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
          }

          function addClass(elem, className) {
              if (!hasClass(elem, className)) {
              	elem.className += ' ' + className;
              }
          }

          function removeClass(elem, className) {
          	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
          	if (hasClass(elem, className)) {
                  while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                      newClass = newClass.replace(' ' + className + ' ', ' ');
                  }
                  elem.className = newClass.replace(/^\s+|\s+$/g, '');
              }
          }

          function toggleClass(elem, className) {
          	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
              if (hasClass(elem, className)) {
                  while (newClass.indexOf(" " + className + " ") >= 0 ) {
                      newClass = newClass.replace( " " + className + " " , " " );
                  }
                  elem.className = newClass.replace(/^\s+|\s+$/g, '');
              } else {
                  elem.className += ' ' + className;
              }
          }

          theToggle.onclick = function() {
             toggleClass(this, 'on');
             return false;
          }
  }
