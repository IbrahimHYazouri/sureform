import { AbstractRule } from "../core/AbstractRule";
export declare class MinRule extends AbstractRule {
    name: string;
    validate(value: any, min: number): boolean;
    message(field: string, min: number): string;
}
