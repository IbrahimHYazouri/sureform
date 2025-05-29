import { AbstractRule } from "../core/AbstractRule";
export class StrongPassword extends AbstractRule {
    name = "strong-password";
    validate(value) {
        if (!value || typeof value !== "string")
            return false;
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
    }
    message(field) {
        return `${field} must be at least 8 characters long and include uppercase, lowercase, number, and special character.`;
    }
}
//# sourceMappingURL=StrongPassword.js.map