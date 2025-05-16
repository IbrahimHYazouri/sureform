"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayRule_1 = require("../rules/ArrayRule");
const BetweenRule_1 = require("../rules/BetweenRule");
const Boolean_1 = require("../rules/Boolean");
const Email_1 = require("../rules/Email");
const FileType_1 = __importDefault(require("../rules/FileType"));
const InArray_1 = require("../rules/InArray");
const MaxRule_1 = require("../rules/MaxRule");
const MinRule_1 = require("../rules/MinRule");
const NotRegex_1 = require("../rules/NotRegex");
const Numeric_1 = require("../rules/Numeric");
const Regex_1 = require("../rules/Regex");
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
        return creator();
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
        RuleFactory.register("regex", () => new Regex_1.Regex());
        RuleFactory.register("not-regex", () => new NotRegex_1.NotRegex());
        RuleFactory.register("in-array", () => new InArray_1.InArray());
        RuleFactory.register("file-type", () => new FileType_1.default());
    }
}
RuleFactory.registry = new Map();
exports.default = RuleFactory;
RuleFactory.initializeDefaults();
//# sourceMappingURL=RuleFactory.js.map