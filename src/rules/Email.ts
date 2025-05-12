import ValidationRule from "../core/ValidationRule";

export class Email implements ValidationRule {
  name = "email";

  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  validate(value: any): boolean {
    if (value === null || value === "") return false;

    return typeof value === "string" && this.emailRegex.test(value);
  }

  message(field: string): string {
    return `${field} must be a valid email address.`;
  }
}
