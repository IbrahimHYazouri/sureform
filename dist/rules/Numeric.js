import { AbstractRule } from "../core/AbstractRule";
export class Numeric extends AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "numeric";
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be a number`;
    }
}
//# sourceMappingURL=Numeric.js.map