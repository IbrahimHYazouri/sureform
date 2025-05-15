import { AbstractRule } from "../core/AbstractRule";

export class Url extends AbstractRule {
  name = "url";

  private urlRegex = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;

  validate(value: any): boolean {
    if (value === null || value === "") return false;

    return typeof value === "string" && this.urlRegex.test(value);
  }

  message(field: string): string {
    return `${this.ucfirst(field)} must be a valid URL`;
  }
}
