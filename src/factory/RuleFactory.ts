import ValidationRule from "../core/ValidationRule";
import { MinRule } from "../rules/MinRule";
import { Required } from "../rules/Required";

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
  }
}

RuleFactory.initializeDefaults();
