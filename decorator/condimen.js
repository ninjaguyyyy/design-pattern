"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cream = exports.Mocha = void 0;
var beverage_1 = require("./beverage");
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(beverage_1.Beverage));
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this._beverage = beverage;
        return _this;
    }
    Object.defineProperty(Mocha.prototype, "description", {
        get: function () {
            return this._beverage.description + " + Mocha";
        },
        enumerable: false,
        configurable: true
    });
    Mocha.prototype.cost = function () {
        return this._beverage.cost() + 0.5;
    };
    return Mocha;
}(CondimentDecorator));
exports.Mocha = Mocha;
var Cream = /** @class */ (function (_super) {
    __extends(Cream, _super);
    function Cream(beverage) {
        var _this = _super.call(this) || this;
        _this._beverage = beverage;
        return _this;
    }
    Object.defineProperty(Cream.prototype, "description", {
        get: function () {
            return this._beverage.description + " + Cream";
        },
        enumerable: false,
        configurable: true
    });
    Cream.prototype.cost = function () {
        return this._beverage.cost() + 0.1;
    };
    return Cream;
}(CondimentDecorator));
exports.Cream = Cream;
