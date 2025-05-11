import ValidationRule from "../core/ValidationRule";

export class Required implements ValidationRule {
  name = 'required';

  validate(field: string, value: any, params?: any): boolean {
    return value !== null && value !== undefined && value !== "";
  }

  message(field: string): string {
    return `This filed [${field}] is required`;
  }
}
