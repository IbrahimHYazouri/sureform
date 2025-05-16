import { AbstractRule } from "../core/AbstractRule";
export default class FileType extends AbstractRule {
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
//# sourceMappingURL=FileType.js.map