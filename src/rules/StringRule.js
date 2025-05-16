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
exports.StringRule = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var StringRule = /** @class */ (function (_super) {
    __extends(StringRule, _super);
    function StringRule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "string";
        return _this;
    }
    StringRule.prototype.validate = function (value) {
        if (value === null)
            return false;
        return typeof value === "string";
    };
    StringRule.prototype.message = function (field) {
        return "".concat(this.ucfirst(field), " must be a string.");
    };
    return StringRule;
}(AbstractRule_1.AbstractRule));
exports.StringRule = StringRule;
