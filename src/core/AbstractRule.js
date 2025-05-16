"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRule = void 0;
var AbstractRule = /** @class */ (function () {
    function AbstractRule() {
    }
    AbstractRule.prototype.ucfirst = function (field) {
        return field.charAt(0).toUpperCase() + field.slice(1);
    };
    return AbstractRule;
}());
exports.AbstractRule = AbstractRule;
