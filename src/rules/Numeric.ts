import { AbstractRule } from "../core/AbstractRule";

export class Numeric extends AbstractRule {
  name = "numeric";

  validate(value: any): boolean {
    if (value === null || value === "") return true;

    return !isNaN(parseFloat(value)) && isFinite(value as any);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} must be a number`;
  }
}
