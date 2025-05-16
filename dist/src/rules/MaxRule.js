"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxRule = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class MaxRule extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "max";
    }
    validate(value, max) {
        if (value == null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length <= max;
        }
        if (typeof value === "number") {
            return value <= max;
        }
        return false;
    }
    message(field, max) {
        return `${this.ucfirst(field)} must not exceed ${max}`;
    }
}
exports.MaxRule = MaxRule;
//# sourceMappingURL=MaxRule.js.map