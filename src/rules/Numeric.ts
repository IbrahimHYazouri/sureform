import ValidationRule from "../core/ValidationRule";

export class Numeric implements ValidationRule {
  name = "numeric";

  validate(value: any): boolean {
    if (value === null || value === "") return false;

    return !isNaN(parseFloat(value)) && isFinite(value as any);
  }

  message(field: string): string {
    return `${field} must be a number`;
  }
}
