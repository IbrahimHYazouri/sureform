import { AbstractRule } from "../core/AbstractRule";
export declare class ArrayRule extends AbstractRule {
    name: string;
    validate(value: any): boolean;
    message(field: string): string;
}
