var $ = jQuery.noConflict();

$(document).ready(function() {

  $("#navToggle a").click(function(event) {
    event.preventDefault();

    $(".main-nav").slideToggle();
    $("#logo").toggleClass("menuUp menuDown");
  });

  $(".main-list-item > a").click(function(event) {
    if($( window ).width() <= "600") {
        // if($(this).siblings().size() > 0 ) {
		     event.preventDefault();
            $(this).siblings().slideToggle("fast");
            // $(this).children(".toggle").html($(this).children(".toggle").html() === 'close' ? 'expand' : 'close');
        // }
    }
  });

  $(window).resize(function() {
      if($( window ).width() >= "600") {
          $(".main-nav").css("display", "block");

          if($("#logo").attr('class') === "menuDown") {
              $("#logo").toggleClass("menuUp menuDown");
          }
      }
      else {
          $(".main-nav").css("display", "none");
      }
  });

});
