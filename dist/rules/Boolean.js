import { AbstractRule } from "../core/AbstractRule";
export class Boolean extends AbstractRule {
    name = "boolean";
    trueVals = [true, "true", 1, "1", "yes", "on"];
    falseVals = [false, "false", 0, "0", "no", "off"];
    validate(value) {
        if (value === null || value === "")
            return false;
        return this.trueVals.includes(value) || this.falseVals.includes(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be a boolean.`;
    }
}
//# sourceMappingURL=Boolean.js.map