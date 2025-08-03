/*
 Theme Name: Quera
 Theme URI: https://themeforest.net/user/themewar/portfolio
 Author: themewar
 Author URI: 
 Description: Quera - Business Consultancy WordPress Theme.
 Version: 1.0
 License:
 License URI:
*/

/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Carousel
 3. Skills
 4. Fun Fact Count
 5. Back To Top
 6. All PopUP
 7. Sticky Header
 8. Mobile Menu
 9. Preloader
 10. Select
 11. Google Maps
 12. Contact Form Submission
 13. All Filter & Suffle
 14. Date & Time picker
*/

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var folioSlider02  = $('.folioSlider02'),
        testi_slider02 = $('.testimonialslider02'),
        popup_video    = $('.popup_video'),
        popup_img      = $('.popup_img'),
        funfact        = $('.funfact'),
        select         = $('.input-field select');

    /*--------------------------------------------------------
    / 2. All Carousel
    /---------------------------------------------------------*/
    $(window).on('elementor/frontend/init', function () {
        /*--- Client Silder ---*/
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-client-slider.default', function ($scope, $) {
            var $wrap = $scope.find('.clslider_wrap');
            var $slide = $scope.find('.client-slider');

            var autoplay = ($wrap.attr('data-autoplay') == 1) ? true : false;
            var loop = ($wrap.attr('data-loop') == 1) ? true : false;
            var nav = ($wrap.attr('data-nav') == 1) ? true : false;
            var dots = ($wrap.attr('data-dots') == 1) ? true : false;
            var item = ($wrap.attr('data-item') * 1 > 0) ? $wrap.attr('data-item') * 1 : 0;
            var item2 = ($wrap.attr('data-item2') * 1 > 0) ? $wrap.attr('data-item2') * 1 : 0;
            var item3 = ($wrap.attr('data-item3') * 1 > 0) ? $wrap.attr('data-item3') * 1 : 0;
            var gapping = ($wrap.attr('data-gapping') * 1 > 0) ? $wrap.attr('data-gapping') * 1 : 0;

            if ($slide.length > 0) {
                $slide.owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    margin: gapping,
                    nav: nav,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                    dots: dots,
                    items: item,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            autoWidth: false
                        },
                        768: {
                            items: item3
                        },
                        992: {
                            items: item2
                        },
                        1200: {
                            items: item
                        }
                    }
                });
            }
        });

        //portfolio slider 01
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-folio.default', function ($scope, $) {
            var $wrap = $scope.find('.folioSlider_wrapper');
            var $folioSlider01 = $scope.find('.folioSlider01');
            var $folioSlider02 = $scope.find('.folioSlider02');
            var autoplay = ($wrap.attr('data-autoplay') == 1) ? true : false;
            var loop = ($wrap.attr('data-loop') == 1) ? true : false;
            var nav = ($wrap.attr('data-nav') == 1) ? true : false;
            var dots = ($wrap.attr('data-dots') == 1) ? true : false;
            var gapping = ($wrap.attr('data-gapping') * 1 > 0) ? $wrap.attr('data-gapping') * 1 : 0;

            if ($folioSlider01.length > 0) {
                $folioSlider01.owlCarousel({
                    margin: gapping,
                    autoplay: autoplay,
                    loop: loop,
                    nav: nav,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                    smartSpeed: 500,
                    dots: dots,
                    items: 3,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            }
            if ($folioSlider02.length > 0) {
                $folioSlider02.owlCarousel({
                    margin: gapping,
                    autoplay: autoplay,
                    loop: loop,
                    nav: nav,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                    smartSpeed: 500,
                    dots: dots,
                    items: 1
                });
            }
        });

        /*--- Testimonial Silder ---*/
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-testimonial.default', function ($scope, $) {
            let $wrap = $scope.find('.testimonial_wrapper');
            let $testimonialslider01 = $scope.find('.testimonialslider01');
            let $testimonialslider02 = $scope.find('.testimonialslider02');

            let autoplay = ($wrap.attr('data-autoplay') == 1) ? true : false;
            let loop = ($wrap.attr('data-loop') == 1) ? true : false;
            let nav = ($wrap.attr('data-nav') == 1) ? true : false;
            let dots = ($wrap.attr('data-dots') == 1) ? true : false;

            if ($testimonialslider01.length > 0) {
                $testimonialslider01.owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    margin: 30,
                    responsiveClass: true,
                    nav: nav,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                    dots: dots,
                    smartSpeed: 600,
                    items: 3,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1024: {
                            items: 3
                        },
                    }
                });
            }

            if ($testimonialslider02.length > 0) {
                $testimonialslider02.owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    margin: 0,
                    responsiveClass: true,
                    nav: nav,
                    navText: ['<i class="twi-arrow-up1"></i>', '<i class="twi-arrow-down1"></i>'],
                    dots: dots,
                    animateOut: 'slideOutDown',
                    animateIn: 'zoomIn',
                    smartSpeed: 550,
                    items: 1,
                });
            }
        });

    });
    /*--- Help Silder ---*/
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-header.default', function ($scope, $) {
            var $helpSlider = $scope.find('.helpSlider');
            if ($helpSlider.length > 0) {
                $helpSlider.owlCarousel({
                    autoplay: true,
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    smartSpeed: 350,
                    items: 1,
                    margin: 0,
                    dots: false,
                    loop: true,
                    nav: true,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                });
            }
        });
    });

    //team Slider
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-team.default', function ($scope, $) {
            var $wrap = $scope.find('.team_slider_wrap');
            var $team_slider = $scope.find('.team_slider');
            var autoplay = ($wrap.attr('data-autoplay') == 1) ? true : false;
            var loop = ($wrap.attr('data-loop') == 1) ? true : false;
            var nav = ($wrap.attr('data-nav') == 1) ? true : false;
            var dots = ($wrap.attr('data-dots') == 1) ? true : false;
            if ($team_slider.length > 0) {
                $team_slider.owlCarousel({
                    margin: 30,
                    autoplay: autoplay,
                    loop: loop,
                    nav: nav,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                    smartSpeed: 500,
                    dots: dots,
                    items: 4,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            }
        });
    });
    // Blog Slider
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-latest-blog.default', function($scope, $) {
            var $wrap  = $scope.find('.lb_slider_wrap');
            var $slide = $scope.find('.lb_slider');
            
            var autoplay = ($wrap.attr('data-autoplay') == 1 ) ? true : false;
            var loop = ($wrap.attr('data-loop') == 1 ) ? true : false;
            var nav = ($wrap.attr('data-nav') == 1 ) ? true : false;
            var dots = ($wrap.attr('data-dots') == 1 ) ? true : false;
            
            $slide.owlCarousel({
                autoplay: autoplay,
                loop: loop,
                margin: 30,
                responsiveClass: true,
                nav: nav,
                navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
                dots: dots,
                responsive: {
                    0: {
                        items: 1
                    },
                    700: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        });
    });
    // Text Slider
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-text-carousel.default', function ($scope, $) {
            var $slider_wrap = $scope.find('.chooseSlider-wrap');
            var $chooseSlider = $scope.find('.chooseSlider');

            var autoplay = ($slider_wrap.attr('data-autoplay') == '1') ? true : false;
            var loop = ($slider_wrap.attr('data-loop') == '1') ? true : false;
            var nav = ($slider_wrap.attr('data-nav') == '1') ? true : false;

            if ($chooseSlider.length > 0) {
                var $chooseSlider_obj = $chooseSlider.owlCarousel({
                    autoplay: autoplay,
                    animateOut: 'slideOutDown',
                    animateIn: 'zoomIn',
                    smartSpeed: 350,
                    items: 1,
                    margin: 0,
                    dots: false,
                    loop: loop,
                    nav: nav,
                    navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>']
                });
            }
        });
    });

    /*--------------------------------------------------------
    / 3. Skills
    /----------------------------------------------------------*/
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-skills.default', function ($scope, $) {
            var $affected = $scope.find('.circle-skill');
            if (!$affected.length) {
                return;
            }
            $affected.appear();
            $(document.body).on('appear', '.circle-skill', function(e, $affected) {
                $affected.each(function() {
                    var $this = $(this);
                    if(!$this.hasClass('appeared')){
                        var point = $this.attr('data-values');
                        var decs = point * 100;
                        var size = $this.attr('data-sizes');
                        var thickness = $this.attr('data-thicknesss');
                        var fill = $this.attr('data-fills');
                        var emptyFill = $this.attr('data-emptyfills');
                        var lineCap = $this.attr('data-linecaps');

                        $this.circleProgress({
                            value: point,
                            startAngle: -Math.PI / 3 * 1,
                            fill: {gradient: [[fill, 1], [fill, .2]], gradientAngle: Math.PI / 4 * 2},
                            emptyFill: emptyFill,
                            lineCap: lineCap,
                            thickness: thickness,
                            animation: {duration: 1800},
                            size: size
                        }).on('circle-animation-progress', function (event, progress) {
                            $this.find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                        });
                        $this.addClass('appeared');
                    }
                });
            });
        });
    });

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-skills.default', function ($scope, $) {
            var $wrap = $scope.find('.single_skill');
            $wrap.appear();
            $wrap.on('appear', loadSkills);
        });
    });
    var coun = true;
    function loadSkills() {
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            $(".ss_parent span", this).animate({'left': datacount + '%'}, 2000);
            if (coun) {
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }

    /*--------------------------------------------------------
    / 4. Fun Fact Count
    /---------------------------------------------------------*/
    $('.counter').appear();
    $(document.body).on('appear', '.counter', function (e, $affected) {
        $affected.each(function () {
            var $this = $(this);
            if (!$this.hasClass('completed')) {
                var $this = $(this);
                var datacount = $(this).attr("data-count") * 1;
                if (datacount > 1000 && datacount % 1000 != 0) {
                    var count = datacount / 1000;
                    count = count.toFixed(1);
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(this.Counter.toFixed(1));
                        }
                    });
                } else if (datacount >= 1000 && datacount % 1000 == 0) {
                    var count = datacount / 1000;
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                } else {
                    var count = datacount;
                    $({Counter: 0}).animate({Counter: count}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                }
                $this.addClass('completed');
            }
        });
    });

    /*--------------------------------------------------------
    / 5. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    /*--------------------------------------------------------
    / 6. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    $('.searchBtn a').on('click', function (e) {
        e.preventDefault();
        $('.searchBtn').toggleClass('active');
    });
    $('.tmsToggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    /*--------------------------------------------------------
    / 7. Sticky Header
    /---------------------------------------------------------*/
    if ($(".isSticky").length > 0) {
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            } else {
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }

    /*--------------------------------------------------------
    / 8. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children').each(function () {
        var $this = $(this);
        $this.append('<span class="submenu-toggler"><i class="twi-chevron-down1"></i></span>');
    });
    $('.mainMenu ul li.menu-item-has-children > span.submenu-toggler').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').stop(true, true).slideToggle();
        $(this).toggleClass('active');
    });
    $('.menuToggler').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });

    /*--------------------------------------------------------
    / 9. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 10. Select
    /---------------------------------------------------------*/
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    };

    /*--------------------------------------------------------
    / 11. Google Maps
    /----------------------------------------------------------*/
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/tw-google-map.default', function($scope, $){
            var $gmap = $scope.find( '.google_map' );
            if ( ! $gmap.length ) {
                return;
            }
            $gmap.each(function(){
                var $this = $(this);
                var gmapid = $this.attr('id');
                var $g_map_this = $('#'+gmapid);

                var marker = $g_map_this.attr('data-marker');
                var zoom = parseInt($g_map_this.attr('data-zoom'), 10);
                var style = parseInt($g_map_this.attr('data-map-style'), 10);
                
                var coordinates = $g_map_this.attr('data-coordinates');
                var coordinates = $.parseJSON(coordinates);
                var primary_lat = '';
                var primary_lon = '';
                var name        = '';
                var location    = '';
                var i = 1;
                for (let value of Object.values(coordinates)) {
                    if(i == 1){
                        primary_lat = value.lati;
                        primary_lon = value.long;
                        name        = value.l_name;
                        location    = value.l_location;
                    }
                   i++;
                }

                var map;
                map = new GMaps({
                    el: '#'+gmapid,
                    lat: primary_lat,
                    lng: primary_lon,
                    scrollwheel: false,
                    zoom: zoom,
                    zoomControl: false,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });
                var image = "";
                var i = 1;
                for (let value of Object.values(coordinates)) {
                    if(i == 1){
                        map.addMarker({
                            lat: value.lati,
                            lng: value.long,
                            icon: marker,
                            animation: google.maps.Animation.DROP,
                            title: value.l_name,
                            infoWindow: {
                                content: '<span>'+value.l_name+'</span>'+value.l_location
                            },
                            verticalAlign: "bottom",
                            horizontalAlign: "center",
                            backgroundColor: "#d3cfcf"
                        });
                    }else{
                        map.addMarker({
                            lat: value.lati,
                            lng: value.long,
                            icon: marker,
                            animation: google.maps.Animation.DROP,
                            title: value.l_name,
                            infoWindow: {
                                content: '<span>'+value.l_name+'</span>'+value.l_location
                            },
                            backgroundColor: "#d3cfcf"
                        });
                    }
                   i++;
                }
                if(style != 1){
                    var styles = [
                        {
                            "featureType": "road",
                            "stylers": [
                                {"color": "#fde293"}
                            ]
                        }, {
                            "featureType": "water",
                            "stylers": [
                                {"color": "#9cc0f9"}
                            ]
                        }, {
                            "featureType": "landscape",
                            "stylers": [
                                {"color": "#f4f5f6"}
                            ]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {"color": "#2c2c2c"}
                            ]
                        }, {
                            "featureType": "poi",
                            "stylers": [
                                {"color": "#9cc0f9"}
                            ]
                        }, {
                            "elementType": "labels.text",
                            "stylers": [
                                {"saturation": 1},
                                {"weight": 0.1},
                                {"color": "#2c2c2c"}
                            ]
                        }
                    ];
                    map.addStyle({
                        styledMapName : "Styled Map",
                        styles : styles,
                        mapTypeId : "map_style"
                    });
                    map.setStyle("map_style");
                }
            });
        });
    });


    /*--------------------------------------------------------
    / 13. All Filter & Suffle
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shaff_grid").length > 0) {
            var $grid = $('.shaff_grid');
            $grid.shuffle({
                itemSelector: '.shaff_item',
                sizer: '.shaff_size'
            });
            $('.shaff_filter li').on('click', function () {
                $('.shaff_filter li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                $grid.shuffle('shuffle', groupName);
            });
        }
    });

    /*--------------------------------------------------------
    / 14. Date & Time picker
    /---------------------------------------------------------*/
    $('.date-picker').datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'y-m-d',
        hours12: false,
        step: 30
    });
    $('.time-picker').datetimepicker({
        timepicker: true,
        datepicker: false,
        format: 'H:i',
        hours12: false,
        step: 30
    });

})(jQuery);