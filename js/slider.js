$(document).ready(function(){
  // $(".owl-carousel").owlCarousel({
  // 	center:true,
  // 	items:1,
  // 	loop:true,
  // 	autoplay:true,
  //   autoplayTimeout:5000,
  //   autoplayHoverPause:true,
  //   animateIn:'fadeIn',
  //   animateOut:'fadeOut',
  //   smartSpeed: 2000
  // });
   var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
});