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
var AbstractRule_1 = require("../core/AbstractRule");
var FileType = /** @class */ (function (_super) {
    __extends(FileType, _super);
    function FileType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "file-type";
        return _this;
    }
    FileType.prototype.validate = function (value, types) {
        if (!value)
            return false;
        return value.type && types.includes(value.type);
    };
    FileType.prototype.message = function (field, types) {
        return "".concat(this.ucfirst(field), " must be of type: ").concat(types.join(", "));
    };
    return FileType;
}(AbstractRule_1.AbstractRule));
exports.default = FileType;
