import RuleFactory from "../factory/RuleFactory";
import ValidationRule from "./ValidationRule";

type Rules = Record<string, string[]>;

export interface RuleDefinition {
  name: string;
  args?: any;
}

export type Schema = {
  [field: string]: (
    | string
    | RuleDefinition
    | ((value: any) => boolean | string)
  )[];
};

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string[]>;
}

export class Validator {
  private data: Record<string, any>;
  private schema: Schema;
  private errors: Record<string, string[]> = {};

  constructor(data: Record<string, any>, rules: Schema) {
    this.data = data;
    this.schema = rules;
  }

  validate(): ValidationResult {
    this.errors = {};

    for (const field in this.schema) {
      const defs = this.schema[field];
      const value = this.data[field];

      for (const def of defs) {
        const { rule, args } = this.parseRule(def);
        if (
          rule.name !== "required" &&
          (value === null || value === undefined || value === "")
        ) {
          continue;
        }
        const valid = rule.validate(value, ...args);
        if (!valid) {
          const key = `${field}.${rule.name}`;
          this.addError(field, rule.message(field, ...args));
        }
      }
    }

    return {
      valid: Object.keys(this.errors).length === 0,
      errors: this.errors,
    };
  }

  resolveField(path: string): any {
    return path
      .split(".")
      .reduce((acc, part) => (acc ? acc[part] : undefined), this.data);
  }

  private parseRule(
    rule: string | RuleDefinition | ((value: any) => boolean | string)
  ): { rule: ValidationRule; args: any[] } {
    if (typeof rule === "string") {
      const [name, ...args] = rule.split(":");
      const argArray = args.length > 0 ? args[0].split(",") : [];
      const ruleInstance = RuleFactory.create(name, argArray);
      if (!ruleInstance) {
        throw new Error(`Rule "${name}" is not registered.`);
      }
      return { rule: ruleInstance, args: args };
    }

    return { rule: rule as ValidationRule, args: [] };
  }

  private addError(field: string, message: string): void {
    if (!this.errors[field]) {
      this.errors[field] = [];
    }
    this.errors[field].push(message);
  }

  getErrors(): Record<string, string[]> {
    return this.errors;
  }
}
