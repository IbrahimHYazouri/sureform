import { AbstractRule } from "../core/AbstractRule";

export class MinRule extends AbstractRule {
  name = "min";

  validate(value: any, min: number): boolean {
    if (value == null) return true;

    if (typeof value === "string" || Array.isArray(value)) {
      return value.length >= min;
    }

    if (typeof value === "number") {
      return value >= min;
    }

    return false;
  }

  message(field: string, min: number): string {
    return `${this.ucfirst(field)} must be at least ${min}`;
  }
}
