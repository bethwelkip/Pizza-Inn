function small() {


};

function medium() {


};

window.onload = function large() {
    if (document.getElementById('isAgeSelected').checked) {
        $("#txtAge").show();
        $("#txtAge").show();
        $("#txtAge").hide();
        $("#txtAge").hide();
    } else if (document.getElementById('isAgeSelected').checked) {
        $("#txtAge").hide();
        $("#txtAge").show();
        $("#txtAge").hide();
    }
    else {
        $("#txtAge").hide();
        $("#txtAge").show();
        $("#txtAge").hide();
    }
    // crusts
    document.getElementById("crusty-cost").innerHTML = "$1.50";
    /*document.getElementById("thin").innerHTML = "$" + 1.50;
    document.getElementById("hard").innerHTML = "$" + 1.50;
    document.getElementById("thick").innerHTML = "$" + 1.50;
    toppings
    document.getElementById("total-charge").innerHTML = ;
    document.getElementById("total-charge").innerHTML = ;
    document.getElementById("total-charge").innerHTML = ;
    document.getElementById("total-charge").innerHTML = ;
    document.getElementById("total-charge").innerHTML = ;
    document.getElementById("total-charge").innerHTML = ; */


};

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = "";
    this.charge = 1000;
}
/*var sized = document.getElementById("total-charge").value;
var toped = document.getElementById("total-charge").value;
var crusted = document.getElementById("total-charge").value;
var delivered = document.getElementById("total-charge").value; */
var myPizza = new Pizza();

function finalPrice() {
    document.getElementById("total-charge").innerHTML = "$" + myPizza.charge;
};
$(document).ready(function () {
    $(".large").click(function () {
        document.getElementById("crusty-cost").innerHTML = "$1.50";


    });


});