/* ********************************************************************************************
   Fixed Mac Issue
*********************************************************************************************** */

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  $("body").addClass("mac");
} else {
  $("body").addClass("pc");
}
    
/* ********************************************************************************************
   Accordion
*********************************************************************************************** */

$(document).on('click', ".opener", function () {
    var ele = $(this).parent('.mobile-accordion');   
    if ($(ele).hasClass("active")) {
        $(ele).removeClass('active');
        $(ele).find(".block-content").slideUp(400);
    }
    else {
        $(ele).addClass('active');  
        $(ele).find(".block-content").slideDown(400);
    }
});

/* ********************************************************************************************
   Fixed Header
*********************************************************************************************** */

jQuery(function($){
    var myHeader = $('.header-container .navbar');
    myHeader.data( 'position', myHeader.position() );
    $(window).scroll(function(){
        var hPos = myHeader.data('position'), scroll = getScroll();
         if ( hPos != undefined && hPos.top < scroll.top ){
             myHeader.addClass('navbar-fixed-top fadeInDown animated wow');
        }
        else {
             myHeader.removeClass('navbar-fixed-top fadeInDown animated wow');
        }
    });
    
    function getScroll () {
        var b = document.body;
        var e = document.documentElement;
        return {
            left: parseFloat( window.pageXOffset || b.scrollLeft || e.scrollLeft ),
            top: parseFloat( window.pageYOffset || b.scrollTop || e.scrollTop )
        };
    }
});


/* ********************************************************************************************
   SmoothScroll
*********************************************************************************************** */

// $(function() {
//   $('.smoothScroll').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 2000); // The number here represents the speed of the scroll in milliseconds
//         return false;
//       }
//     }
//   });
// });




    $('.dot-nav a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('.home-project[data-anchor="' + scrollAnchor + '"]').offset().top -28;
    $('.home-projects').animate({
        scrollTop: scrollPoint
    }, 500);
    
    setTimeout(function(){
        $('.dot-nav li').each(function(i) {
        if ($(this).hasClass('active')) {
            var cls_id = $(this).attr('scroll-data');
        }
            
          });
    },500)
    
    //return false;
      })
      
      $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (window.innerWidth >= 769) {
        if (windscroll >= 100) {
          $('.dot-nav li').each(function(i) {
        if ($(this).hasClass('active')) {
            var cls_id = $(this).attr('scroll-data');
        }
          });           
        }
    }
    
    
        $('.dot-nav').addClass('fixed');
        $('.home-project').each(function(i) {
      if ($(this).position().top <= windscroll) {
          $('.dot-nav li.active').removeClass('active');
          $('.dot-nav li').eq(i).addClass('active');
      }
        });
      
      }).scroll();

      
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      
      $self.data('countTo', data);
      
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      
      // initialize the element with the starting value
      render(value);
      
      function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

$(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
  });
  
  // start all the timers
  
});
function isElementVisible($elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}
$(window).scroll(function () {
    $( ".discover-count-sec" ).each(function() {
    isOnView = isElementVisible($(this));
        if(isOnView && !$(this).hasClass('Starting')){
           $(this).addClass('Starting');
  				$('.timer').each(count);  
  
  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }         
        }
    });
});


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar-nav", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $(".navbar-nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(document).ready(function(){
  $('.dropdown-submenu a.dropdown-toggle').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
      
    
