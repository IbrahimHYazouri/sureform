"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractRule {
    shouldValidate(value, params = {}) {
        const isEmpty = value === null ||
            value === "" ||
            (Array.isArray(value) && value.length === 0);
        const isRequired = params.required === true;
        return !(isEmpty && !isRequired);
    }
    getDisplayName(field, attributes) {
        var _a;
        return (_a = attributes[field]) !== null && _a !== void 0 ? _a : this.ucfirst(field.replace(/[_\.]/g, " "));
    }
    ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    formatErrorMessage(message, params) {
        return message;
    }
    errorMessage(field, params, messages, attributes) {
        const displayName = this.getDisplayName(field, attributes);
        if (messages[field]) {
            return this.formatErrorMessage(messages[field], Object.assign(Object.assign({}, params), { field: displayName }));
        }
        return this.defaultErrorMessage(displayName, params);
    }
}
exports.default = AbstractRule;
//# sourceMappingURL=AbstractRule.js.map