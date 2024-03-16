"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    Object.defineProperty(WeatherData.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherData.prototype, "humidity", {
        get: function () {
            return this._humidity;
        },
        enumerable: false,
        configurable: true
    });
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        // todo: handle remove observer
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update();
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity) {
        this._temperature = temperature;
        this._humidity = humidity;
        this.measurementsChanged();
    };
    return WeatherData;
}());
exports.default = WeatherData;
