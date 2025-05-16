"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InArray = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class InArray extends AbstractRule_1.AbstractRule {
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
exports.InArray = InArray;
//# sourceMappingURL=InArray.js.map