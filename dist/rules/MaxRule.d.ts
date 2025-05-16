import { AbstractRule } from "../core/AbstractRule";
export declare class MaxRule extends AbstractRule {
    name: string;
    validate(value: any, max: number): boolean;
    message(field: string, max: number): string;
}
