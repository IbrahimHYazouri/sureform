import ValidationRule from "../core/ValidationRule";

export class StringRule implements ValidationRule {
  name = "string";

  validate(value: any): boolean {
    if (value === null) return false;

    return typeof value === "string";
  }

  message(field: string): string {
    return `${field} must be a string.`;
  }
}
