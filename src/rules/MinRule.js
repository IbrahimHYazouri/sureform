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
exports.MinRule = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var MinRule = /** @class */ (function (_super) {
    __extends(MinRule, _super);
    function MinRule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "min";
        return _this;
    }
    MinRule.prototype.validate = function (value, min) {
        if (value == null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length >= min;
        }
        if (typeof value === "number") {
            return value >= min;
        }
        return false;
    };
    MinRule.prototype.message = function (field, min) {
        return "".concat(this.ucfirst(field), " must be at least ").concat(min);
    };
    return MinRule;
}(AbstractRule_1.AbstractRule));
exports.MinRule = MinRule;
