var txnid = document.getElementById("txnid");
var date = document.getElementById("date");
var price = document.getElementById("price");
var namer = document.getElementById("namer");

function txnidgen() {
    var txnidno = "";
    for (var i = 0; i <= 12; i++) {
        txnidno += String(Math.floor(Math.random() * 10));
    }
    return txnidno;
}

function dategen() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();

    if (today.getHours() >= 12) {
        var date = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + " PM";
    }
    else {
        var date = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + " AM";
    }

    return date;
}

function pricegen() {
    var price = String(window.location).split("?")[1];
    price = price.split(",")[0];
    return price;
}

function namegen() {
    var namerx = String(window.location).split("?")[1];
    namerx = namerx.split(",")[1];
    return namerx;
}

console.log(pricegen());

namer.innerHTML = namegen();
price.innerHTML = pricegen();
date.innerHTML = dategen();
txnid.innerHTML = txnidgen();