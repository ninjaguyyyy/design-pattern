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
exports.Tea = exports.Coffee = exports.Beverage = void 0;
var Beverage = /** @class */ (function () {
    function Beverage() {
        this._description = "Unknown Beverage";
    }
    Object.defineProperty(Beverage.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    return Beverage;
}());
exports.Beverage = Beverage;
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        var _this = _super.call(this) || this;
        _this.description = "Coffee";
        return _this;
    }
    Coffee.prototype.cost = function () {
        return 2;
    };
    return Coffee;
}(Beverage));
exports.Coffee = Coffee;
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        var _this = _super.call(this) || this;
        _this.description = "Tea";
        return _this;
    }
    Tea.prototype.cost = function () {
        return 1;
    };
    return Tea;
}(Beverage));
exports.Tea = Tea;
