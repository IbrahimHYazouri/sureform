import ValidationRule from "../core/ValidationRule";

export class BetweenRule implements ValidationRule {
  name = "between";

  validate(value: any, min: number, max: number): boolean {
    if (value === null) return true;

    if (typeof value === "string" || Array.isArray(value)) {
      return value.length >= min && value.length <= max;
    }

    if (typeof value === "number") {
      return value >= min && value <= max;
    }

    return false;
  }
  message(field: string, min: number, max: number): string {
    return `${field} must be between ${min} and ${max}`;
  }
}
