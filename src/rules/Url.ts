import ValidationRule from "../core/ValidationRule";

export class Url implements ValidationRule {
  name = "url";

  private urlRegex = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;

  validate(value: any): boolean {
    if (value === null || value === "") return false;

    return typeof value === "string" && this.urlRegex.test(value);
  }

  message(field: string): string {
    return `${field} must be a valid URL`;
  }
}
