import { AbstractRule } from "../core/AbstractRule";
export declare class StringRule extends AbstractRule {
    name: string;
    validate(value: any): boolean;
    message(field: string): string;
}
