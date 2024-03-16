"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForecastDisplay = /** @class */ (function () {
    function ForecastDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    ForecastDisplay.prototype.update = function () {
        this.temperature = this.weatherData.temperature;
        this.humidity = this.weatherData.humidity;
        this.display();
    };
    ForecastDisplay.prototype.display = function () {
        var total = this.temperature + this.humidity;
        console.log("\n    ForecastDisplay: \n    => Forecast: ".concat(total > 3 ? "Sunny" : "Rain"));
    };
    return ForecastDisplay;
}());
exports.default = ForecastDisplay;
