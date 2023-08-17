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
        // if(($(this).scrollTop() > 130) || 
        //     ((document.getElementById('main-nav').className=='about')&&($(this).scrollTop() > 50))){
        //     scroll_flag = true;
        // }
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
    if((CurrentFileName!='index') && ($(window).width() < 768)){
        if($('#portfolio').hasClass('responsive_nav')===true){
            console.log(document.getElementById('portfolio').className);
            $('#portfolio').removeClass('responsive_nav');
            $('#main-footer').removeClass('responsive_nav');
            $('#portfolio').addClass('responsive_nav_fixed');
            $('#main-footer').addClass('responsive_nav_fixed');
        }else{
            console.log(document.getElementById('portfolio').className);
            $('#portfolio').removeClass('responsive_nav_fixed');
            $('#main-footer').removeClass('responsive_nav_fixed');
            $('#portfolio').addClass('responsive_nav');
            $('#main-footer').addClass('responsive_nav');
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
            }, 300, drop_callback());
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
                }
            );
            $('.drop').animate({
                display: 'block',
                height: '98px',
                opacity: 1
            }, 1000, drop_callback());
        }
    }
}