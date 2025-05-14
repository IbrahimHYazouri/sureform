import { AbstractRule } from "../core/AbstractRule";

export class Email extends AbstractRule {
  name = "email";

  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  validate(value: any): boolean {
    if (value === null || value === "") return false;

    return typeof value === "string" && this.emailRegex.test(value);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} must be a valid email address.`;
  }
}
