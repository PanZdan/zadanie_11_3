function Phone(brand, price, color, inches) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.inches = inches;
};
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", inches is " + this.inches + ", and the price is " + this.price + ".");
};

var samsungGalaxyS6 = new Phone("Samsung", 2200, "black", 5.5);
var iphone6S = new Phone("Apple", 2250, "silver", 5.3);
var onePlusOne = new Phone("OnePlus", 1600, "black", 4.9);

samsungGalaxyS6.printInfo();
iphone6S.printInfo();
onePlusOne.printInfo();

Phone.prototype.applyDiscount = function (discount) {
	return this.price -= discount;
}

samsungGalaxyS6.printInfo();
samsungGalaxyS6.applyDiscount(1000);
samsungGalaxyS6.printInfo();

Phone.prototype.inch = function() {
	console.log("The phone is " + this.brand + " inches is " + this.inches + ".");
};
iphone6S.inch(); 

Phone.prototype.changeColor = function (newColor) {
	return this.color = newColor;
}
iphone6S.printInfo();
iphone6S.applyDiscount(400);
iphone6S.changeColor("red");
iphone6S.printInfo();