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
exports.BetweenRule = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var BetweenRule = /** @class */ (function (_super) {
    __extends(BetweenRule, _super);
    function BetweenRule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "between";
        return _this;
    }
    BetweenRule.prototype.validate = function (value, min, max) {
        if (value === null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length >= min && value.length <= max;
        }
        if (typeof value === "number") {
            return value >= min && value <= max;
        }
        return false;
    };
    BetweenRule.prototype.message = function (field, min, max) {
        return "".concat(this.ucfirst(field), " must be between ").concat(min, " and ").concat(max);
    };
    return BetweenRule;
}(AbstractRule_1.AbstractRule));
exports.BetweenRule = BetweenRule;
