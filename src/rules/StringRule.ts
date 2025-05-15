import { AbstractRule } from "../core/AbstractRule";

export class StringRule extends AbstractRule {
  name = "string";

  validate(value: any): boolean {
    if (value === null) return false;

    return typeof value === "string";
  }

  message(field: string): string {
    return `${this.ucfirst(field)} must be a string.`;
  }
}
