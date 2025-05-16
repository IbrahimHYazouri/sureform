import { AbstractRule } from "../core/AbstractRule";
export class MinRule extends AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "min";
    }
    validate(value, min) {
        if (value == null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length >= min;
        }
        if (typeof value === "number") {
            return value >= min;
        }
        return false;
    }
    message(field, min) {
        return `${this.ucfirst(field)} must be at least ${min}`;
    }
}
//# sourceMappingURL=MinRule.js.map