"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractRule_1 = require("../core/AbstractRule");
class FileType extends AbstractRule_1.AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "file-type";
    }
    validate(value, types) {
        if (!value)
            return false;
        return value.type && types.includes(value.type);
    }
    message(field, types) {
        return `${this.ucfirst(field)} must be of type: ${types.join(", ")}`;
    }
}
exports.default = FileType;
//# sourceMappingURL=FileType.js.map