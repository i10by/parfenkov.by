function main() {
    scrollSet();
    $(window).resize(function() {
        setMargin();
    });
    loadPrice();
    logo();
    setInterval(function() {
        nextItem()}, 10000);
}

function ItemPrice(title, price, img, info) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.info = info;
}

function loadPrice() {
    $.post("json/price.json", function ( data ) {
        addPriceItems(data);
    });
}

function compareObjects (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
};

function addPriceItems(data) {
    var size = data.length;
    data.sort(compareObjects);
    var root = $("#price-items");
    root.html("");
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
    rootHeight = (Math.floor((size + 3) / 4) * 200 + 100) + "px";
    root.css("height", rootHeight);
}
