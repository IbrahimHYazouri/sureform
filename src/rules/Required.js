"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
var Required = /** @class */ (function () {
    function Required() {
        this.name = "required";
    }
    Required.prototype.validate = function (value) {
        return value !== null && value !== undefined && value !== "";
    };
    Required.prototype.message = function (field) {
        return "This filed [".concat(field, "] is required");
    };
    return Required;
}());
exports.Required = Required;
