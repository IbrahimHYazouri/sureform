"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayRule_1 = require("../rules/ArrayRule");
const BetweenRule_1 = require("../rules/BetweenRule");
const Boolean_1 = require("../rules/Boolean");
const Email_1 = require("../rules/Email");
const MaxRule_1 = require("../rules/MaxRule");
const MinRule_1 = require("../rules/MinRule");
const Numeric_1 = require("../rules/Numeric");
const Required_1 = require("../rules/Required");
const StringRule_1 = require("../rules/StringRule");
const Url_1 = require("../rules/Url");
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
        RuleFactory.register("max", () => new MaxRule_1.MaxRule());
        RuleFactory.register("between", () => new BetweenRule_1.BetweenRule());
        RuleFactory.register("email", () => new Email_1.Email());
        RuleFactory.register("url", () => new Url_1.Url());
        RuleFactory.register("array", () => new ArrayRule_1.ArrayRule());
        RuleFactory.register("numeric", () => new Numeric_1.Numeric());
        RuleFactory.register("string", () => new StringRule_1.StringRule());
        RuleFactory.register("boolean", () => new Boolean_1.Boolean());
    }
}
RuleFactory.registry = new Map();
exports.default = RuleFactory;
RuleFactory.initializeDefaults();
//# sourceMappingURL=RuleFactory.js.map