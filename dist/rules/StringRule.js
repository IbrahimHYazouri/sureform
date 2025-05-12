"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringRule = void 0;
class StringRule {
    constructor() {
        this.name = "string";
    }
    validate(value) {
        if (value === null)
            return false;
        return typeof value === "string";
    }
    message(field) {
        return `${field} must be a string.`;
    }
}
exports.StringRule = StringRule;
//# sourceMappingURL=StringRule.js.map