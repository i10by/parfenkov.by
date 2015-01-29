var LOGO;
var DATA_PRICE;

function main() {
    scrollSet();
    setPrice("json/price.json");
    LOGO = $("#logo");
    LOGO.css('left', innerWidth * 0.15 - 110);
    window.onresize = function(e) {
        setLogoPosition();
    }
    setInterval(function() {
        nextItem()}, 10000);
}

function setLogoPosition() {
    LOGO.css('left', innerWidth * 0.15 - 110);
}

function ItemPrice(title, price, img, info) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.info = info;
}

function setPrice(url) {
    $.post(url, function ( data ) {
        addPriceItems(data);
    });
}

function addPriceItems(data) {
    var size = data.length;
    DATA_PRICE = data;
    var root = $("#price-items");
    for(i = 0;i < size; i++) {
        var item = document.createElement('div');
        var inner = document.createElement('div');
        var img = document.createElement('img');
        item.setAttribute("class" , "price-content");
        inner.setAttribute("class", "price-info");
        img.setAttribute("class", "price-img");
        inner.innerHTML = data[i].title;
        img.setAttribute("src", data[i].img);
        item.appendChild(inner);
        item.appendChild(img);
        root.append(item);
    }
    rootHeight = (Math.floor((size + 3) / 4) * 250 + 100) + "px";
    root.css("height", rootHeight);
}
