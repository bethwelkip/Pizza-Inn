function small() {
    myPizza.size = "Small";
    myPizza.charge = 5;
    //myPizza.prototype.toppingPrice = 1.5;
};

function medium() {
    myPizza.size = "Medium";
    myPizza.charge = 7;
    // myPizza.prototype.toppingPrice = 2.0;

};

function large() {
    myPizza.size = "Large";
    myPizza.charge = 9;
    //myPizza.prototype.toppingPrice = 2.5;
    console.log(myPizza.charge);
}

function crust() {
    console.log(myPizza.size);
    if (myPizza.size === "Large") {
        document.getElementById("crusty-cost").innerHTML = "$2.50";
        document.getElementById("thin-crust").innerHTML = "$" + 2.50;
        document.getElementById("hard-crust").innerHTML = "$" + 2.50;
        document.getElementById("thick-crust").innerHTML = "$" + 2.50;
        document.getElementById("italian-crust").innerHTML = "$" + 2.50;

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("crusty-cost").innerHTML = "$2.00";
        document.getElementById("thin-crust").innerHTML = "$" + 2.00;
        document.getElementById("hard-crust").innerHTML = "$" + 2.00;
        document.getElementById("thick-crust").innerHTML = "$" + 2.00;
        document.getElementById("italian-crust").innerHTML = "$" + 2.00;
    }
    else {
        document.getElementById("crusty-cost").innerHTML = "$1.50";
        document.getElementById("thin-crust").innerHTML = "$" + 1.50;
        document.getElementById("hard-crust").innerHTML = "$" + 1.50;
        document.getElementById("thick-crust").innerHTML = "$" + 1.50;
        document.getElementById("italian-crust").innerHTML = "$" + 1.50;

    }

}
function toppings() {
    if (myPizza.size === "Large") {
        document.getElementById("fruit-topping").innerHTML = "$1.00";
        document.getElementById("kale-topping").innerHTML = "$1.00";
        document.getElementById("pepperoni-topping").innerHTML = "$1.00";
        document.getElementById("spinach-topping").innerHTML = "$1.00";
        document.getElementById("tomato-topping").innerHTML = "$1.00";
        document.getElementById("cheese-topping").innerHTML = "$1.00";

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
        document.getElementById("fruit-topping").innerHTML = "$3.00";
        document.getElementById("kale-topping").innerHTML = "$3.00";
        document.getElementById("pepperoni-topping").innerHTML = "$3.00";
        document.getElementById("spinach-topping").innerHTML = "$3.00";
        document.getElementById("tomato-topping").innerHTML = "$3.00";
        document.getElementById("cheese-topping").innerHTML = "$3.00";


    }

}

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = 0;
    this.charge = 0;
    this.totalCharge = this.charge + this.delivery
}
var myPizza = new Pizza();


function finalPrice() {
    document.getElementById("size-price").innerHTML = "$" + myPizza.charge;
    document.getElementById("crust-price").innerHTML = "$" + myPizza.crustPrice;
    document.getElementById("topping-price").innerHTML = "$" + myPizza.toppingPrice;
    document.getElementById("delivery-price").innerHTML = "$" + myPizza.delivery;
    document.getElementById("total-charge").innerHTML = "$" + myPizza.totalcCharge;
};
