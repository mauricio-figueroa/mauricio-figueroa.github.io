// DOCUMENTO CARGANDO

$(window).on("load",function(){
});

$( window ).resize(function() {

});

$(document).on("ready",function(){

  size();
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


function size(){

  console.log("1");
  doc = $(document).height();
  win = $(window).height();
  // body = $(body).height();
  cover = $("#center-cover").height();

  var body = document.body,
      html = document.documentElement;

      offset=html.offsetHeight;

      console.log(offset);


  console.log(doc+"  "+win +"  "+cover);

    if(doc>win ){
        $(".cover").css("height", 'auto');

    }else if(cover<win){
      $(".cover").css("min-height", '100vh');
      // $(".cover").css("height", win+cover+"px");


    }

}
