import { ArrayRule } from "../rules/ArrayRule";
import { BetweenRule } from "../rules/BetweenRule";
import { Boolean } from "../rules/Boolean";
import { Email } from "../rules/Email";
import FileType from "../rules/FileType";
import { InArray } from "../rules/InArray";
import { MaxRule } from "../rules/MaxRule";
import { MinRule } from "../rules/MinRule";
import { NotRegex } from "../rules/NotRegex";
import { Numeric } from "../rules/Numeric";
import { Regex } from "../rules/Regex";
import { Required } from "../rules/Required";
import { StringRule } from "../rules/StringRule";
import { Url } from "../rules/Url";
import { StrongPassword } from "../rules/StrongPassword";
export default class RuleFactory {
    static registry = new Map();
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
        RuleFactory.register("required", () => new Required());
        RuleFactory.register("min", () => new MinRule());
        RuleFactory.register("max", () => new MaxRule());
        RuleFactory.register("between", () => new BetweenRule());
        RuleFactory.register("email", () => new Email());
        RuleFactory.register("url", () => new Url());
        RuleFactory.register("array", () => new ArrayRule());
        RuleFactory.register("numeric", () => new Numeric());
        RuleFactory.register("string", () => new StringRule());
        RuleFactory.register("boolean", () => new Boolean());
        RuleFactory.register("regex", () => new Regex());
        RuleFactory.register("not-regex", () => new NotRegex());
        RuleFactory.register("in-array", () => new InArray());
        RuleFactory.register("file-type", () => new FileType());
        RuleFactory.register("strong-password", () => new StrongPassword());
    }
}
RuleFactory.initializeDefaults();
//# sourceMappingURL=RuleFactory.js.map