"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringRule = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class StringRule extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "string";
    }
    validate(value) {
        if (value === null)
            return false;
        return typeof value === "string";
    }
    message(field) {
        return `${this.ucfirst(field)} must be a string.`;
    }
}
exports.StringRule = StringRule;
//# sourceMappingURL=StringRule.js.map