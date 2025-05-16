import { AbstractRule } from "../core/AbstractRule";
export declare class Boolean extends AbstractRule {
    name: string;
    private trueVals;
    private falseVals;
    validate(value: any): boolean;
    message(field: string): string;
}
