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

export interface Messages {
  [key: string]: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string[]>;
}

export class Validator {
  private data: Record<string, any>;
  private schema: Schema;
  private messages: Messages = {};
  private errors: Record<string, string[]> = {};

  constructor(data: Record<string, any>, rules: Schema, messages?: Messages) {
    this.data = data;
    this.schema = rules;
    this.messages = messages ? messages : {};
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
          const globalRuleKey = rule.name;

          const msg =
            this.messages[key] ??
            this.messages[globalRuleKey] ??
            rule.message(field, ...args);

          this.addError(field, msg);
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
      return { rule: ruleInstance, args: argArray };
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
