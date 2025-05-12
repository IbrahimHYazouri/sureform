"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numeric = void 0;
class Numeric {
    constructor() {
        this.name = "numeric";
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    message(field) {
        return `${field} must be a number`;
    }
}
exports.Numeric = Numeric;
//# sourceMappingURL=Numeric.js.map