var WeatherData = /** @class */ (function () {
    function WeatherData(currentConditionsDisplay, forecastDisplay) {
        this.temperature = 1;
        this.humidity = 2;
        this.pressure = 3;
        this.currentConditionsDisplay = currentConditionsDisplay;
        this.forecastDisplay = forecastDisplay;
    }
    WeatherData.prototype.measurementsChanged = function () {
        this.currentConditionsDisplay.display(this.temperature, this.humidity, this.pressure);
        this.forecastDisplay.display(this.temperature, this.humidity, this.pressure);
    };
    return WeatherData;
}());
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay() {
    }
    CurrentConditionsDisplay.prototype.display = function (temperature, humidity, pressure) {
        console.log("\n    CurrentConditionsDisplay: \n    - temperature: ".concat(temperature, "\n    - humidity: ").concat(humidity, "\n    - pressure: ").concat(pressure));
    };
    return CurrentConditionsDisplay;
}());
var ForecastDisplay = /** @class */ (function () {
    function ForecastDisplay() {
    }
    ForecastDisplay.prototype.display = function (temperature, humidity, pressure) {
        var total = temperature + humidity + pressure;
        console.log("\n    ForecastDisplay: \n    => Forecast: ".concat(total > 3 ? "Sunny" : "Rain"));
    };
    return ForecastDisplay;
}());
function main() {
    var currentConditionsDisplay = new CurrentConditionsDisplay();
    var forecastDisplay = new ForecastDisplay();
    var weatherData = new WeatherData(currentConditionsDisplay, forecastDisplay);
    weatherData.measurementsChanged();
}
main();
