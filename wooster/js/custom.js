/*------------------------------------------------------------------
Project:        Wooster - HTML onepage theme by GraphBerry.com
Version:        1.0
Last change:    04/07/2015
Author:         GraphBerry
URL:            http://graphberry.com
License:        http://graphberry.com/pages/license
-------------------------------------------------------------------*/
$(function(){
	'use strict';
/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/
	$('#portfolio-grid').mixItUp();

/*--------------------------------------------------
    Open video modal
    ---------------------------------------------------*/
	$('#popup-youtube').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
	});
	
/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
	smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

    $(window).scroll(function () {
        let scroll_flag = false;
        if(document.getElementById('main-nav').className=='about'){
            if($(this).scrollTop() > 50){
                scroll_flag = true;
            }
        }else if(($(this).scrollTop() > 130) || (($(window).width() < 768) && ($(this).scrollTop() > 40))){
            scroll_flag = true;
        }
        if (scroll_flag) {
            $('#header-nav').addClass('navbar-wooster');
        } else {
            $('#header-nav').removeClass('navbar-wooster');
        }
    });
});

function responsive_nav(){
    let CurrentFileName = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.lastIndexOf("."));
    // console.log(CurrentFileName);
    if($(window).width() < 768){
        if((CurrentFileName!='index')){
            if($('section').hasClass('responsive_nav')===true){
                $('.primary-menu').css('pointer-events', 'none');
                if($('.navbar-nav').children().first().hasClass('responsive_drop')===true){
                    $('.responsive_drop').css('height','100%');
                    $('.drop').css({
                        'height': 0,
                        'opacity': 0
                    });
                    $('.navbar-nav').children().first().removeClass('responsive_drop');
                    $('.navbar-nav').children().last().removeClass('responsive_drop');
                    $('.responsive_drop').css('overflow', 'visible');
                    $('.responsive_drop a').css('overflow', 'visible');
                }

                // console.log(document.getElementById('portfolio').className);
                $('section').removeClass('responsive_nav');
                $('#main-footer').removeClass('responsive_nav');
                $('.links').removeClass('responsive_nav');
                $('section').addClass('responsive_nav_fixed');
                $('#main-footer').addClass('responsive_nav_fixed');
                $('.links').addClass('responsive_nav_fixed');

                setTimeout(drop_callback,600);
            }else{
                $('.primary-menu').css('pointer-events', 'none');
                // console.log(document.getElementById('portfolio').className);
                $('section').removeClass('responsive_nav_fixed');
                $('#main-footer').removeClass('responsive_nav_fixed');
                $('.links').removeClass('responsive_nav_fixed');
                $('section').addClass('responsive_nav');
                $('#main-footer').addClass('responsive_nav');
                $('.links').addClass('responsive_nav');
                setTimeout(drop_callback,600);
            }
        }else{
            if($('.navbar-nav').children().first().hasClass('responsive_drop')===true){
                $('.primary-menu').css('pointer-events', 'none');
                $('.responsive_drop').css('height','100%');
                $('.drop').css({
                    'height': 0,
                    'opacity': 0
                });
                $('.navbar-nav').children().first().removeClass('responsive_drop');
                $('.navbar-nav').children().last().removeClass('responsive_drop');
                $('.responsive_drop').css('overflow', 'visible');
                $('.responsive_drop a').css('overflow', 'visible');
                setTimeout(drop_callback,600);
            }
        }
    }
}

function drop_callback(){
    console.log('callback');
    $('.primary-menu').css('pointer-events', 'auto');
}

function responsive_drop(){
    if($(window).width() < 768){
        if($('.navbar-nav').children().first().hasClass('responsive_drop')===true){
            $('.primary-menu').css('pointer-events', 'none');
            $('.responsive_drop').animate({
                    height: '100%'
                }
            );
            $('.drop').animate({
                height: 0,
                opacity: 0
            }, 300, drop_callback);
            $('.navbar-nav').children().first().removeClass('responsive_drop');
            $('.navbar-nav').children().last().removeClass('responsive_drop');
            $('.responsive_drop').css('overflow', 'visible');
            $('.responsive_drop a').css('overflow', 'visible');
        }else{
            $('.primary-menu').css('pointer-events', 'none');
            $('.navbar-nav').children().first().addClass('responsive_drop');
            $('.navbar-nav').children().last().addClass('responsive_drop');
            $('.responsive_drop').css('overflow', 'hidden');
            $('.responsive_drop a').css('overflow', 'hidden');
            $('.responsive_drop').animate({
                    height: 0
            });
            $('.drop').animate({
                display: 'block',
                height: '98px',
                opacity: 1
            }, 1000, drop_callback);
        }
    }
}