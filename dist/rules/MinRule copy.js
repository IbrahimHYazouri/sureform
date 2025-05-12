"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinRule = void 0;
class MinRule {
    constructor() {
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
        return `${field} must be at least ${min}`;
    }
}
exports.MinRule = MinRule;
//# sourceMappingURL=MinRule%20copy.js.map