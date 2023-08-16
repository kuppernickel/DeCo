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
    if($(window).width() < 768){
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
