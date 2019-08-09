//   js index
/* =================== */


(function($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });


    
    /*-----------------
    nav-c-overlay
    ---------------*/
    $(window).on('scroll', function() {
        var heig = $('.hero-area').height() - 200;
        if ($(window).scrollTop() > heig) {
            $('.header-area nav').addClass('nav-c-overlay', 1000);
        } else {
            $('.header-area nav').removeClass('nav-c-overlay', 1000);
        }
    });

    
   
    $(document).ready(function(){
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
      

    


    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });


     /*------------------------------
         counter
    ------------------------------ */
    $('.counter-up').counterUp();


    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });



// external js: isotope.pkgd.js


// init Isotope
$('.gridV1').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
    }
});


/*---------------------
    isotop -portfolio-2
    --------------------- */


    
    $('.grid_2').isotope({
        itemSelector: '.p2-grid-item',
        percentPosition: true,
        masonry: {
        columnWidth: '.p2-grid-sizer'
        }
    });
    

/*---------------------
    isotop -portfolio-3
    --------------------- */

    // init Isotope
   
   // init Isotope
   

  $('.grid_3').isotope({
        itemSelector: '.p3-grid-item',
        percentPosition: true,
        masonry: {
        columnWidth: '.p3-grid-sizer'
        }
    });


/*---------------------
  isotop -portfolio-4
  --------------------- */

  // init Isotope
 
 // init Isotope
  
  $('.grid_4').isotope({
    itemSelector: '.p4-grid-item',
    percentPosition: true,
    masonry: {
    columnWidth: '.p4-grid-sizer'
    }
});

 





// filter functions
var filterFns = {
// show if number is greater than 50
numberGreaterThan50: function() {
  var number = $(this).find('.number').text();
  return parseInt( number, 10 ) > 50;
},
// show if name ends with -ium
ium: function() {
  var name = $(this).find('.name').text();
  return name.match( /ium$/ );
}
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
var filterValue = $( this ).attr('data-filter');
// use filterFn if matches value
filterValue = filterFns[ filterValue ] || filterValue;
$('.grid').isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
var sortByValue = $(this).attr('data-sort-by');
$('.grid').isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
var $buttonGroup = $( buttonGroup );
$buttonGroup.on( 'click', 'button', function() {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  $( this ).addClass('is-checked');
});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
var filterValue = $(this).attr('data-filter');
$('.grid-p2').isotope({ filter: filterValue });
}); 

$('.portfolio-menu button').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid-p3').isotope({ filter: filterValue });
}); 

$('.portfolio-menu button').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
var filterValue = $(this).attr('data-filter');
$('.grid-p4').isotope({ filter: filterValue });
}); 

$('.portfolio-menu button').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});



















    /**================================ 
    Countdown 2
    ================================**/
    $('.countdown').countdown('2018/6/10', function(event) {
    $('#cday').html(event.strftime('%D <span id="clabel"><br>Days</span>'));
    $('#chour').html(event.strftime('%-H <span id="clabel"><br>Hours</span>'));
    $('#cminute').html(event.strftime('%M <span id="clabel"><br>Minutes</span>'));
    $('#csec').html(event.strftime('%S <span id="clabel"><br>Seconds</span>'));
    });


    /*---------------------
    owl carousel
    --------------------- */
    
    /*------social-slider-carousel ---------*/
    
    function ss_carousel() {
        var owl = $(".ss-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 6
                }
            }
        });
    }
    ss_carousel();


    var dot = $('.ss-carousel .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
      if(index < 10){
        $(this).html('0').append(index);
      }else{
         $(this).html(index);
      }
    });
    /*------social-slider-carousel end ---------*/
    /*------partner-carousel start ---------*/

     function partner_carousel() {
        var owl = $(".partner-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<p>prv</p>", "<p>next</p>"],
            nav: false,
            items: 7,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 7
                }
            }
        });
    }
    partner_carousel();
    var dot = $('.partner-carousel .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
      if(index < 10){
        $(this).html('0').append(index);
      }else{
         $(this).html(index);
      }
    });
   
    
    /*------partner-carousel end ---------*/


    /*------client-carousel end ---------*/
     function client_carousel() {
        var owl = $(".owl-client-says");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    client_carousel();
    var dot = $('.owl-client-says .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
      if(index < 10){
        $(this).html('0').append(index);
      }else{
         $(this).html(index);
      }
    });
    /*------client-carousel end ---------*/

    /*------blog-top-carousel end ---------*/
     function blog_top_carousel() {
        var owl = $(".blog-top");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    blog_top_carousel();
    var dot = $('.blog-top .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
      if(index < 10){
        $(this).html('0').append(index);
      }else{
         $(this).html(index);
      }
    });
   
    /*------blog-top-carousel end ---------*/
     function blog_top_carousel() {
        var owl = $(".blog-top");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    blog_top_carousel();
    var dot = $('.blog-top .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
      if(index < 10){
        $(this).html('0').append(index);
      }else{
         $(this).html(index);
      }
    });
    /*------blog-top-carousel end ---------*/

     /*------blog-details-carousel start ---------*/

     function blog_details_carousel() {
        var owl = $(".blog-details");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<p>prv</p>", "<p>next</p>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    blog_details_carousel();
    var dot = $('.blog-details .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
      if(index < 10){
        $(this).html('0').append(index);
      }else{
         $(this).html(index);
      }
    });
   
    
    /*------blog-details-carousel end ---------*/


   /*------fancybox end ---------*/

    // $("[data-fancybox]").fancybox({
    //         // Options will go here
    //     });
    /*------progress-bar ---------*/
     
    $(function () { 
      $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    });  
    var each_bar_width;
    // $( window ).scroll(function() {   
     // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
      $(".progress-bar").each(function(){
        each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
      });
           
     //  }  
    // });
     /*------progress-bar ---------*/


     /*------ acordion -----*/
     function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);





/*---- under-constraction----*/
$(".ucpc-btn ").click(function(){
    $(".uca-form").addClass("ucaform-show");
});





 /*---------------------
    // Ajax Contact Form
    --------------------- */

    
    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
        
        var firstName  = $('#firstName').val();
        var lastName  = $('#lastName').val();
        var email = $('#email').val();
        var subjectName  = $('#subjectName').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        firstName = $.trim(firstName);
        lastName = $.trim(lastName);
        subjectName = $.trim(subjectName);
        email = $.trim(email);
        msg = $.trim(msg);

        if (firstName != '' && email != '' && msg != '') {
            var values = "firstName=" + firstName + "&lastName=" + lastName +"&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "php/mail.php",
                data: values,
                success: function() {
                    $('#firstName').val('');
                    $('#lastName').val('');
                    $('#subjectName').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });









    

    





}(jQuery));