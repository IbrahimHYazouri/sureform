"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numeric = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class Numeric extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "numeric";
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be a number`;
    }
}
exports.Numeric = Numeric;
//# sourceMappingURL=Numeric.js.map