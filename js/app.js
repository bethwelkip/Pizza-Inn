function small() {
    myPizza.size = "Small";
    myPizza.charge += 5;
    console.log(myPizza.size);
};

function medium() {
    myPizza.size = "Medium";
    myPizza.charge += 7;
    console.log(myPizza.size);
};

function large() {
    myPizza.size = "Large";
    myPizza.charge += 9;
    console.log(myPizza.charge);
}

function crust() {
    console.log(myPizza.charge);
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

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = "";
    this.charge = 0;
}

var myPizza = new Pizza();

function finalPrice() {
    document.getElementById("size-price").innerHTML = "$" + myPizza.charge;
    document.getElementById("crust-price").innerHTML = "$" + myPizza.charge;
    document.getElementById("topping-price").innerHTML = "$" + myPizza.charge;
    document.getElementById("delivery-price").innerHTML = "$" + myPizza.charge;
    document.getElementById("total-charge").innerHTML = "$" + myPizza.charge;
};
