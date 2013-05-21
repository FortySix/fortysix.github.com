 if ($('.home').length > 0){
  $(".banner").backstretch([
    "img/roomcloseup.jpg",
    "img/frontoffice.jpg",
    "img/reception.jpg",   
    "img/signoutside.jpg"
 
  ], {duration: 3000, fade: 750});
}

 else if ($('.services').length > 0){
 $(".banner").backstretch("img/roomcloseup.jpg"); 

(function($) {
    
       $('.accordion dd').hide();
       $('.accordion dt a').click(function(){
          if ($(this).hasClass('selected')) {
               $(this).removeClass('selected');
               $(this).parent().next().slideUp();
          } else {
               $('.accordion dt a').removeClass('selected');
               $(this).addClass('selected');
               $('.accordion dd').slideUp();
               $(this).parent().next().slideDown();
          }
          return false;
       });

})(jQuery);

  
 }

 else if ($('.ourteam').length > 0){
 $(".banner").backstretch("img/group.jpg");   
 }


 else if ($('.contactus').length > 0){
 $(".banner").backstretch("img/group.jpg");   
 }


  $(".tagline").fitText(0.8, {minFontSize: '18px', maxFontSize: '58px'});
