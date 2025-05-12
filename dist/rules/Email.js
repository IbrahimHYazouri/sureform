"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor() {
        this.name = "email";
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return typeof value === "string" && this.emailRegex.test(value);
    }
    message(field) {
        return `${field} must be a valid email address.`;
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map