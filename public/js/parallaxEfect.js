// –––––––––––––––– //
//     PARALLAX     //
// –––––––––––––––– //

$(window).scroll(function() {
    parallax();
  });
  
  function parallax() {
    var wScroll = $(window).scrollTop();
  
    /* Efecto Parallax sobre la imagen de fondo del aside */
    /* La imagen de fondo subirá al hacer scroll down la mitad de rápido que en background-attachment: scroll */
    $('header').css('background-position', 'center ' + (wScroll * .5) + 'px');
  
    /* Efecto Parallax sobre la imagen de fondo del aside */
    if (wScroll > $('header').offset().top - $(window).height()) {
      $('header').css('background-position' , 'center ' + (wScroll - $('header').offset().top) / 2 + 'px');
    }
  }