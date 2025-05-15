import ValidationRule from "../core/ValidationRule";
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

type RuleCreator = (args?: any) => ValidationRule;

export default class RuleFactory {
  private static registry: Map<string, RuleCreator> = new Map();

  static register(name: string, creator: RuleCreator): void {
    if (RuleFactory.registry.has(name)) {
      throw new Error(`Rule [${name}] is already registered.`);
    }
    RuleFactory.registry.set(name, creator);
  }

  static create(name: string, args?: any): ValidationRule {
    const creator = RuleFactory.registry.get(name);
    if (!creator) {
      throw new Error(`Rule [${name}] is not registered`);
    }
    return creator(...args);
  }

  static initializeDefaults(): void {
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
  }
}

RuleFactory.initializeDefaults();
