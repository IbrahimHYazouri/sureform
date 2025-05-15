import { AbstractRule } from "../core/AbstractRule";

export default class FileType extends AbstractRule {
  name = "file-type";

  validate(value: any, types: string[]): boolean {
    if (!value) return false;

    return value.type && types.includes(value.type);
  }

  message(field: string, types: string[]): string {
    return `${this.ucfirst(field)} must be of type: ${types.join(", ")}`;
  }
}
