function menuScroll() {
	var ws = $(window).scrollTop();
	if(ws >= 1100) {
		$("#aStore").addClass("now");
		$("#aPrice").removeClass("now");
		$("#aAbout").removeClass("now");
	} else {
		if(ws >= 600) {
			$("#aPrice").addClass("now");
			$("#aStore").removeClass("now");
			$("#aAbout").removeClass("now");
		} else {
			$("#aStore").removeClass("now");
			$("#aPrice").removeClass("now");
			$("#aAbout").addClass("now");
		}
	}
}

function scrollSet(){
	$(window).scroll(function(){
		menuScroll();
	});
	$(document).ready(function(){
	    $('a[href^="#"], a[href^="."]').click( function(){
		    var scroll_el = $(this).attr('href');
	        if ($(scroll_el).length != 0) { 
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	        }
		    return false;
	    });
	});
	init();
}