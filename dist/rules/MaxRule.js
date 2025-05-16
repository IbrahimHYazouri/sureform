import { AbstractRule } from "../core/AbstractRule";
export class MaxRule extends AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "max";
    }
    validate(value, max) {
        if (value == null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length <= max;
        }
        if (typeof value === "number") {
            return value <= max;
        }
        return false;
    }
    message(field, max) {
        return `${this.ucfirst(field)} must not exceed ${max}`;
    }
}
//# sourceMappingURL=MaxRule.js.map