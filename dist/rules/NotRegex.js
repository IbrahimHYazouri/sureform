import { AbstractRule } from "../core/AbstractRule";
export class NotRegex extends AbstractRule {
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
//# sourceMappingURL=NotRegex.js.map