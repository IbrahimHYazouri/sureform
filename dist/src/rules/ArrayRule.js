"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayRule = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class ArrayRule extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "array";
    }
    validate(value) {
        if (value === null)
            return false;
        return Array.isArray(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be an array.`;
    }
}
exports.ArrayRule = ArrayRule;
//# sourceMappingURL=ArrayRule.js.map