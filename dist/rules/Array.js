"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayRule = void 0;
class ArrayRule {
    constructor() {
        this.name = "array";
    }
    validate(value) {
        if (value === null)
            return false;
        return Array.isArray(value);
    }
    message(field) {
        return `${field} must be a valid URL`;
    }
}
exports.ArrayRule = ArrayRule;
//# sourceMappingURL=Array.js.map