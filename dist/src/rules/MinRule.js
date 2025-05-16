"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinRule = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class MinRule extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "min";
    }
    validate(value, min) {
        if (value == null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length >= min;
        }
        if (typeof value === "number") {
            return value >= min;
        }
        return false;
    }
    message(field, min) {
        return `${this.ucfirst(field)} must be at least ${min}`;
    }
}
exports.MinRule = MinRule;
//# sourceMappingURL=MinRule.js.map