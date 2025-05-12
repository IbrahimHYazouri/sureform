"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
class Required {
    constructor() {
        this.name = 'required';
    }
    validate(field, value, params) {
        return value !== null && value !== undefined && value !== "";
    }
    message(field) {
        return `This filed [${field}] is required`;
    }
}
exports.Required = Required;
//# sourceMappingURL=Required%20copy.js.map