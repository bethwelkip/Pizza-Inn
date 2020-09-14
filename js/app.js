function small() {
    myPizza.size = "Small";
    myPizza.sizeCharge = 5;
    //myPizza.prototype.toppingPrice = 1.5;
};

function medium() {
    myPizza.size = "Medium";
    myPizza.sizeCharge = 7;
    // myPizza.prototype.toppingPrice = 2.0;

};

function large() {
    myPizza.size = "Large";
    myPizza.sizeCharge = 9;
    //myPizza.prototype.toppingPrice = 2.5;
    console.log(myPizza.sizeCharge);
}

function crust() {
    console.log(myPizza.size);
    if (myPizza.size === "Large") {
        document.getElementById("thin-crust").innerHTML = "$" + 2.50;
        document.getElementById("hard-crust").innerHTML = "$" + 2.50;
        document.getElementById("thick-crust").innerHTML = "$" + 2.50;
        document.getElementById("italian-crust").innerHTML = "$" + 2.50;

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("thin-crust").innerHTML = "$" + 2.00;
        document.getElementById("hard-crust").innerHTML = "$" + 2.00;
        document.getElementById("thick-crust").innerHTML = "$" + 2.00;
        document.getElementById("italian-crust").innerHTML = "$" + 2.00;
    }
    else {
        document.getElementById("thin-crust").innerHTML = "$" + 1.50;
        document.getElementById("hard-crust").innerHTML = "$" + 1.50;
        document.getElementById("thick-crust").innerHTML = "$" + 1.50;
        document.getElementById("italian-crust").innerHTML = "$" + 1.50;

    }

}
function toppings() {
    if (myPizza.size === "Large") {
        document.getElementById("fruit-topping").innerHTML = "$3.00";
        document.getElementById("kale-topping").innerHTML = "$3.00";
        document.getElementById("pepperoni-topping").innerHTML = "$3.00";
        document.getElementById("spinach-topping").innerHTML = "$3.00";
        document.getElementById("tomato-topping").innerHTML = "$3.00";
        document.getElementById("cheese-topping").innerHTML = "$3.00";

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("fruit-topping").innerHTML = "$2.00";
        document.getElementById("kale-topping").innerHTML = "$2.00";
        document.getElementById("pepperoni-topping").innerHTML = "$2.00";
        document.getElementById("spinach-topping").innerHTML = "$2.00";
        document.getElementById("tomato-topping").innerHTML = "$2.00";
        document.getElementById("cheese-topping").innerHTML = "$2.00";

    }
    else {
        document.getElementById("fruit-topping").innerHTML = "$1.00";
        document.getElementById("kale-topping").innerHTML = "$1.00";
        document.getElementById("pepperoni-topping").innerHTML = "$1.00";
        document.getElementById("spinach-topping").innerHTML = "$1.00";
        document.getElementById("tomato-topping").innerHTML = "$1.00";
        document.getElementById("cheese-topping").innerHTML = "$1.00";


    }

}

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = 0;
    this.sizeCharge = 0;
    this.toppingPrice = 0;
}
var myPizza = new Pizza();
//myPizza.prototype.totalCharge = function () {
//   myPizza.charge + myPizza.delivery
//};


function finalPrice() {
    document.getElementById("size-price").innerHTML = "$" + myPizza.sizeCharge;
    document.getElementById("crust-price").innerHTML = "$" + myPizza.crustPrice;
    document.getElementById("topping-price").innerHTML = "$" + myPizza.toppingPrice;
    document.getElementById("delivery-price").innerHTML = "$" + myPizza.delivery;
    //document.getElementById("total-charge").innerHTML = "$" + myPizza.totalCharge();
};
