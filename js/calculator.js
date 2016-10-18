
var Customer = function (name) {
    this.name = name;
    this.items = [];
    this.tax = 0;
}

var MealItems = function(name, price, taxes) {
    this.name = name;
    this.price = price;
    this.taxes = (this.price * .05).toFixed(2);
}

var viewBill = function() {

    console.log("The total for " + this.name + "'s meal including tax is " + sum + ".");

}

Customer.prototype.add = function(item) {
    this.items.push(item);
}

Customer.prototype.subtotal = function() {
    var sum = 0;
    for (i = 0; i < this.items.length; i++) {
        sum = sum + this.items[i].price;
    }
    return sum.toFixed(2);
}

Customer.prototype.taxes = function() {
    var subTotal = 0;
    for (i = 0; i < this.items.length; i++) {
        subTotal = subTotal + this.items[i].price;
    }
    var tax = subTotal * .05;
    tax += this.tax;
    return tax;
}

Customer.prototype.totalDishes = function() {
    var dishes = this.items.length;
    return dishes;
}

var c1 = new Customer("Russell");
var c2 = new Customer("Melanie");
var c3 = new Customer("Josh");

console.log(c1);
console.log(c2);
console.log(c3);

var m1 = new MealItems("Roasted Chicken", 17.95);
var m2 = new MealItems("Red Snapper", 24.95);
var m3 = new MealItems("New York Prime Rib", 34.95);
var m4 = new MealItems("Tomato Soup", 6.95);
var m5 = new MealItems("Caesar Salad", 7.95);
var m6 = new MealItems("Mashed Potatoes", 5.95);

console.log(m1);
console.log(m2);
console.log(m3);

c1.add(m1);
c2.add(m2);
c3.add(m3);
c1.add(m4);
c2.add(m5);
c3.add(m6);

/*console.log("Tonight, we have diners: " + c1.name + ", " + c2.name + " and " + c3.name + ".");
console.log("For " + c1.name + ", the following items were ordered: " + c1.items[0].name + " and " + c1.items[1].name + ".");
console.log("The cost for these items are $" + c1.items[0].price + " and $" + c1.items[1].price + " respectively.");
console.log("For " + c2.name + ", the following items were ordered: " + c2.items[0].name + " and " + c2.items[1].name + ".");
console.log("The cost for these items are $" + c2.items[0].price + " and $" + c2.items[1].price + " respectively.");
console.log("Finally, for " + c3.name + ", the following items were ordered: " + c3.items[0].name + " and " + c3.items[1].name + ".")
console.log("The cost for these items are $" + c3.items[0].price + " and $" + c3.items[1].price + " respectively.");
*/

$(document).ready(function() {

    function checkout() {
        console.log("Hello! Please see your bill breakdown below:");
        console.log("");
        console.log("Bill for: " + c1.name + "");
        console.log("   " + c1.items[0].name + " - " + c1.items[0].price + "");
        console.log("   " + c1.items[1].name + " - " + c1.items[1].price + "");
        console.log("_______________________");
        console.log("Subtotal: " + c1.subtotal() + "");
        console.log("Taxes: ");
        console.log("Total: ");
        console.log("");
        console.log("Bill for: " + c2.name + "");
        console.log("   " + c2.items[0].name + " - " + c2.items[0].price + "");
        console.log("   " + c2.items[1].name + " - " + c2.items[1].price + "");
        console.log("_______________________");
        console.log("Subtotal: " + c2.subtotal() + "");
        console.log("Taxes: ");
        console.log("Total: ");
        console.log("");
        console.log("Bill for: " + c3.name + "");
        console.log("   " + c3.items[0].name + " - " + c3.items[0].price + "");
        console.log("   " + c3.items[1].name + " - " + c3.items[1].price + "");
        console.log("_______________________");
        console.log("Subtotal: " + c3.subtotal() + "");
        console.log("Taxes: ");
        console.log("Total: ");
    };

    checkout();
});
