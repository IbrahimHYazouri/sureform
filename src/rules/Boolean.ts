import { AbstractRule } from "../core/AbstractRule";

export class Boolean extends AbstractRule {
  name = "boolean";

  private trueVals = [true, "true", 1, "1", "yes", "on"];
  private falseVals = [false, "false", 0, "0", "no", "off"];

  validate(value: any): boolean {
    if (value === null || value === "") return true;

    return this.trueVals.includes(value) || this.falseVals.includes(value);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} must be a boolean.`;
  }
}
