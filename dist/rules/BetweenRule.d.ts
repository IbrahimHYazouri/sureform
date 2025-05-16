import { AbstractRule } from "../core/AbstractRule";
export declare class BetweenRule extends AbstractRule {
    name: string;
    validate(value: any, min: number, max: number): boolean;
    message(field: string, min: number, max: number): string;
}
