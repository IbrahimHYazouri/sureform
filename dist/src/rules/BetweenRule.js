"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetweenRule = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class BetweenRule extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "between";
    }
    validate(value, min, max) {
        if (value === null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length >= min && value.length <= max;
        }
        if (typeof value === "number") {
            return value >= min && value <= max;
        }
        return false;
    }
    message(field, min, max) {
        return `${this.ucfirst(field)} must be between ${min} and ${max}`;
    }
}
exports.BetweenRule = BetweenRule;
//# sourceMappingURL=BetweenRule.js.map