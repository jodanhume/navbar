$(function(){
    $('.nav > ul > li > ul').hide();
    var navBtn = $('.nav > ul > li');
    var navLnb = $('.nav > ul > li > ul');
    var navBg = $('.navBg');
    navBtn.mouseenter(function(e){
        e.preventDefault();
        $(this).children('ul > li > ul').stop().slideDown();
        navBg.stop().css({padding:'20vh'});
    })
    navBtn.mouseleave(function(e){
        e.preventDefault();
        navLnb.stop().slideUp('fast');
        navBg.stop().css({padding:'10px'});
    })
    var toggleBtn = $('.toggleBtn');
    toggleBtn.click(function(e){
        e.preventDefault();
        $('.nav').slideToggle();
        $('.toggleBtn').hide();
        $('.closeBtn').show();
        navBg.stop().css({padding:'50vh'});
    })
})