function size() {


};

function toppings() {


};

function crust() {


};

function pizza(size = "", topping = "", crust = "", delivery = 0) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.delivery = delivery;
    this.charge = 100; /*crust() + toppings() + size(); */
};

function finalPrice() {
    document.getElementById("total-charge").append(pizza(2, 3, 4, 5).charge);
    return 2000000;
}

$(document).ready(function () {
    $().click(function () {

    })

});