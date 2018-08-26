$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });

  var userScroll = 0;
  $(window).scroll(function(){
    var userScrollTop = $(this).scrollTop();
    if (userScrollTop - userScroll > 50) {
    var navbarHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' +  navbarHeight}, 150);
     userScroll = userScrollTop;
    } else if (userScroll - userScrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
      userScroll = userScrollTop;
    }
  });
});
