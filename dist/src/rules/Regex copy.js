"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexRule = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class RegexRule extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "regex";
    }
    validate(value, pattern) {
        if (value == null || value === "")
            return false;
        return typeof value === "string" && pattern.test(value);
    }
    message(field) {
        return `${this.ucfirst(field)} has an invalid format.`;
    }
}
exports.RegexRule = RegexRule;
//# sourceMappingURL=Regex%20copy.js.map