import { AbstractRule } from "../core/AbstractRule";
export class Regex extends AbstractRule {
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
//# sourceMappingURL=Regex.js.map