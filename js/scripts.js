function Phone(brand, price, color, inches) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.inches = inches;
	// this.blablabla = function() {
	// 	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", inches is " + this.inches + ", and the price is " + this.price + ".");
	// }
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", inches is " + this.inches + ", and the price is " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 2200, "black", 5.5);
var Iphone6S = new Phone("Apple", 2250, "silver", 5.3);
var OnePlusOne = new Phone("OnePlus", 1600, "black", 4.9)

SamsungGalaxyS6.printInfo();
Iphone6S.printInfo();
OnePlusOne.printInfo();