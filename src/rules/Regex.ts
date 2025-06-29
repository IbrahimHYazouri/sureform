import { AbstractRule } from "../core/AbstractRule";

export class Regex extends AbstractRule {
  name = "regex";

  validate(value: any, pattern: RegExp): boolean {
    if (value == null || value === "") return true;

    return typeof value === "string" && pattern.test(value);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} has an invalid format.`;
  }
}
