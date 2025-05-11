"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
class Required {
    validate(field, value, params) {
        return value !== null && value !== undefined && value !== "";
    }
    message(field) {
        return `This filed [${field}] must be a valid email`;
    }
}
exports.Required = Required;
//# sourceMappingURL=Email.js.map