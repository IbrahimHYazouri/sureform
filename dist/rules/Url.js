import { AbstractRule } from "../core/AbstractRule";
export class Url extends AbstractRule {
    constructor() {
        super(...arguments);
        this.name = "url";
        this.urlRegex = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;
    }
    validate(value) {
        if (value === null || value === "")
            return false;
        return typeof value === "string" && this.urlRegex.test(value);
    }
    message(field) {
        return `${this.ucfirst(field)} must be a valid URL`;
    }
}
//# sourceMappingURL=Url.js.map