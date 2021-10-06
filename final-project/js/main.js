(function($) {
    "use strict";
    jQuery(document).ready(function($) {

        $('[data-toggle="tooltip"]').tooltip();

        //-----------------header sticky-----------------//

        $(window).on('scroll', function() {
            var navHeight = $(window).height() - 600;
            if ($(window).scrollTop() > navHeight) {
                $('#header-stikcy').addClass('on');
            } else {
                $('#header-stikcy').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '#header-stikcy',
            offset: 100

        });
        //-----------------header 2 sticky-----------------//
        $(window).on('scroll', function() {
            var navHeight = $(window).height() - 600;
            if ($(window).scrollTop() > navHeight) {
                $('#header2-stikcy').addClass('on');
            } else {
                $('#header2-stikcy').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '#header2-stikcy',
            offset: 100

        });
		//scroll to menu item

		$('a[href*="#"]:not([href="#"])').on('click', function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			  $('html, body').animate({
				scrollTop: target.offset().top - 75
			  }, 1000);
			  return false;
			}
		});
        //-----------------mobile menu-----------------//

        $('#navigation').slimmenu({
            resizeWidth: '767',
            collapserTitle: 'Main Menu',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });

        $('#slider').nivoSlider({
            pauseTime: 8000,
        });

        //portfolio section

        $('.portfolio-list').mixItUp();

        //---------------------- portfolio light box  ----------------------//

        $('.lightbox').littleLightBox();

        //------------- wow js ---------------//

        new WOW().init();

        //------------- wow js ---------------//

        //------------- Team section    ---------------//

        var owl = $('#ourteam-carousel');
        owl.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            margin: 30,
            lazyLoad: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1440: {
                    items: 4
                }
            }
        })

        //--------------------- blog meta box function ------------------------
        $(".blog-item").hover(function() {
            $(this).find(".blog-meta").toggle('slow');
        })


    });
}(jQuery))
