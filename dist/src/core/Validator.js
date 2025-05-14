"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const RuleFactory_1 = __importDefault(require("../factory/RuleFactory"));
class Validator {
    constructor(data, rules, messages, fields) {
        this.messages = {};
        this.fields = {};
        this.errors = {};
        this.data = data;
        this.schema = rules;
        this.messages = messages ? messages : {};
        this.fields = fields ? fields : {};
    }
    validate() {
        var _a, _b, _c;
        this.errors = {};
        for (const field in this.schema) {
            const defs = this.schema[field];
            const value = this.data[field];
            for (const def of defs) {
                const { rule, args } = this.parseRule(def);
                const valid = rule.validate(value, ...args);
                if (!valid) {
                    const key = `${field}.${rule.name}`;
                    const globalRuleKey = rule.name;
                    const msg = (_b = (_a = this.messages[key]) !== null && _a !== void 0 ? _a : this.messages[globalRuleKey]) !== null && _b !== void 0 ? _b : rule.message((_c = this.fields[field]) !== null && _c !== void 0 ? _c : field, ...args);
                    this.addError(field, msg);
                }
            }
        }
        return {
            valid: Object.keys(this.errors).length === 0,
            errors: this.errors,
        };
    }
    resolveField(path) {
        return path
            .split(".")
            .reduce((acc, part) => (acc ? acc[part] : undefined), this.data);
    }
    parseRule(rule) {
        if (typeof rule === "string") {
            const [name, ...args] = rule.split(":");
            const argArray = args.length > 0 ? args[0].split(",") : [];
            const ruleInstance = RuleFactory_1.default.create(name, argArray);
            if (!ruleInstance) {
                throw new Error(`Rule "${name}" is not registered.`);
            }
            return { rule: ruleInstance, args: argArray };
        }
        return { rule: rule, args: [] };
    }
    addError(field, message) {
        if (!this.errors[field]) {
            this.errors[field] = [];
        }
        this.errors[field].push(message);
    }
    getErrors() {
        return this.errors;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map