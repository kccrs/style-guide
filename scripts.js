var $ = jQuery.noConflict();

// CODE BELOW IS FOR DROP DOWN MENU

$(document).ready(function() {

  $("#navToggle a").click(function(event) {
    event.preventDefault();

    $(".main-nav").slideToggle();
    $("#logo").toggleClass("menuUp menuDown");
  });

  $(".main-list-item > a").click(function(event) {
    if($( window ).width() <= "600") {
      event.preventDefault();
      $(this).siblings().slideToggle("fast");
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

// CODE BELOW IS FOR ACCORDION TABS


$(".tab-content").hide();
$(".tab-content:first").show();

$(".tabs li").click(function() {
  // debugger;
	$(".tabs li").removeClass("active");
	$(this).addClass("active");
	$(".tab-content").hide();
	var activeTab = $(this).attr("rel");
	$("#"+activeTab).fadeIn();
});
