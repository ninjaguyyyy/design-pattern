"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var beverage_1 = require("./beverage");
var condimen_1 = require("./condimen");
function main() {
    // Coffee
    var beverage = new beverage_1.Coffee();
    console.log("".concat(beverage.description, " -  $").concat(beverage.cost()));
    // Tea
    var beverage1 = new beverage_1.Tea();
    console.log("".concat(beverage1.description, " -  $").concat(beverage1.cost()));
    // Coffee with Mocha
    var beverage2 = new beverage_1.Coffee();
    beverage2 = new condimen_1.Mocha(beverage2);
    console.log("".concat(beverage2.description, " -  $").concat(beverage2.cost()));
    // Tea with 2 Mocha, 1 Cream
    var beverage3 = new beverage_1.Tea();
    beverage3 = new condimen_1.Mocha(beverage3);
    beverage3 = new condimen_1.Mocha(beverage3);
    beverage3 = new condimen_1.Cream(beverage3);
    console.log("".concat(beverage3.description, " -  $").concat(beverage3.cost()));
}
main();
