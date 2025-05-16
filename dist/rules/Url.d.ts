import { AbstractRule } from "../core/AbstractRule";
export declare class Url extends AbstractRule {
    name: string;
    private urlRegex;
    validate(value: any): boolean;
    message(field: string): string;
}
