var LOGO;

function logo() {
	LOGO = $("#logo");
	LOGO.css('left', innerWidth * 0.2 - 100);
	window.onresize = function(e) {
		setLogoPosition();
	}
}

function setLogoPosition() {
	LOGO.css('left', innerWidth * 0.2 - 100);
}

function menuScroll() {
	var ws = $(window).scrollTop();
	console.log(ws);
	if(ws >= 1900) {
		clear();
		$("#aContact").addClass("now");
	} else {
		if(ws >= 1300) {
			clear();
			$("#aStore").addClass("now");
		} else {
			if(ws >= 600) {
				clear();
				$("#aPrice").addClass("now");
			} else {
				clear();
				$("#aAbout").addClass("now");
			}
		}
	}
}

function clear() {
	$("#aPrice").removeClass("now");
	$("#aStore").removeClass("now");
	$("#aAbout").removeClass("now");
	$("#aContact").removeClass("now");
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

function orderFrameShow() {
	$("#order-frame").show();
}

function orderFrameHide() {
	$("#order-frame").hide();
}