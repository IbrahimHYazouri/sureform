import { AbstractRule } from "../core/AbstractRule";

export class NotRegex extends AbstractRule {
  name = "not-regex";

  validate(value: any, pattern: RegExp): boolean {
    if (value == null || value === "") return true;

    return typeof value === "string" && !pattern.test(value);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} has a forbidden format.`;
  }
}
