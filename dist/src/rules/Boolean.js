"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class Boolean extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
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
        return `${this.ucfirst(field)} must be a boolean.`;
    }
}
exports.Boolean = Boolean;
//# sourceMappingURL=Boolean.js.map