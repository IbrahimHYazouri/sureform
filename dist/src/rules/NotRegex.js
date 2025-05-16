"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotRegex = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class NotRegex extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "not-regex";
    }
    validate(value, pattern) {
        if (value == null || value === "")
            return false;
        return typeof value === "string" && !pattern.test(value);
    }
    message(field) {
        return `${this.ucfirst(field)} has a forbidden format.`;
    }
}
exports.NotRegex = NotRegex;
//# sourceMappingURL=NotRegex.js.map