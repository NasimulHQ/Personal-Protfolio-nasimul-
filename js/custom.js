$("document").ready(function(){
     $("#example").typer({
            strings: [
                "Responsive Web Designer",
                "Fontend Web Developer",
                "Backend Web Developer"
            ]
        });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

});

/* nav fixed */
	$("document").ready(function(){
	 $(window).scroll(function(){
	  if($(window).scrollTop()>200){
		$('.main-nav').addClass('fixed-top');  
	  }
	  else{
		$('.main-nav').removeClass('fixed-top');  
	  }
	});
	});

/* nav scrolling */
$(document).ready(function() {
  
  var scrollLink = $('.nav-link');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
});

/* counting up */

   $("document").ready(function(){
    $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
     var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-36251023-1']);
      _gaq.push(['_setDomainName', 'jqueryscript.net']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    });
    

/* protfollio tabs */
  $( function() {
    $( ".protfollio-tabs" ).tabs();
  } );


/* gallery hover effects (tabs) */
$("document").ready(function(){
  $(".snake").snakeify({speed: 200});
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

});


/* carousel*/
$("document").ready(function(){
 $(".owl-carousel").owlCarousel({
     loop:true,
     margin:10,
     nav:false,
     dots:true,
     autoplay:true,
     autoplayTimeout:3000,
     smartSpeed:800,
     mouseDrag:false,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 })
});


/* form velidation */

    $("document").ready(function(){
        $("#typed2").typing({
        strings: ['Front-end Web Developer', 'Web specialist', 'Web Designer', 'HTML5 :)'],
        eraseDelay: 10,
        typeDelay: 70,
        stringStartDelay: 1000,
        color: 'red',
        typingColor: 'black',
        typingOpacity: '0.1',
        loopCount: 3,
        cursorBlink: false,
        cursorChar: '<small>_</small>',
        fade: true,
        onTyping: function () {
            console.log('onTyping');
        },
        onFinishedTyping: function () {
            console.log('onFinishedTyping');
        },
        onErasing: function () {
            console.log('onErasing');
        },
        onFinishedErasing: function () {
            console.log('onFinishedErasing');
        },
        onAllTypingCompleted: function () {
            console.log('onAllTypingCompleted');
        },
        onFinishedFadeErasing: function () {
            console.log('onFinishedFadeErasing');
        }
    });
     var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
    });


/* preloader */
$(window).on('load', function(){
    $('.preloader').fadeOut();
    $('.preloader img').delay(1350).fadeOut('slow');
    $('body').delay(1350).css({'overflow' : 'visible'});
})

/* scroll btn */
$("document").ready(function(){
	$(window).scroll(function(){
	 if($(this).scrollTop()>200){
     $(".scroll-btn").fadeIn();
	 }else{
     $(".scroll-btn").fadeOut();
	 }
	 });
	 $(".scroll-btn").click(function(){
	 $("html,body").animate({scrollTop:0},700);
   });	           
});










