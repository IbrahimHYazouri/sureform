"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetweenRule = void 0;
class BetweenRule {
    constructor() {
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
        return `${field} must be between ${min} and ${max}`;
    }
}
exports.BetweenRule = BetweenRule;
//# sourceMappingURL=BetweenRule.js.map