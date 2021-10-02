$(document).ready(function(){
    $(".testmonials .slick-dots li").eq(0).find("button").addClass("active");
$(".testmonials .slick-dots li").click(function(){
$(this).find("button").addClass("active");
$(this).siblings("li").find("button").removeClass("active");
////////testmonials
$(".testmonials .slick-slide .col-lg-12").eq(0).find(".xx").addClass("active");



////////////////////
});

$("nav .buttons i").click(function(){
    $(this).toggleClass("navr");
    if($(this).hasClass("navr")){

    
$("nav .ul").animate({
left : 0
},1000);
    }else{
        $("nav .ul").animate({
            left : -1000
            },1000);
    }
});
///////////
$(window).scroll(function(){
    $(".downlowds div h3 span.xxxx").each(function(){
        if($('.downlowds div').offset().top - 500 <= $(window).scrollTop()){
                $(this).countTo();
                $(this).removeClass("xxxx");
        }
    });
    });
    ///scroll to top
    $(window).scroll(function(){
    if($(window).scrollTop() > 1000){
        $(".scrolltop").fadeIn();
    }else{
        $(".scrolltop").fadeOut();
    }
    });
    $(".scrolltop").click(function(){
    $("body, html").animate({
    scrollTop : 0
    });
    });
$(window).scroll(function(){
//console.log($(this).scrollTop());
if($(this).scrollTop() < 10){
    $("nav").css({
        "background-color" : "transparent",
        "height" : "0px",
        "top" : "20px"
    });
    $("nav .logo span").css("color", "#fff");
    $("nav .ul ul li").css("color","#fff");
    $("nav i").css("color","#fff");
}else{
   $("nav").css({
       "background-color" : "#fff",
       "height" : "75px",
       "top" : "0"
   });
   $("nav .logo span").css("color", "#000");
   $("nav .ul ul li").css("color","#000");
   $("nav i").css("color","#000");
   $("nav li.active").css("color","#342dc8")
}
///sync links
$('nav ul li').each(function(){
    let data = $(this).data('scroll');
        if($(window).scrollTop() >= $(data).offset().top){
           $(this).addClass("active");
           $(this).siblings("li").removeClass("active");
        }

});
});
///////////
$("nav ul li").click(function(){
    $(this).addClass("active");
    $(this).siblings("li").removeClass("active");
    $('body, html').animate({
        scrollTop : $($(this).data("scroll")).offset().top + 10
    },1000);
});







































});