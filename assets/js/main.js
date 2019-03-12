// Lazy Loading //
$(function() {
    $('.lazy').lazy();
});

// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },100);
  }
}

$(document).ready(function (){
    // Smooth Scrolling //
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 200,
        touchpadSupport: true,
        fixedBackground: true
    });

    // Animated Arrow //
    (function($) {
        $.fn.seqfx = function() {
            var elements = this,
                l = elements.length,
                i = 0;
    
            function execute() {
                var current = $(elements[i]);
                i = (i) % l;
    
                current
                    .fadeIn(350)
                    .delay(800)
                    .fadeOut(350, execute);
            }
            execute();
            return this;
        };
    }(jQuery));
    
    $(".down").seqfx();

    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    $('#cover-container').css({ height: vh100 });
    $('#cover-container').children('.cover-div').css({ height: vh100 });
    $('.cover-wrapper').css({ minHeight: vh100 });
    $('.desktop-mode').css({ minHeight: vh100 });

    // Nav Control //
    $(".hamburger").stop(true, false).click(function (){
        $(".hamburger").toggleClass("is-active");
        $(".nav-panel").toggleClass("nav-is-active");
        $("#body-container").toggleClass("body-container-freeze");
    });

    // Mobile Control //
    if ($(window).width() < $(window).height()) {
        $('.ds-split').css({ minHeight: 'auto' });
        $('.page').css({ minHeight: 'auto' });
    }
    else {
        $('.ds-split').css({ minHeight: vh100 });
        $('.page').css({ minHeight: vh100 });
        $('#particles-js').css({ height: vh100 });
    }

    // Nav Control //
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#nav-down-here").offset().top
        }, 1200, 'easeInOutExpo');
    });
});