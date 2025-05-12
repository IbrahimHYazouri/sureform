"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxRule = void 0;
class MaxRule {
    constructor() {
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
        return `${field} must not exceed ${max}`;
    }
}
exports.MaxRule = MaxRule;
//# sourceMappingURL=MaxRule.js.map