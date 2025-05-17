import { AbstractRule } from "../core/AbstractRule";
export class StringRule extends AbstractRule {
    name = "string";
    validate(value) {
        if (value === null)
            return false;
        return typeof value === "string";
    }
    message(field) {
        return `${this.ucfirst(field)} must be a string.`;
    }
}
//# sourceMappingURL=StringRule.js.map