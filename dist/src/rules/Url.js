"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const AbstractRule_1 = require("../core/AbstractRule");
class Url extends AbstractRule_1.AbstractRule {
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
exports.Url = Url;
//# sourceMappingURL=Url.js.map