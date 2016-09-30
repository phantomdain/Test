var pContainerHeight = $('.parallax').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.img1').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });
      
    $('.headtext').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

    $('.img2').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });

    $('.img3').css({
      'transform' : 'translate(0px, '+ wScroll /50 +'%)'
    });

  }
});

$(".img1 .slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.img1 .slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.img1 .slideshow');
},  5000);

$(".img2 .slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.img2 .slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.img2 .slideshow');
},  5000);

$(".img3 .slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.img3 .slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.img3 .slideshow');
},  5000);