"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
class Boolean {
    constructor() {
        this.name = "boolean";
        this.trueVals = [true, "true", 1, "1", "yes", "on"];
        this.falseVals = [false, "false", 0, "0", "no", "off"];
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return this.trueVals.includes(value) || this.falseVals.includes(value);
    }
    message(field) {
        return `${field} must be a boolean.`;
    }
}
exports.Boolean = Boolean;
//# sourceMappingURL=Boolean.js.map