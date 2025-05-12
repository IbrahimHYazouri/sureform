import ValidationRule from "../core/ValidationRule";

export class ArrayRule implements ValidationRule {
  name = "array";

  validate(value: any): boolean {
    if (value === null) return false;

    return Array.isArray(value);
  }

  message(field: string): string {
    return `${field} must be an array.`;
  }
}
