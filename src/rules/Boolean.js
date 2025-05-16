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
exports.Boolean = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var Boolean = /** @class */ (function (_super) {
    __extends(Boolean, _super);
    function Boolean() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "boolean";
        _this.trueVals = [true, "true", 1, "1", "yes", "on"];
        _this.falseVals = [false, "false", 0, "0", "no", "off"];
        return _this;
    }
    Boolean.prototype.validate = function (value) {
        if (value === null || value === "")
            return false;
        return this.trueVals.includes(value) || this.falseVals.includes(value);
    };
    Boolean.prototype.message = function (field) {
        return "".concat(this.ucfirst(field), " must be a boolean.");
    };
    return Boolean;
}(AbstractRule_1.AbstractRule));
exports.Boolean = Boolean;
