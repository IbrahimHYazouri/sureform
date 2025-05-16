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
exports.MaxRule = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var MaxRule = /** @class */ (function (_super) {
    __extends(MaxRule, _super);
    function MaxRule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "max";
        return _this;
    }
    MaxRule.prototype.validate = function (value, max) {
        if (value == null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length <= max;
        }
        if (typeof value === "number") {
            return value <= max;
        }
        return false;
    };
    MaxRule.prototype.message = function (field, max) {
        return "".concat(this.ucfirst(field), " must not exceed ").concat(max);
    };
    return MaxRule;
}(AbstractRule_1.AbstractRule));
exports.MaxRule = MaxRule;
