import { AbstractRule } from "../core/AbstractRule";

export class ArrayRule extends AbstractRule {
  name = "array";

  validate(value: any): boolean {
    if (value === null) return true;

    return Array.isArray(value);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} must be an array.`;
  }
}
