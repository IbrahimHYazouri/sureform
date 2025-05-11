"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MinRule_1 = require("../rules/MinRule");
const Required_1 = require("../rules/Required");
class RuleFactory {
    static register(name, creator) {
        if (RuleFactory.registry.has(name)) {
            throw new Error(`Rule [${name}] is already registered.`);
        }
        RuleFactory.registry.set(name, creator);
    }
    static create(name, args) {
        const creator = RuleFactory.registry.get(name);
        if (!creator) {
            throw new Error(`Rule [${name}] is not registered`);
        }
        return creator(...args);
    }
    static initializeDefaults() {
        RuleFactory.register("required", () => new Required_1.Required());
        RuleFactory.register("min", () => new MinRule_1.MinRule());
    }
}
RuleFactory.registry = new Map();
exports.default = RuleFactory;
RuleFactory.initializeDefaults();
//# sourceMappingURL=RuleFactory.js.map