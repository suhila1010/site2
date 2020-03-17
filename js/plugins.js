$(document).ready(function (){
    "use strict"


    $("html").niceScroll();

    
    $('.carousel').carousel({
        
        interval: 6000
    });
    $(".gear-check").click(function (){
        $(".color-option").fadeToggle();    

    });
        // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
        
    scrollButton = $("#scroll-top");

colorLi.eq(0).css("backgroundColor", "#E60024").end()

       .eq(1).css("backgroundColor", "#E426D5").end()

       .eq(2).css("backgroundColor", "#009AFF").end()

       .eq(3).css("backgroundColor", "#FFD500");
    
colorLi.click(function () {
    
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    
});
  var scrollButton = $("#scroll-top");
  $(window).scroll(function (){

  if($(this).scrollTop()>=700){
      scrollButton.show();
    }
  else{
    scrollButton.hide()
  }
  });
  
  scrollButton.click(function (){

    $("html,body").animate({scrollTop : 0 },600);
    });



        
});
   /** 
     // loading
    $(window).load(function () {
        // Show The Scroll
        $("body").css("overflow", "auto");
        // Loading Elements
        $(".overlay .spinner").fadeOut(2000,
            function () {
                $(this).parent().fadeOut(2000,
                     function () {
                
                    $(this).remove();
                });
           
        });
    });/ */
    $(window).load(function () {
    
    "use strict";
    $("body").css("overflow", "auto");
    // Loading Elements
    
    $(".overlay .spinner").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});
    