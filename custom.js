// JavaScript Document
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 400) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("darkHeader");
    }else{
		$(".header").removeClass("darkHeader");
		}
}); //missing );