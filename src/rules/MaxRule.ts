import { AbstractRule } from "../core/AbstractRule";

export class MaxRule extends AbstractRule {
  name = "max";

  validate(value: any, max: number): boolean {
    if (value == null) return true;

    if (typeof value === "string" || Array.isArray(value)) {
      return value.length <= max;
    }

    if (typeof value === "number") {
      return value <= max;
    }

    return false;
  }

  message(field: string, max: number): string {
    return `${this.ucfirst(field)} must not exceed ${max}`;
  }
}
