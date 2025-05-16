import { AbstractRule } from "../core/AbstractRule";
export declare class Numeric extends AbstractRule {
    name: string;
    validate(value: any): boolean;
    message(field: string): string;
}
