(function ($) {
	"use strict";
    
    $( document ).on( "mousemove", function( event ) {
        $(".circle" ).animate({
            top: event.pageY-($(".circle").height()/2),
            left: event.pageX-($(".circle").width()/2)
        }, 0, "linear");
    });
    
})(jQuery)