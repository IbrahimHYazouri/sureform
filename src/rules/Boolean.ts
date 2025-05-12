import ValidationRule from "../core/ValidationRule";

export class Boolean implements ValidationRule {
  name = "boolean";

  private trueVals = [true, "true", 1, "1", "yes", "on"];
  private falseVals = [false, "false", 0, "0", "no", "off"];

  validate(value: any): boolean {
    if (value === null || value === "") return false;

    return this.trueVals.includes(value) || this.falseVals.includes(value);
  }

  message(field: string): string {
    return `${field} must be a boolean.`;
  }
}
