"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class Regex extends AbstractRule_1.AbstractRule {
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
exports.Regex = Regex;
//# sourceMappingURL=Regex.js.map