import { AbstractRule } from "../core/AbstractRule";

export class InArray extends AbstractRule {
  name = "in-array";

  validate(value: any, list: any[]) {
    if (value == null) return false;

    return list.includes(value);
  }

  message(field: string, list: any[]): string {
    return `${this.ucfirst(field)} must be on of [${list.join(", ")}]`;
  }
}
