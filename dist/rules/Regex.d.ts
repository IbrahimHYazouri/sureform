import { AbstractRule } from "../core/AbstractRule";
export declare class Regex extends AbstractRule {
    name: string;
    validate(value: any, pattern: RegExp): boolean;
    message(field: string): string;
}
