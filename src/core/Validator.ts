import RuleFactory from "../factory/RuleFactory";
import ValidationRule from "./ValidationRule";

type Rules = Record<string, string[]>;

export type SchemaRule =
  | string
  | RuleDefinition
  | ((val: any, data?: any) => boolean | string);
export interface RuleDefinition {
  name: string;
  args?: any[];
}
export type Schema = Record<string, SchemaRule[]>;
export interface Messages {
  [key: string]: string;
}
export interface Fields {
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
  private fields: Fields = {};
  private errors: Record<string, string[]> = {};

  constructor(
    data: Record<string, any>,
    rules: Schema,
    messages?: Messages,
    fields?: Fields
  ) {
    this.data = data;
    this.schema = rules;
    this.messages = messages ? messages : {};
    this.fields = fields ? fields : {};
  }

  validate(): ValidationResult {
    this.errors = {};

    for (const key of Object.keys(this.schema)) {
      const rules = this.schema[key];

      if (key.includes(".*.")) {
        const [pre, post] = key.split(".*.");
        const arr = this.resolveField(pre) || [];
        arr.forEach((_: any, index: any) => {
          const fieldPath = `${pre}.${index}.${post}`;
          this.applyRules(fieldPath, rules);
        });
      } else {
        this.applyRules(key, rules);
      }
    }

    return {
      valid: Object.keys(this.errors).length === 0,
      errors: this.errors,
    };
  }

  private applyRules(path: string, rules: SchemaRule[]) {
    const value = this.resolveField(path);

    rules.forEach((def) => {
      let rule: ValidationRule, args: any[];
      let callbackMessage = "";

      if (typeof def === "function") {
        rule = {
          name: "callback",
          validate: (value: any) => {
            const res = def(value);
            if (res === true) {
              return true;
            }

            callbackMessage = res as string;
            return false;
          },
          message: () => callbackMessage,
        };
        args = [];
      } else {
        const [name, argStr] = (
          typeof def === "string" ? def : def.name
        )!.split(":");
        args =
          def !== null && typeof def !== "string" && "args" in def
            ? def.args!
            : argStr
            ? argStr.split(",")
            : [];
        rule = RuleFactory.create(name, ...args);
      }

      const passed = rule.validate(value, ...args);
      if (!passed) {
        // 1) Resolve the user-friendly label for this field
        const label = this.getFieldLabel(path);

        // 2) Pick the correct message template:
        //    a) field.rule, b) global rule, c) rule default
        const keyFieldRule = `${path}.${rule.name}`;
        const keyGlobalRule = rule.name;

        let msgTemplate =
          this.messages[keyFieldRule] ??
          this.messages[keyGlobalRule] ??
          rule.message(this.fields[label] ?? label, ...args);

        // 3) Replace :field placeholder with the actual label or field key
        //    Supports multiple occurrences of :field in the message
        msgTemplate = msgTemplate.split(":field").join(label);

        this.addError(path, msgTemplate);
      }
    });
  }

  private resolveField(path: string): any {
    return path
      .split(".")
      .reduce((acc, part) => (acc ? acc[part] : undefined), this.data);
  }

  private getFieldLabel(path: string) {
    // lookup custom label by base key (before wildcard index)
    const base = path.replace(/\.\d+\./, ".*.");
    return this.fields[base] || this.fields[path] || path;
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
