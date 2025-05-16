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
exports.Url = void 0;
var AbstractRule_1 = require("../core/AbstractRule");
var Url = /** @class */ (function (_super) {
    __extends(Url, _super);
    function Url() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "url";
        _this.urlRegex = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;
        return _this;
    }
    Url.prototype.validate = function (value) {
        if (value === null || value === "")
            return false;
        return typeof value === "string" && this.urlRegex.test(value);
    };
    Url.prototype.message = function (field) {
        return "".concat(this.ucfirst(field), " must be a valid URL");
    };
    return Url;
}(AbstractRule_1.AbstractRule));
exports.Url = Url;
