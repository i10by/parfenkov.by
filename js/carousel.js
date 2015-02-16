var items;
var buttons;
var itemNumber;
var currItem;

function init() {
	items = $(".item");
	buttons = $(".button");
	itemNumber = items.length;
	currItem = 0;
	for(var i = 0;i < itemNumber; i++) {
		items[i].setAttribute("id", "item" + i);
	}
}

function setMargin() {
	var winWidth = window.innerWidth;
	var cbWidth = winWidth * 0.1 + 50;
	var infoWidth = winWidth * 0.1 + 50;
	$("div.carousel-button").css('margin-left', cbWidth);
	$("div.info").css('margin-left', infoWidth);
}

function setItem(id) {
	currItem = id;
	setHeader(id);
	$("#item" + id).fadeIn(1000);
	buttons[id].setAttribute("class", "button active");
	hideAll(id);
}

function nextItem() {
	if(currItem < itemNumber-1) {
		currItem++;
	} else {
		currItem = 0;
	}
	setHeader(currItem);
	buttons[currItem].setAttribute("class", "button active");
	$("#item" + currItem).fadeIn(1000);
	hideAll(currItem);
}

function hideAll(id) {
	for(var i = 0;i < itemNumber; i++) {
		if(id != i) {
			$("#item" + i).fadeOut(1000);
			buttons[i].setAttribute("class", "button");
		}
	}
}

function setHeader(id) {
	switch(id) {
	case 0 : {
		$("#cit").html("Имеет большой опыт в своей нише");
		$("#cic").html("Занимаемся производством и реализацией плодоовощной продукции с 1991 года");
		break;
	}
	case 1 : {
		$("#cit").html("Высокое качество продукции");
		$("#cic").html("Выращиваемая нами продукция проходит строгую сертификацию и отвечает высоким стандартам качестка");
		break;
	}
	case 2 : {
		$("#cit").html("Доступность");
		$("#cic").html("Наша продукция представлена <br> в 5-ти торговых точках Гомеля");
		break;
	}
	}
}