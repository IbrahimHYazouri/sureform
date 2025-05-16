import { AbstractRule } from "../core/AbstractRule";
export class InArray extends AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "in-array";
    }
    validate(value, list) {
        if (value == null)
            return false;
        return list.includes(value);
    }
    message(field, list) {
        return `${this.ucfirst(field)} must be on of [${list.join(", ")}]`;
    }
}
//# sourceMappingURL=InArray.js.map