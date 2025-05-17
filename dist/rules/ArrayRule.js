import { AbstractRule } from "../core/AbstractRule";
export class ArrayRule extends AbstractRule {
    name = "array";
    validate(value) {
        if (value === null)
            return false;
        return Array.isArray(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be an array.`;
    }
}
//# sourceMappingURL=ArrayRule.js.map