"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function () {
        this.temperature = this.weatherData.temperature;
        this.humidity = this.weatherData.humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("\n    CurrentConditionsDisplay: \n    - temperature: ".concat(this.temperature, "\n    - humidity: ").concat(this.humidity));
    };
    return CurrentConditionsDisplay;
}());
exports.default = CurrentConditionsDisplay;
