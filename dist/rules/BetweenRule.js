import { AbstractRule } from "../core/AbstractRule";
export class BetweenRule extends AbstractRule {
    name = "between";
    validate(value, min, max) {
        if (value === null)
            return true;
        if (typeof value === "string" || Array.isArray(value)) {
            return value.length >= min && value.length <= max;
        }
        if (typeof value === "number") {
            return value >= min && value <= max;
        }
        return false;
    }
    message(field, min, max) {
        return `${this.ucfirst(field)} must be between ${min} and ${max}`;
    }
}
//# sourceMappingURL=BetweenRule.js.map