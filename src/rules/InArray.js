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
exports.InArray = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var InArray = /** @class */ (function (_super) {
    __extends(InArray, _super);
    function InArray() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "in-array";
        return _this;
    }
    InArray.prototype.validate = function (value, list) {
        if (value == null)
            return false;
        return list.includes(value);
    };
    InArray.prototype.message = function (field, list) {
        return "".concat(this.ucfirst(field), " must be on of [").concat(list.join(", "), "]");
    };
    return InArray;
}(AbstractRule_1.AbstractRule));
exports.InArray = InArray;
