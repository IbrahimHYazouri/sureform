import ValidationRule from "./ValidationRule";

export abstract class AbstractRule implements ValidationRule {
  abstract name: string;
  abstract validate(value: any, ...args: any): boolean;
  abstract message(field: string, ...args: any): string;

  ucfirst(field: string): string {
    return field.charAt(0).toUpperCase() + field.slice(1);
  }
}
