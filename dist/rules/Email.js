import { AbstractRule } from "../core/AbstractRule";
export class Email extends AbstractRule {
    name = "email";
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validate(value) {
        if (value === null || value === "")
            return false;
        return typeof value === "string" && this.emailRegex.test(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be a valid email address.`;
    }
}
//# sourceMappingURL=Email.js.map