import ValidationRule from "../core/ValidationRule";

export class MaxRule implements ValidationRule {
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
    return `${field} must not exceed ${max}`;
  }
}
