"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrentConditionsDisplay_1 = require("./CurrentConditionsDisplay");
var ForecastDisplay_1 = require("./ForecastDisplay");
var WeatherData_1 = require("./WeatherData");
function main() {
    var weatherData = new WeatherData_1.default();
    var currentConditionsDisplay = new CurrentConditionsDisplay_1.default(weatherData);
    var forecastDisplay = new ForecastDisplay_1.default(weatherData);
    weatherData.setMeasurements(80, 65);
}
main();
