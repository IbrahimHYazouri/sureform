"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class Email extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "email";
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return typeof value === "string" && this.emailRegex.test(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be a valid email address.`;
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map